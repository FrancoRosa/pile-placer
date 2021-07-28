from os import getcwd
from time import sleep

from pyproj import Transformer

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

