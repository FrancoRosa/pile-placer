from flask import Flask, request, jsonify, make_response
from flask_socketio import SocketIO
from flask_cors import CORS
from os import uname
import json

rpi = uname()[4] != 'x86_64'

app = Flask(__name__)
CORS(app)
app.config['SECRET_KEY'] = 'secret'
socketio = SocketIO(app, cors_allowed_origins="*")

port = 9999

location = {"lat": 0, "lng": 0}
heading = {"heading": 0}

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

app.run(debug=False, port=port)