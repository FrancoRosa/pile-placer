from os import getcwd
from time import sleep, time
from math import sin, cos, atan2, sqrt, radians
from pyproj import Transformer
import openpyxl

print(getcwd())

color_codes = {
    'BLK': 'black',
    'BRO': 'brown',
    'DBL': 'darkblue',
    'LBL': 'lightblue',
    'LGR': 'lightgreen',
    'ORA': 'orange',
    'PNK': 'pink',
    'PRP': 'purple',
    'RED': 'red',
    'WHT': 'white',
    'YEL': 'yellow',
}

global wgs84_to_proj, proj_to_wgs84


def is_csv(filedir):
    return filedir.split('.')[-1] == 'csv'


def xlsx_to_rows(filename):
    xlsx = openpyxl.load_workbook(filename)
    sheet = xlsx.active
    data = sheet.rows
    result = []
    for row in data:
        newrow = ''
        l = list(row)
        for i in range(len(l)):
            if i == len(l) - 1:
                newrow += str(l[i].value)
            else:
                newrow += str(l[i].value) + ','
        result.append(newrow)
    return result


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
    if '/' in str:
        str = str.split('/')[0]
    if '-' in str:
        code = str.split('-')[-1]
        str = color_codes.get(code, '')
    if len(str.split('.')) == 4:
        code = str.split('.')[-1]
        str = color_codes.get(code, '')
    try:
        return str.lower()
    except:
        return ''


def rows_to_json(rows, epsg_code):
    # try:
    #     if epsg_code != '0':
    #         transformer = Transformer.from_crs(
    #             'epsg:%s' % epsg_code, 'epsg:4326')
    # except:
    #     print('... invalid crs code')
    #     return
    result = []
    headers = rows[0]
    print("... headers:", headers)
    values = rows[1:]
    if 'PILE ID,Pile Color,X,Y,Z' in headers:
        for value in values:
            value = value.split(',')
            x, y = float(value[2]), float(value[3])
            latlng = proj_to_wgs84.transform(x, y)
            result.append({
                "pile_id": value[0],
                "lat": latlng[0],
                "lng": latlng[1],
                "color": color_convert(value[1]),
                "x": x,
                "y": y,
                "placed": False
            })

    if 'P,N,E,N,N' in headers:
        for value in values:
            value = value.split(',')
            x, y = float(value[2]), float(value[1])
            latlng = proj_to_wgs84.transform(x, y)
            result.append({
                "pile_id": value[0],
                "lat": latlng[0],
                "lng": latlng[1],
                "color": '',
                "x": x,
                "y": y,
                "placed": False
            })

    if 'P,N,E,N,C' in headers:
        for value in values:
            value = value.split(',')
            x, y = float(value[2]), float(value[1])
            latlng = proj_to_wgs84.transform(x, y)
            result.append({
                "pile_id": value[0],
                "lat": latlng[0],
                "lng": latlng[1],
                "color": color_convert(value[4]),
                "x": x,
                "y": y,
                "placed": False
            })

    if 'Name,Latitude,Longitude,Special WP,Dominant' in headers:
        for value in values:
            value = value.split(',')
            result.append({
                "pile_id": value[0],
                "lat": float(value[1]),
                "lng": float(value[2]),
                "color": color_convert(value[4]),
                "x": 0,
                "y": 0,
                "placed": False
            })

    if 'Inverter,Rack ID,Pile ID,Pile ID with Color,X,Y' in headers:
        for value in values:
            value = value.split(',')
            x, y = float(value[4]), float(value[5])
            latlng = proj_to_wgs84.transform(x, y)
            result.append({
                "pile_id": value[2],
                "lat": latlng[0],
                "lng": latlng[1],
                "color": color_convert(value[3]),
                "x": x,
                "y": y,
                "placed": False
            })

    if 'Pilecode,N,E' in headers:
        for value in values:
            value = value.split(',')
            x, y = float(value[2]), float(value[1])
            latlng = proj_to_wgs84.transform(x, y)
            result.append({
                "pile_id": value[0],
                "lat": latlng[0],
                "lng": latlng[1],
                "color": color_convert(value[0]),
                "x": x,
                "y": y,
                "placed": False
            })

    return result


def distance(ax, ay, bx, by):
    return sqrt((bx-ax)**2 + (by-ay)**2)


def polygon(center, heading, config):
    global wgs84_to_proj, proj_to_wgs84
    proj_center = wgs84_to_proj.transform(
        float(center['lat']), float(center['lng']))

    cenX = proj_center[0]
    cenY = proj_center[1]
    anX = float(config['antennaX'])
    anY = float(config['antennaY'])
    tWid = float(config['truckWid'])
    tLen = float(config['truckLen'])
    bay1 = float(config['bay1'])
    bay2 = float(config['bay2'])
    rot = radians(float(heading['heading']))

    def rotate_point(x, y, rot):
        # example:  x = cenX - anX,  y = cenY + anY,
        # vectors
        dist = distance(cenX, cenY, x, y)
        ang = atan2(y - cenY, x - cenX)
        # Cartesian coordinates
        newX = dist*cos(ang - rot) + cenX
        newY = dist*sin(ang - rot) + cenY
        return proj_to_wgs84.transform(newX, newY)

    return {
        'truck': [
            # truck edges
            rotate_point(cenX - anX, cenY + anY, rot),
            rotate_point(cenX - (anX - tWid), cenY + anY, rot),
            rotate_point(cenX - (anX - tWid), cenY + anY - tLen, rot),
            rotate_point(cenX - anX, cenY + anY - tLen, rot),
            # line in front of truck
            rotate_point(cenX - anX + tWid/2, cenY + anY, rot),
            rotate_point(cenX - anX + tWid/2, cenY + anY + 100, rot),
            # Rectangle representing bundle
            rotate_point(cenX - anX - 1, cenY + anY - bay1 - 6, rot),
            rotate_point(cenX - anX + tWid + 1, cenY + anY - bay2 - 6, rot),
            rotate_point(cenX - anX - 1, cenY + anY - bay1 + 6, rot),
            rotate_point(cenX - anX - 1, cenY + anY - bay1 + 6, rot),
            # line crossing bays
            rotate_point(cenX - anX - 3, cenY + anY - bay1, rot),
            rotate_point(cenX - anX + tWid + 3, cenY + anY - bay2, rot),
        ],
        'bays': [
            # bay points
            rotate_point(cenX - anX - 2, cenY + anY - bay1, rot),
            rotate_point(cenX - anX + tWid + 2, cenY + anY - bay2, rot),
        ]
    }


def coordinate_distance(p1, p2):
    global wgs84_to_proj
    p1_proj = wgs84_to_proj.transform(p1['lat'], p1['lng'])
    p2_proj = wgs84_to_proj.transform(p2['lat'], p2['lng'])
    return distance(p1_proj[0], p1_proj[1], p2_proj[0], p2_proj[1])


def create_projs(epsg_code):
    global wgs84_to_proj, proj_to_wgs84
    wgs84_to_proj = Transformer.from_crs(
        'epsg:4326', 'epsg:%s' % epsg_code)
    proj_to_wgs84 = Transformer.from_crs(
        'epsg:%s' % epsg_code, 'epsg:4326')


create_projs('2229')
