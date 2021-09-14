/*    Copyright 2018 Noury Bouraqadi (https://noury.tech)
 *  
 *    This program is free software: you can redistribute it and/or modify
 *    it under the terms of the GNU General Public License as published by
 *    the Free Software Foundation, either version 3 of the License, or
 *    (at your option) any later version.
 *
 *    This program is distributed in the hope that it will be useful,
 *    but WITHOUT ANY WARRANTY; without even the implied warranty of
 *    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *    GNU General Public License for more details.
 *
 *    You should have received a copy of the GNU General Public License
 *    along with this program.  If not, see <http://www.gnu.org/licenses/>.
 * 
 */
#include "ax12.h" //ax12 library allows to send DYNAMIXEL commands

void setup(){
  Serial.println("");   
  Serial.begin(9600);
  Serial.println("");
  delay(1000);   
  Serial.println("#### Serial Communication Established.");
  delay(1000);   
}


int getServoPosition(int servoID){
  int position;
  for(int i = 0; i < 10; i++){ 
      position = dxlGetPosition(servoID); if(position > -1){
      return position;
    }
  }
  Serial.print("... Failed reading position of servo ");
  Serial.println(servoID);
  return -1;
}


void loop() {
  
  for(int i = 0; i < 252; i++) { 
    delay(1000);   
    Serial.print("... Reading id:");
    Serial.println(i);
    Serial.print("... position:");
    Serial.println(getServoPosition(i));
  }
}


