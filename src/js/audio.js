import one from '../assets/audio/distance/1.mp3'
import two from '../assets/audio/distance/2.mp3'
import three from '../assets/audio/distance/3.mp3'
import four from '../assets/audio/distance/4.mp3'
import five from '../assets/audio/distance/5.mp3'
import six from '../assets/audio/distance/6.mp3'
import seven from '../assets/audio/distance/7.mp3'
import eight from '../assets/audio/distance/8.mp3'
import nine from '../assets/audio/distance/9.mp3'
import ten from '../assets/audio/distance/10.mp3'

import black from '../assets/audio/colors/black.mp3'
import blue from '../assets/audio/colors/blue.mp3'
import brown from '../assets/audio/colors/brown.mp3'
import darkblue from '../assets/audio/colors/darkblue.mp3'
import lightblue from '../assets/audio/colors/lightblue.mp3'
import lightgreen from '../assets/audio/colors/lightgreen.mp3'
import orange from '../assets/audio/colors/orange.mp3'
import pink from '../assets/audio/colors/pink.mp3'
import purple from '../assets/audio/colors/purple.mp3'
import red from '../assets/audio/colors/red.mp3'
import white from '../assets/audio/colors/white.mp3'
import yellow from '../assets/audio/colors/yellow.mp3'

const colorSounds = [
  { name: 'black', sound: black },
  { name: 'blue', sound: blue },
  { name: 'brown', sound: brown },
  { name: 'darkblue', sound: darkblue },
  { name: 'lightblue', sound: lightblue },
  { name: 'lightgreen', sound: lightgreen },
  { name: 'orange', sound: orange },
  { name: 'pink', sound: pink },
  { name: 'purple', sound: purple },
  { name: 'red', sound: red },
  { name: 'white', sound: white },
  { name: 'yellow', sound: yellow },
]

const distanceSounds = [one, two, three, four, five, six, seven, eight, nine, ten]

export const playDistance = distance => {
  
  const dist = parseInt(distance)
  console.log('... play distance', dist)
  if (dist < 10){
    if (distanceSounds[dist]) {
      const a = new Audio(distanceSounds[dist])
      a.play()
    }
  }
}

export const playColor = color => {
  const target = colorSounds.filter(colorSound => colorSound.name == color)
  if (target[0]) {
    const a = new Audio(target[0].sound)
    a.play()
  }
}