from os import getcwd
from time import sleep
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
  result = []
  headers = rows[0]
  values = rows[1:]
  if headers == 'PILE ID,Pile Color,X,Y,Z\n':
    for value in values:
      value = value.split(',')
      result.append({
        "lat": round(float(value[2])/10e5,8),
        "lng": round(float(value[3])/10e4,8),
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