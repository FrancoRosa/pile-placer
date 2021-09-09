#include <Servo.h>
#include <ArduinoJson.h>

#define led 13
#define s1base 9
#define s1top 10
#define s2base 5
#define s2top 6
#define s1laser 7
#define s2laser 11

Servo servo1base;
Servo servo1top;
Servo servo2base;
Servo servo2top;

void setup()
{
  servo1base.attach(s1base);
  servo1top.attach(s1top);
  servo2base.attach(s2base);
  servo2top.attach(s2top);
  pinMode(s1laser, OUTPUT);
  pinMode(s2laser, OUTPUT);
  pinMode(led, OUTPUT);

  Serial.begin(9600);
  Serial.println("... start");
}

void loop()
{
  digitalWrite(led, !digitalRead(led));
  delay(100);
  Serial.print('.');
}
