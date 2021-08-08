import serial
ser = serial.Serial('/dev/ttyACM0')


def read_uart():
    global pms, fmhds, tps, hds
    while True:
        nmea = ser.readline()
        # $GNVTG,,T,,M,0.074,N,0.138,K,A*34
        # $GNGGA,001801.40,4459.08735,N,09319.82716,W,1,12,0.50,281.2,M,-30.8,M,,*78

        if '$GNGGA' in line:
            print(line)
        if '$GNVTG' in line:
            print(line)
