from helpers import cvs_to_rows, rows_to_json
from flask import Flask, request, jsonify, make_response
from flask_socketio import SocketIO
from flask_cors import CORS
from os import uname, path
from werkzeug.utils import secure_filename
import json

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
waypoints = []

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
    "waypoints": waypoints[:200],
  }), 200)
  response.headers["Content-Type"] = "application/json"
  return response

@app.route('/api/location', methods=['post'])
def set_location():
  global location
  location = request.get_json()
  broadcast({**heading, **location})
  response = make_response(jsonify({
    "message": True,
  }), 200)
  response.headers["Content-Type"] = "application/json"
  return response

@app.route('/api/heading', methods=['post'])
def set_heading():
  global heading
  heading = request.get_json()
  broadcast({**heading, **location})
  response = make_response(jsonify({
    "message": True,
  }), 200)
  response.headers["Content-Type"] = "application/json"
  return response

@app.route('/api/file', methods=['post'])
def process_file():
  global waypoints
  message = False
  rows_processed = 0
  file = request.files['file']
  code = request.form['code']
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

app.run(debug=False, port=port)