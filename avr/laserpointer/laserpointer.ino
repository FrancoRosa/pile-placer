#include <Servo.h>

// Servo definitions
#define s1base 9
#define s1top 10
#define s2base 5
#define s2top 6

Servo servo1base;
Servo servo1top;
Servo servo2base;
Servo servo2top;

// Serial related variables
const int buffer_size = 10;
int buffer_i = 0;
char buffer[buffer_size];

void setup()
{
  servoBase.attach(9);
  servoTop.attach(10);
  Serial.begin(9600);
  Serial.println("... start");
}

int val[] = {0, 45, 90, 135, 180, 90};

void processCommand(char c)
{
  buffer[buffer_i] = c;
  buffer_i++;
  if (buffer_i > buffer_size)
    buffer_i = 0;
  if ((buffer_i >= 2) && ((c == '\n') || (c == '\r')))
  {
    buffer[buffer_i] = '\0';
    if (memcmp("arm", buffer, 3) == 0)
    {
      flagArmed = true;
    }
    if (memcmp("disarm", buffer, 3) == 0)
    {
      flagArmed = false;
      flagAlarm = false;
    }
    buffer_i = 0;
    for (int i = 0; i < buffer_size; i++)
      buffer[i] = 0;
  }
}

void loop()
{
  // for (int i = 0; i < 6; i++)
  // {
  //   Serial.println(val[i]);
  //   servoBase.write(val[i]);
  //   delay(1000);
  // }
  // for (int i = 0; i < 6; i++)
  // {
  //   Serial.println(val[i]);
  //   servoTop.write(val[i]);
  //   delay(1000);
  // }
  if (Serial.available() > 0)
  {
    processByte(Serial.read());
  }
}
