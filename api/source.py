from helpers import distance, polygon, cvs_to_rows, rows_to_json, coordinate_distance
from flask import Flask, request, jsonify, make_response
from flask_socketio import SocketIO
from flask_cors import CORS
from os import uname, path
from werkzeug.utils import secure_filename
import json
from threading import Thread


rpi = uname()[4] != 'x86_64'

UPLOAD_FOLDER = 'cvs_files'
ALLOWED_EXTENSIONS = {'csv'}

app = Flask(__name__)
CORS(app)
app.config['SECRET_KEY'] = 'secret'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
socketio = SocketIO(app, cors_allowed_origins="*")

port = 9999

location = {"lat": 0, "lng": 0}
heading = {"heading": 0}
bay_to_waypoint = {"distance": 0}
truck = {"truck":[], "bays":[]}
config = {
  'truckLen': 0,
  'truckWid': 0,
  'antennaX': 0,
  'antennaY': 0,
  'bay1': 0,
  'bay2': 0,
  'epsg': '0'
}
ref_bay = {}
waypoint = {}
waypoints = []


def read_uart():
  global location, heading
  while True:
    nmea = ser.readline()
    if b'$GNGGA' in nmea:
        location = get_latlng(nmea)
    if b'$GNVTG' in nmea:
        heading = get_course(nmea)
    truck = polygon(location, heading, config)
    broadcast({**heading, **location, **truck, **bay_to_waypoint})

Thread(target=read_uart, args=[]).start()

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

def broadcast(val):
  socketio.send(json.dumps(val), broadcast=True)

@app.route('/')
def index():
  return "... source server running on port %s"%port

@app.route('/api/status', methods=['get'])
def get_status():
  global heading, location
  response = make_response(jsonify({
    **heading,
    **location  
  }), 200)
  response.headers["Content-Type"] = "application/json"
  return response

@app.route('/api/waypoints', methods=['get'])
def get_waypoints():
  global waypoints
  response = make_response(jsonify({
    "waypoints": waypoints,
  }), 200)
  response.headers["Content-Type"] = "application/json"
  return response

@app.route('/api/location', methods=['post'])
def set_location():
  global location, truck, bay_to_waypoint, waypoint, ref_bay
  location = request.get_json()
  truck = polygon(location, heading, config)
  
  if (len(waypoint) > 0 and len(ref_bay) > 0):
    bay = truck["bays"][int(ref_bay["bay"])]
    bay_to_waypoint = {
      "distance": coordinate_distance(waypoint, {'lat': bay[0],'lng': bay[1]}, config["epsg"])
    } 
  broadcast({**heading, **location, **truck, **bay_to_waypoint})
  response = make_response(jsonify({
    "message": True,
  }), 200)
  response.headers["Content-Type"] = "application/json"
  return response

@app.route('/api/heading', methods=['post'])
def set_heading():
  global heading
  heading = request.get_json()
  broadcast({**heading, **location, **truck})
  response = make_response(jsonify({
    "message": True,
  }), 200)
  response.headers["Content-Type"] = "application/json"
  return response

@app.route('/api/config', methods=['post'])
def set_config():
  global config
  config = request.get_json()
  response = make_response(jsonify({
    "message": True,
  }), 200)
  response.headers["Content-Type"] = "application/json"
  return response

@app.route('/api/bay', methods=['post'])
def set_ref_bay():
  global ref_bay
  ref_bay = request.get_json()
  print('... ', ref_bay)
  response = make_response(jsonify({
    "message": True,
  }), 200)
  response.headers["Content-Type"] = "application/json"
  return response

@app.route('/api/waypoint', methods=['post'])
def set_waypoint():
  global waypoint
  waypoint = request.get_json()
  print('... ', waypoint)
  response = make_response(jsonify({
    "message": True,
  }), 200)
  response.headers["Content-Type"] = "application/json"
  return response

@app.route('/api/file', methods=['post'])
def process_file():
  global waypoints, config
  message = False
  rows_processed = 0
  file = request.files['file']
  code = config['epsg']
  if file and allowed_file(file.filename):
      filename = secure_filename(file.filename)
      filedir = path.join(app.config['UPLOAD_FOLDER'], filename)
      file.save(filedir)
      message = True
      rows = cvs_to_rows(filedir)
      waypoints = rows_to_json(rows, code)
      rows_processed = len(waypoints)
  response = make_response(jsonify({
    "message": message, "rows": rows_processed
  }), 200)
  response.headers["Content-Type"] = "application/json"
  return response

app.run(debug=False, port=port, host='0.0.0.0')