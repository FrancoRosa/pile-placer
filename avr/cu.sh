#  Arduino nano commands
#  echo '... compile'
#  arduino-cli compile --fqbn arduino:avr:nano:cpu=atmega328old laserpointer
#  echo '... upload'
#  arduino-cli upload --port /dev/ttyUSB0 --fqbn arduino:avr:nano:cpu=atmega328old laserpointer
#  echo '... done'
 

#  Arbotix commands
 echo '... compile'
<<<<<<< HEAD
 arduino-cli compile --fqbn arbotix:avr:arbotix dynapointer
 echo '... upload'
 arduino-cli upload --port /dev/ttyUSB0 --fqbn arbotix:avr:arbotix dynapointer
=======
 arduino-cli compile --fqbn arbotix:avr:arbotix laserpointer
 echo '... upload'
 arduino-cli upload --port /dev/ttyUSB0 --fqbn arbotix:avr:arbotix laserpointer
>>>>>>> 55d0bab8ede17689f8d23758b7ef3677215ab2c1
 echo '... done'
 