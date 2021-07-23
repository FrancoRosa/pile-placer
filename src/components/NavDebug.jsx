// This component will send "POST" to set theoric current coordinates //
// and heading info to change the main map behavior
import {Map, Marker, GoogleApiWrapper, Polyline} from 'google-maps-react';
import { useState } from 'react';
import { setHeading, setLatLng } from '../js/api';

const NavDebug = ({google}) => {
  const [course, setCourse] = useState(0)
  const [markerLatLng, setMarkerLatLng] = useState({lat:0,lng:0})
  
  const getMapCordinates = (mapProps, map, clickEvent) => {
    let location = {
      lat: clickEvent.latLng.lat().toFixed(5),
      lng: clickEvent.latLng.lng().toFixed(5)
    }
    setMarkerLatLng(location)
    setLatLng(location)
    console.log(location)
  }
  
  const setCourseValue = e => {
    const sliderValue = parseFloat(e.target.value).toFixed(1)
    setHeading({heading: sliderValue})
    setCourse(sliderValue)
  }

  return (
    <>
      <div className="container map">
        <Map 
          google={google} zoom={10} 
          onClick={getMapCordinates}
        >
          <Marker 
            name={'target'}
            position={markerLatLng}
          />
        </Map>
      </div>
      <div className="container mt-4 pt-4">
        <div className="columns">
          <div className="column">
            <p className="ml-4">Coordinates: {markerLatLng.lat}, {markerLatLng.lng}</p>
            <p className="ml-4">Heading: {course}° </p>
          </div>
          <div className="column">
            <p className="ml-4">Set heading:</p>
            <input 
              class="slider m-4" 
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