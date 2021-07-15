import {Map, Marker, GoogleApiWrapper, Polyline} from 'google-maps-react';
import red from '../assets/red.png'


const UserMap = ({google}) =>{
  const location = {
    lat: -13.20, 
    lng: -72.10
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
    {lat: -13.201, lng: -72.101, color: 'red'},
    {lat: -13.202, lng: -72.102, color: 'yellow'},
    {lat: -13.203, lng: -72.103, color: 'green'},
    {lat: -13.204, lng: -72.104, color: 'white'},
    {lat: -13.205, lng: -72.105, color: 'blue'},
    {lat: -13.206, lng: -72.106, color: 'red'},
  ]
    


  return (
    <div className="container map">
      <Map google={google} zoom={16} 
        initialCenter={waypoints[0]}
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
  apiKey: ('AIzaSyBsgd5A9q-23gHy8tL6e5O0lct6JoD97xo')
})(UserMap)