import {Map, Marker, GoogleApiWrapper, Polyline} from 'google-maps-react';
import { useEffect, useState } from 'react';
import { socket } from '../js/api';

const UserMap = ({ google }) =>{
  const [center, setCenter] = useState({ heading: 0, lat: 0, lng: 0 })
  
  useEffect(() => {
    
    socket.on('message', msg => {
      msg = JSON.parse(msg)
      console.log(msg);
      setCenter(msg);
    });
    
    return () => {
      socket.off('message');
    };
  }, [])

  const changeHeading = (mapProps, map) => {
    console.log('changeHeading')
    map.setHeading(parseFloat(center.heading))
  }

  const get_icon = color => ({
    path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
    fillColor: color,
    fillOpacity: 0.6,
    strokeWeight: 0,
    rotation: 0,
    scale: 2,
    anchor: new google.maps.Point(15, 30),
  });

  const waypoints = [
    {'lat': 13.68653627, 'lng': 30.12913939, 'color': 'lightblue'},
    {'lat': 13.68650949, 'lng': 30.12913939, 'color': 'pink'},
    {'lat': 13.68648272, 'lng': 30.12913939, 'color': 'lightblue'},
    {'lat': 13.68645524, 'lng': 30.12913939, 'color': 'lightblue'},
    {'lat': 13.68642776, 'lng': 30.12913939, 'color': 'lightblue'},
    {'lat': 13.68640029, 'lng': 30.12913939, 'color': 'lightblue'},
    {'lat': 13.68637617, 'lng': 30.12913939, 'color': 'lightblue'},
    {'lat': 13.68666693, 'lng': 30.12933939, 'color': 'lightblue'},
    {'lat': 13.68664618, 'lng': 30.12933939, 'color': 'lightblue'},
    {'lat': 13.6866187, 'lng': 30.12933939, 'color': 'lightblue'},
    {'lat': 13.68619023, 'lng': 30.11747276, 'color': 'darkblue'},
    {'lat': 13.68616346, 'lng': 30.11747276, 'color': 'lightblue'},
    {'lat': 13.68613598, 'lng': 30.11747276, 'color': 'lightblue'},
    {'lat': 13.6861085, 'lng': 30.11747276, 'color': 'lightblue'},
    {'lat': 13.68629944, 'lng': 30.13053939, 'color': 'white'},
    {'lat': 13.68627196, 'lng': 30.13053939, 'color': 'white'},
    {'lat': 13.68624448, 'lng': 30.13053939, 'color': 'white'},
    {'lat': 13.68621701, 'lng': 30.13053939, 'color': 'white'},
    {'lat': 13.68619023, 'lng': 30.13053939, 'color': 'purple'},
    {'lat': 13.68616346, 'lng': 30.13053939, 'color': 'white'},
    {'lat': 13.68613598, 'lng': 30.13053939, 'color': 'darkgreen'},
    {'lat': 13.6861085, 'lng': 30.13053939, 'color': 'darkgreen'},
    {'lat': 13.68608102, 'lng': 30.13053939, 'color': 'darkgreen'},
    {'lat': 13.68605691, 'lng': 30.13053939, 'color': 'darkgreen'},
  ]
    
  return (
    <div className="container map">
      <Map google={google} zoom={16} 
        initialCenter={center} center={center}
        onClick={changeHeading}
        mapId="WeatherMap"
      >
        {waypoints.map(waypoint => (
          <Marker onClick={()=>console.log('click')} 
            position={waypoint}
            icon={get_icon(waypoint.color)}
          />
          
        ))}
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: ('AIzaSyBsgd5A9q-23gHy8tL6e5O0lct6JoD97xo&v=beta')
})(UserMap)