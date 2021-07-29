import {Map, Marker, GoogleApiWrapper, Circle, Polygon} from 'google-maps-react';
import { useContext, useEffect, useState } from 'react';
import { getWaypoints, socket } from '../js/api';
import { WayPointContext } from '../js/WayPointContext';

const UserMap = ({ google }) =>{
  const [center, setCenter] = useState({ heading: 0, lat: 0, lng: 0 })
  const [waypoints, setWaypoints] = useState([])
  const [truck, setTruck] = useState([])
  const [bays, setBays] = useState([])
  const { waypoint, setWaypoint } = useContext(WayPointContext)

  useEffect(() => {
    getWaypoints().then(res => {
      console.log(res.waypoints)
      setWaypoints(res.waypoints)
      if (res.waypoints.length > 0){
        setCenter({...center, ...res.waypoints[0]});
      }
    })
    
    socket.on('message', msg => {
      msg = JSON.parse(msg)
      console.log(msg);
      setCenter(msg);
      setTruck([
        {lat: msg.truck[0][0], lng: msg.truck[0][1]},
        {lat: msg.truck[1][0], lng: msg.truck[1][1]},
        {lat: msg.truck[2][0], lng: msg.truck[2][1]},
        {lat: msg.truck[3][0], lng: msg.truck[3][1]},
        {lat: msg.truck[0][0], lng: msg.truck[0][1]},
      ])
      setBays([
        {lat: msg.bays[0][0], lng: msg.bays[0][1]},
        {lat: msg.bays[1][0], lng: msg.bays[1][1]},
      ])
    });

    return () => {
      socket.off('message');
    };
  }, [])
  
  const get_icon = color => ({
    // path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
    path: "M 5, 10 a 5,5 0 1,1 10,0 a 5,5 0 1,1 -10,0",
    fillColor: color,
    fillOpacity: 0.6,
    strokeWeight: 0,
    rotation: 0,
    scale: 2,
    anchor: new google.maps.Point(15, 30),
  });

  return (
    <>
      <div className="container map">
        <Map google={google} zoom={22} 
          initialCenter={center} center={center}
          mapId="2f571dc2d7296a3a"
          onCenterChanged={(mapProps, map) => {
            map.setHeading(parseInt(center.heading))
          }}
          onClick={(mapProps, map, clickEvent) => {
            setCenter({
              ...center,
              lat: clickEvent.latLng.lat().toFixed(5),
              lng: clickEvent.latLng.lng().toFixed(5)
            })
          }}
        >
          {waypoints.map(waypoint => (
            <Circle
              center={waypoint}
              radius={0.5}
              strokeColor= {waypoint.color}
              strokeOpacity= {0.8}
              strokeWeight= {2}
              fillColor= {waypoint.color}
              onClick={() => setWaypoint(waypoint)}
            />
          ))}
          {bays.map(bay => (
            <Circle
              center={bay}
              radius={0.5}
              strokeColor= {"#FF0000"}
              strokeOpacity= {0.8}
              strokeWeight= {2}
              fillColor= {"#FF0000"}
              fillOpacity= {0.35}
            />
          ))}
          <Polygon 
            paths={truck}
            strokeColor= {"#FF0000"}
            strokeOpacity= {0.8}
            strokeWeight= {2}
            fillColor= {"#FF0000"}
            fillOpacity= {0.35}
          />
        </Map>
      </div>
      <div className="columns mt-3">
        <div className="column">
          <p className="heading">Lat: {center.lat}</p>
        </div>
        <div className="column">
          <p className="heading">Lng: {center.lng}</p>
        </div>
        <div className="column">
          <p className="heading">Heading: {center.heading}</p>
        </div>
      </div>
    </>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBsgd5A9q-23gHy8tL6e5O0lct6JoD97xo',
  version: 'beta'
})(UserMap)