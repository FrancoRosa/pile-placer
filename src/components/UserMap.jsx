import { parse } from '@fortawesome/fontawesome-svg-core';
import { useStoreActions, useStoreState } from 'easy-peasy';
import {Map, Marker, GoogleApiWrapper, Circle, Polygon, Polyline} from 'google-maps-react';
import { useContext, useEffect, useState } from 'react';
import { getWaypoints, setRefBay, setRefWaypoint, socket } from '../js/api';
import { playColor, playOther } from '../js/audio';
import { sortByColor } from '../js/helpers';
// import { WayPointContext } from '../js/WayPointContext';
import PileSummary from './PileSummary';

const UserMap = ({ google }) =>{
  const [center, setCenter] = useState({ heading: 0, lat: 0, lng: 0 })
  const [autoCenter, setAutoCenter] = useState(true)
  const [waypoints, setWaypoints] = useState([])
  const [colors, setColors] = useState({})
  const [truck, setTruck] = useState([])
  const [line, setLine] = useState([])
  const [bays, setBays] = useState([])
  const nextPiles = useStoreState(state => state.nextPiles)
  const setNextPiles = useStoreActions(actions => actions.setNextPiles)

  useEffect(() => {
    getWaypoints().then(res => {
      setWaypoints(res.waypoints)
      if (res.waypoints.length > 0){
        setCenter({...center, ...res.waypoints[0]});
        setColors(sortByColor(res.waypoints))
      }
    })
    
    socket.on('message', msg => {
      msg = JSON.parse(msg)
      console.log(msg)
      setCenter(msg);
      setTruck([
        {lat: msg.truck[0][0], lng: msg.truck[0][1]},
        {lat: msg.truck[1][0], lng: msg.truck[1][1]},
        {lat: msg.truck[2][0], lng: msg.truck[2][1]},
        {lat: msg.truck[3][0], lng: msg.truck[3][1]},
        {lat: msg.truck[0][0], lng: msg.truck[0][1]},
      ])

      setLine([
        {lat: msg.truck[4][0], lng: msg.truck[4][1]},
        {lat: msg.truck[5][0], lng: msg.truck[5][1]}
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
  

  const getNearestPiles = (waypoints, bays) => {
    let distanceBay1
    let distanceBay2
    let closestBay1
    let closestBay2
    let closestDistanceBay1 = 10000
    let closestDistanceBay2 = 10000
    waypoints.forEach(point => {
      distanceBay1 = (point.lat - bays[0].lat)**2 + (point.lng - bays[0].lng)**2
      distanceBay2 = (point.lat - bays[1].lat)**2 + (point.lng - bays[1].lng)**2
      if (distanceBay1 < closestDistanceBay1) {
        closestDistanceBay1 = distanceBay1
        closestBay1 = point
      }
      if (distanceBay2 < closestDistanceBay2) {
        closestDistanceBay2 = distanceBay2
        closestBay2 = point
      }
    });
    console.log([closestBay1, closestBay2])
    return [closestBay1, closestBay2]
  }

  const getNextPiles = (waypoints, bays) => {
    const nearestPiles = getNearestPiles(waypoints, bays) 
    setNextPiles(nearestPiles)
    setRefWaypoint(nearestPiles)
  }

  useEffect(() => {
    if (Object.keys(center).includes('distance')) {
      let tempPiles = [...nextPiles]
      tempPiles[0].distance = center.distance[0]
      tempPiles[1].distance = center.distance[1]
      setNextPiles(tempPiles)
    }
  }, [center])

  useEffect(()=>{
    if (autoCenter){
      socket.off('message')
      socket.on('message', msg => {
        msg = JSON.parse(msg)
        console.log(msg)
        setCenter(msg);
        setTruck([
          {lat: msg.truck[0][0], lng: msg.truck[0][1]},
          {lat: msg.truck[1][0], lng: msg.truck[1][1]},
          {lat: msg.truck[2][0], lng: msg.truck[2][1]},
          {lat: msg.truck[3][0], lng: msg.truck[3][1]},
          {lat: msg.truck[0][0], lng: msg.truck[0][1]},
        ])
        setLine([
          {lat: msg.truck[4][0], lng: msg.truck[4][1]},
          {lat: msg.truck[5][0], lng: msg.truck[5][1]},
        ])
        setBays([
          {lat: msg.bays[0][0], lng: msg.bays[0][1]},
          {lat: msg.bays[1][0], lng: msg.bays[1][1]},
        ])
      });
    } else {
      socket.off('message');
    }
  }, [autoCenter])
  
  return (
    <div className="column">
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
          onDblclick={() => console.log('doubleClick')}
          disableDoubleClickZoom
        >
          {waypoints.map(waypoint => (
            <Circle
              center={waypoint}
              radius={0.5}
              strokeColor= {waypoint.color}
              strokeOpacity= {0.8}
              strokeWeight= {2}
              fillColor= {waypoint.color}
              onClick={() => {
                playColor(waypoint.color)
              }}
              onDblclick={() => console.log('Toogle status')}
            />
          ))}
          {bays.map((bay, i) => (
            <Circle
              center={bay}
              radius={0.5}
              strokeColor= {"#FF0000"}
              strokeOpacity= {0.8}
              strokeWeight= {2}
              fillColor= {"#FF0000"}
              fillOpacity= {0.35}
              onClick={() => {
                setRefBay({bay: i})
                i == 0 ? playOther('leftBay') : playOther('rightBay')
              }}
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
          <Polyline
            path={line}
            strokeColor= {"#FF0000"}
            strokeOpacity= {0.8}
            strokeWeight= {2}
            fillColor= {"#FF0000"}
            fillOpacity= {0.35}
          />
        </Map>
      </div>
      <div className="columns mt-3 has-text-link ">
        <div className="column is-flex is-flex-centered">
          <p className="heading has-text-centered">Lat: {parseFloat(center.lat).toFixed(8)}</p>
        </div>
        <div className="column is-flex is-flex-centered">
          <p className="heading has-text-centered">Lng: {parseFloat(center.lng).toFixed(8)}</p>
        </div>
        <div className="column is-flex is-flex-centered">
          <p className="heading has-text-centered">Heading: {parseFloat(center.heading).toFixed(1)}॰</p>
        </div>
        <div className="column is-flex is-flex-centered">
          <button
            className={`button is-outlined is-small ml-2 mr-2 ${autoCenter ? 'is-success' : 'is-warning'}`}
            onClick={() => setAutoCenter(!autoCenter)}>
            {autoCenter ? 'Auto center enabled': 'Auto center not enabled'}  
          </button>
          <button
            className={`button is-outlined is-small is-success ml-2 mr-2`}
            onClick={() => getNextPiles(waypoints,bays)}>
            Get nearest piles  
          </button>
        </div>
      </div>
      <PileSummary colors={colors} /> 
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBsgd5A9q-23gHy8tL6e5O0lct6JoD97xo',
  version: 'beta'
})(UserMap)