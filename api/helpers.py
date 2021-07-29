from os import getcwd
from time import sleep
from math import sin, cos, atan2, sqrt, radians
from pyproj import Transformer, transformer

print(getcwd())

def cvs_to_rows(path):
  result = []
  f = open(path, "r")
  while True:
    line = f.readline()
    if line:
      result.append(line)
    else:
      return result

def color_convert(str):
  
  if ' - ' in str:
    str = str.split(' - ')[0]
  if '"' in str:
    str = str.replace('"', '')
  if ' ' in str:
    str = str.replace(' ', '')  
  return str.lower()

def rows_to_json(rows, epsg_code):
  try:
    if epsg_code != '0':
      transformer =  Transformer.from_crs('epsg:%s'%epsg_code,'epsg:4326')
  except:
    print('... invalid crs code')
    return
  result = []
  headers = rows[0]
  print("... headers:", headers)
  values = rows[1:]
  if 'PILE ID,Pile Color,X,Y,Z' in headers:
    for value in values:
      value = value.split(',')
      x, y = float(value[2]), float(value[3])
      latlng = transformer.transform(x, y)
      result.append({
        "pile_id": value[0],
        "lat": latlng[0],
        "lng": latlng[1],
        "color": color_convert(value[1]),
        "x": x,
        "y": y,
      })
  

  if 'Name,Latitude,Longitude,Special WP,Dominant' in headers:
    for value in values:
      value = value.split(',')
      result.append({
        "pile_id": value[0],
        "lat": value[1],
        "lng": value[2],
        "color": color_convert(value[4]),
        "x": 0,
        "y": 0,
      })

  return result

def distance(ax,ay,bx,by):
  return sqrt((bx-ax)**2 + (by-ay)**2)

def polygon(center, heading, config):
  wgs84_to_proj = Transformer.from_crs('epsg:4326','epsg:%s'%config['epsg'])
  proj_to_wgs84 = Transformer.from_crs('epsg:%s'%config['epsg'],'epsg:4326',)
  proj_center = wgs84_to_proj.transform(float(center['lat']), float(center['lng']))
  
  cenX = proj_center[0]
  cenY = proj_center[1]
  anX = float(config['antennaX'])
  anY = float(config['antennaY'])
  tWid = float(config['truckWid'])
  tLen = float(config['truckLen'])
  bay1 = float(config['bay1'])
  bay2 = float(config['bay2'])
  rot = radians(float(heading['heading']))

  proj_poly = {
    'a':{
      'x': cenX - anX,
      'y': cenY + anY},
    'b':{
      'x': cenX - (anX - tWid),
      'y': cenY + anY},
    'c':{
      'x': cenX - (anX - tWid),
      'y': cenY + anY - tLen},
    'd':{
      'x': cenX - anX,
      'y': cenY + anY - tLen},
    'bay1':{
      'x': cenX - anX,
      'y': cenY + anY - bay1 },
    'bay2':{
      'x': cenX - anX + tWid,
      'y': cenY + anY - bay2},
}


  vectors = {
    'a': {
      'dist': distance(cenX, cenY, proj_poly['a']['x'], proj_poly['a']['y']),
      'ang': atan2(proj_poly['a']['y'] - cenY, proj_poly['a']['x'] - cenX)
    },
    'b': {
      'dist': distance(cenX, cenY, proj_poly['b']['x'], proj_poly['b']['y']),
      'ang': atan2(proj_poly['b']['y'] - cenY, proj_poly['b']['x'] - cenX)
    },
    'c': {
      'dist': distance(cenX, cenY, proj_poly['c']['x'], proj_poly['c']['y']),
      'ang': atan2(proj_poly['c']['y'] - cenY, proj_poly['c']['x'] - cenX)
    },
    'd': {
      'dist': distance(cenX, cenY, proj_poly['d']['x'], proj_poly['d']['y']),
      'ang': atan2(proj_poly['d']['y'] - cenY, proj_poly['d']['x'] - cenX)
    },
    'bay1': {
      'dist': distance(cenX, cenY, proj_poly['bay1']['x'], proj_poly['bay1']['y']),
      'ang': atan2(proj_poly['bay1']['y'] - cenY, proj_poly['bay1']['x'] - cenX)
    },
    'bay2': {
      'dist': distance(cenX, cenY, proj_poly['bay2']['x'], proj_poly['bay2']['y']),
      'ang': atan2(proj_poly['bay2']['y'] - cenY, proj_poly['bay2']['x'] - cenX)
    },
  }
  
  poly = {
    'a': {
      'x': vectors['a']['dist']*cos(vectors['a']['ang'] - rot) + cenX,
      'y': vectors['a']['dist']*sin(vectors['a']['ang'] - rot) + cenY,
    },
    'b': {
      'x': vectors['b']['dist']*cos(vectors['b']['ang'] - rot) + cenX,
      'y': vectors['b']['dist']*sin(vectors['b']['ang'] - rot) + cenY,
    },
    'c': {
      'x': vectors['c']['dist']*cos(vectors['c']['ang'] - rot) + cenX,
      'y': vectors['c']['dist']*sin(vectors['c']['ang'] - rot) + cenY,
    },
    'd': {
      'x': vectors['d']['dist']*cos(vectors['d']['ang'] - rot) + cenX,
      'y': vectors['d']['dist']*sin(vectors['d']['ang'] - rot) + cenY,
    },
    'bay1': {
      'x': vectors['bay1']['dist']*cos(vectors['bay1']['ang'] - rot) + cenX,
      'y': vectors['bay1']['dist']*sin(vectors['bay1']['ang'] - rot) + cenY,
    },
    'bay2': {
      'x': vectors['bay2']['dist']*cos(vectors['bay2']['ang'] - rot) + cenX,
      'y': vectors['bay2']['dist']*sin(vectors['bay2']['ang'] - rot) + cenY,
    },
  }
  
  return {
    'truck': [
      proj_to_wgs84.transform(poly['a']['x'], poly['a']['y']),
      proj_to_wgs84.transform(poly['b']['x'], poly['b']['y']),
      proj_to_wgs84.transform(poly['c']['x'], poly['c']['y']),
      proj_to_wgs84.transform(poly['d']['x'], poly['d']['y']),
    ],
    'bays': [
      proj_to_wgs84.transform(poly['bay1']['x'], poly['bay1']['y']),
      proj_to_wgs84.transform(poly['bay2']['x'], poly['bay2']['y']),
    ]
  }
