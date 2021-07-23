// This component will send "POST" to set theoric current coordinates //
// and heading info to change the main map behavior
import {Map, Marker, GoogleApiWrapper, Polyline} from 'google-maps-react';
import { useState } from 'react';

const NavDebug = ({google}) => {
  const [course, setCourse] = useState(0)
  
  const getMapCordinates = (mapProps, map, clickEvent) => {
    let lat = clickEvent.latLng.lat().toFixed(5)
    let lng = clickEvent.latLng.lng().toFixed(5)
    console.log(lat, lng)
  }
  
  const setCourseValue = e => {
    const sliderValue = parseFloat(e.target.value).toFixed(1)
    setCourse(sliderValue)
  }

  return (
    <>
      <div className="container map">
        <Map 
          google={google} zoom={10} 
          onClick={getMapCordinates}
        />
      </div>
      <div className="container mt-4 pt-4">
        <div className="columns">
          <div className="column">
            <p>Heading: {course}° </p>
          </div>
          <div className="column">
            <input 
              class="slider is-fullwidth" 
              step="1" min="0" max="100" 
              value={course} type="range"
              onInput={setCourseValue}
              />
          </div>
        </div>
      </div>
    </>
  )
}


export default GoogleApiWrapper({
  apiKey: ('AIzaSyBsgd5A9q-23gHy8tL6e5O0lct6JoD97xo')
})(NavDebug)