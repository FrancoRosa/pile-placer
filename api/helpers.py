from os import getcwd
from time import sleep

import pandas as pd
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
  return str.replace(' ', '').lower()

def rows_to_json(rows):
  fips0405 = "+proj=lcc +lat_1=34.03333333333333 +lat_2=35.46666666666667 +lat_0=33.5 +lon_0=-118 +x_0=2000000 +y_0=500000.0000000002 +ellps=GRS80 +datum=NAD83 +to_meter=0.3048006096012192 +no_defs"
  wgs84 = "+init=EPSG:4326"
  transformer =  Transformer.from_crs(fips0405, wgs84)

  result = []
  headers = rows[0]
  values = rows[1:]
  if headers == 'PILE ID,Pile Color,X,Y,Z\n':
    for value in values:
      value = value.split(',')
      x, y = float(value[2]), float(value[3])
      latlng = transformer.transform(x, y)
      result.append({
        "pile_id": value[0],
        "x": latlng[0],
        "y": latlng[1],
        "color": color_convert(value[1])
      })
  return result




rows = cvs_to_rows('data.csv')
json = rows_to_json(rows)

for i in json:
  print('%s,'%i)

  # transform longitudes and latitudes to OSGB36 Eastings and Northings very accurately:
# use convert_bng()
# transform OSGB36 Eastings and Northings to longitude and latitude, very accurately:
# use convert_lonlat()