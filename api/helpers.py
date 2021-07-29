from os import getcwd
from time import sleep

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

def polygon(center, config):
  wgs84_to_proj = Transformer.from_crs('epsg:4326','epsg:%s'%config['epsg'])
  proj_to_wgs84 = Transformer.from_crs('epsg:%s'%config['epsg'],'epsg:4326',)
  proj_center = wgs84_to_proj.transform(float(center['lat']), float(center['lng']))
  
  proj_poly = {
    'a':{
      'x': proj_center[0] - float(config['antennaX']),
      'y': proj_center[1] - float(config['antennaY'])},
    'b':{
      'x': proj_center[0] - float(config['antennaX']) + float(config['truckWid']),
      'y': proj_center[1] - float(config['antennaY'])},
    'c':{
      'x': proj_center[0] - float(config['antennaX']) + float(config['truckWid']),
      'y': proj_center[1] - float(config['antennaY']) + float(config['truckLen'])},
    'd':{
      'x': proj_center[0] - float(config['antennaX']),
      'y': proj_center[1] - float(config['antennaY']) + float(config['truckLen'])},
  }

  return {
    'truck': [
      proj_to_wgs84.transform(proj_poly['a']['x'], proj_poly['a']['y']),
      proj_to_wgs84.transform(proj_poly['b']['x'], proj_poly['b']['y']),
      proj_to_wgs84.transform(proj_poly['c']['x'], proj_poly['c']['y']),
      proj_to_wgs84.transform(proj_poly['d']['x'], proj_poly['d']['y']),
    ]
  }
