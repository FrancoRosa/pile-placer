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
  return str.replace(' ', '').lower()

def rows_to_json(rows, epsg_code):
  try:
    transformer =  Transformer.from_crs('epsg:%s'%epsg_code,'epsg:4326')
  except:
    print('... invalid crs code')
    return
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
        "lat": latlng[0],
        "lng": latlng[1],
        "color": color_convert(value[1])
      })
  return result

# rows = cvs_to_rows('data.csv')
# json = rows_to_json(rows, '6424')

# for i in json[:20]:
#   print('%s,'%i)
