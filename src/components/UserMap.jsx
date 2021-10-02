import { useStoreActions, useStoreState } from "easy-peasy";
import DeckGL from "@deck.gl/react";
import { LineLayer, ScatterplotLayer } from "@deck.gl/layers";
import { StaticMap } from "react-map-gl";
import { useEffect, useState } from "react";
import { getWaypoints, setRefBay, setRefWaypoint, socket } from "../js/api";
import { useLocalStorage } from "../js/helpers";
import { playColor, playOther } from "../js/audio";
import mapboxgl from "mapbox-gl";

// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass =
  // eslint-disable-next-line import/no-webpack-loader-syntax
  require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1Ijoia20xMTVmcmFuY28iLCJhIjoiY2t0eXQ3cHBhMGI3aTMxcG14dnN0OHJveSJ9.LWxkBiVPF9UfGWMI4sWakQ";

const UserMap = ({ google }) => {
  const center = useStoreState((state) => state.center);
  const setCenter = useStoreActions((actions) => actions.setCenter);
  const [autoCenter, setAutoCenter] = useState(true);
  const [truck, setTruck] = useState([]);
  const [lasers, setLasers] = useState([]);
  const [truckBundle, setTruckBundle] = useState([]);
  const [verticalLine, setVerticalLine] = useState([]);
  const [horizontalLine, setHorizontalLine] = useState([]);
  const [bays, setBays] = useState([]);
  const nextPiles = useStoreState((state) => state.nextPiles);
  const setNextPiles = useStoreActions((actions) => actions.setNextPiles);
  const waypoints = useStoreState((state) => state.waypoints);
  const setWaypoints = useStoreActions((actions) => actions.setWaypoints);
  const placeWaypoint = useStoreActions((actions) => actions.placeWaypoint);
  const unplaceWaypoint = useStoreActions((actions) => actions.unplaceWaypoint);
  const [initialCenter, setInitialCenter] = useLocalStorage("debugCenter", {
    lat: 0,
    lng: 0,
  });
  const selectedColor = useStoreState((state) => state.selectedColor);

  const socketListener = () => {
    socket.on("message", (msg) => {
      msg = JSON.parse(msg);
      console.log(msg);

      setCenter(msg);
      console.log("center:", msg);

      setTruck([
        { lat: msg.truck[0][0], lng: msg.truck[0][1] },
        { lat: msg.truck[1][0], lng: msg.truck[1][1] },
        { lat: msg.truck[2][0], lng: msg.truck[2][1] },
        { lat: msg.truck[3][0], lng: msg.truck[3][1] },
        { lat: msg.truck[0][0], lng: msg.truck[0][1] },
      ]);

      setBays([
        { lat: msg.bays[0][0], lng: msg.bays[0][1] },
        { lat: msg.bays[1][0], lng: msg.bays[1][1] },
      ]);

      setVerticalLine([
        { lat: msg.truck[4][0], lng: msg.truck[4][1] },
        { lat: msg.truck[5][0], lng: msg.truck[5][1] },
      ]);

      setHorizontalLine([
        { lat: msg.truck[10][0], lng: msg.truck[10][1] },
        { lat: msg.truck[11][0], lng: msg.truck[11][1] },
      ]);

      setTruckBundle([
        { lat: msg.truck[6][0], lng: msg.truck[6][1] },
        { lat: msg.truck[7][0], lng: msg.truck[7][1] },
        { lat: msg.truck[8][0], lng: msg.truck[8][1] },
        { lat: msg.truck[9][0], lng: msg.truck[9][1] },
        { lat: msg.truck[6][0], lng: msg.truck[6][1] },
      ]);

      setLasers([
        { lat: msg.truck[12][0], lng: msg.truck[12][1] },
        { lat: msg.truck[13][0], lng: msg.truck[13][1] },
      ]);
    });
  };

  useEffect(() => {
    getWaypoints().then((res) => {
      setWaypoints(res.waypoints);
      if (res.waypoints.length > 0) {
        setCenter({ ...center, ...res.waypoints[0] });
      }
    });

    socketListener();

    return () => {
      socket.off("message");
    };
  }, []);

  const getNearestPiles = (waypoints, bays) => {
    let distanceBay1;
    let distanceBay2;
    let closestBay1;
    let closestBay2;
    let closestDistanceBay1 = 10000;
    let closestDistanceBay2 = 10000;

    waypoints.forEach((point) => {
      if (
        !point.placed &&
        (selectedColor == point.color || selectedColor == "")
      ) {
        distanceBay1 =
          (point.lat - bays[0].lat) ** 2 + (point.lng - bays[0].lng) ** 2;
        distanceBay2 =
          (point.lat - bays[1].lat) ** 2 + (point.lng - bays[1].lng) ** 2;
        if (distanceBay1 < closestDistanceBay1) {
          closestDistanceBay1 = distanceBay1;
          closestBay1 = point;
        }
        if (distanceBay2 < closestDistanceBay2) {
          closestDistanceBay2 = distanceBay2;
          closestBay2 = point;
        }
      }
    });

    // The code below avoids repeating the same waypoint as next pile
    if (closestBay1 == closestBay2) {
      if (closestDistanceBay1 < closestDistanceBay2) {
        closestBay2 = { lat: 0, lng: 0 };
      } else {
        closestBay1 = { lat: 0, lng: 0 };
      }
    }

    return [closestBay1, closestBay2];
  };

  const getNextPiles = (waypoints, bays) => {
    if (waypoints.length > 0) {
      const nearestPiles = getNearestPiles(waypoints, bays);
      setNextPiles(nearestPiles);
      setRefWaypoint(nearestPiles);
      console.log("... getting colors");
      let timeOffset = 0;
      try {
        let leftColor = waypoints
          .filter((w) => w.pile_id == nearestPiles[0].pile_id)[0]
          .color.trim();
        playOther("leftBay");
        setTimeout(() => playColor(leftColor), 1000);
        timeOffset = 2000;
      } catch {
        console.log("error left color");
      }
      try {
        let rightColor = waypoints
          .filter((w) => w.pile_id == nearestPiles[1].pile_id)[0]
          .color.trim();
        setTimeout(() => playOther("rightBay"), 0 + timeOffset);
        setTimeout(() => playColor(rightColor), 1000 + timeOffset);
      } catch {
        console.log("error right color");
      }
    }
  };

  const INITIAL_VIEW_STATE = {
    longitude: -122.123801,
    latitude: 37.893394,
    zoom: 10,
    pitch: 0,
    bearing: 0,
  };

  useEffect(() => {
    if (Object.keys(center).includes("distance")) {
      let tempPiles = [...nextPiles];
      tempPiles[0].distance = center.distance[0];
      tempPiles[1].distance = center.distance[1];
      setNextPiles(tempPiles);
    }
  }, [center]);

  useEffect(() => {
    if (autoCenter) {
      socket.off("message");
      socketListener();
    } else {
      socket.off("message");
    }
  }, [autoCenter]);

  return (
    <>
      <div className="container map">
        <DeckGL
          initialViewState={INITIAL_VIEW_STATE}
          controller={true}
          layers={[]}
        >
          <StaticMap mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} />
        </DeckGL>
        {/* <Map google={google} zoom={22} maxZoom={23}
          initialCenter={initialCenter} center={center}
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
          <Circle
            center={{lat: parseFloat(center.lat), lng: parseFloat(center.lng)}}
            radius={0.1}
            strokeColor='black'
            strokeOpacity= {0.8}
            strokeWeight={2}
            fillColor='black'
          />

          {lasers.map(laser => (
            <Circle
              center={{lat: laser.lat, lng: laser.lng}}
              radius={0.1}
              strokeColor='green'
              strokeOpacity= {0.8}
              strokeWeight={2}
              fillColor='green'
            />
          ))}

          {waypoints.map(waypoint => (
            <Circle
              center={waypoint}
              radius={waypoint.placed ? 0.3 : (waypoint.pile_id == nextPiles[0].pile_id || waypoint.pile_id == nextPiles[1].pile_id ) ? 0.7 : 0.5}
              strokeColor={selectedColor == '' ? waypoint.color : (selectedColor == waypoint.color ? waypoint.color : 'transparent')}
              strokeOpacity={(waypoint.pile_id == nextPiles[0].pile_id || waypoint.pile_id == nextPiles[1].pile_id ) ? 1 : 0.5}
              strokeWeight={waypoint.placed ? 0 : 2}
              fillColor={selectedColor == '' ? waypoint.color : (selectedColor == waypoint.color ? waypoint.color : 'transparent')}
              fillOpacity={(waypoint.pile_id == nextPiles[0].pile_id || waypoint.pile_id == nextPiles[1].pile_id ) ? 1 : 0.5}
              onClick={() => waypoint.placed ? unplaceWaypoint(waypoint.pile_id) : placeWaypoint(waypoint.pile_id)}
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
                // i == 0 ? playOther('leftBay') : playOther('rightBay')
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
          <Polygon 
            paths={truckBundle}
            strokeColor= {"#FF0000"}
            strokeOpacity= {0.8}
            strokeWeight= {2}
            fillColor= {"#FF0000"}
            fillOpacity= {0.35}
          />
          <Polyline
            path={verticalLine}
            strokeColor= {"#FF0000"}
            strokeOpacity= {0.8}
            strokeWeight= {2}
            fillColor= {"#FF0000"}
            fillOpacity= {0.35}
          />
          <Polyline
            path={horizontalLine}
            strokeColor= {"#FF0000"}
            strokeOpacity= {0.8}
            strokeWeight= {2}
            fillColor= {"#FF0000"}
            fillOpacity= {0.35}
          />
        </Map> */}
      </div>
      <div className="columns mt-3 has-text-link ">
        <div className="column is-flex is-flex-centered m-0 p-0">
          <p className="heading has-text-centered m-0 p-0 f-3">
            Lat: {parseFloat(center.lat).toFixed(7)}
          </p>
        </div>
        <div className="column is-flex is-flex-centered m-0 p-0">
          <p className="heading has-text-centered m-0 p-0 f-3">
            Lng: {parseFloat(center.lng).toFixed(7)}
          </p>
        </div>
        <div className="column is-flex is-flex-centered m-0 p-0">
          <p className="heading has-text-centered m-0 p-0 f-3">
            Hdg: {parseFloat(center.heading).toFixed(1)}॰
          </p>
        </div>
        <div className="column is-flex is-flex-centered m-0 p-0">
          <button
            className={`button is-outlined ml-2 mr-2 ${
              autoCenter ? "is-success" : "is-warning"
            }`}
            onClick={() => setAutoCenter(!autoCenter)}
          >
            {autoCenter ? "Auto center enabled" : "Auto center not enabled"}
          </button>
          <button
            className={`button is-outlined is-success ml-2 mr-2`}
            onClick={() => getNextPiles(waypoints, bays)}
          >
            Get nearest piles
          </button>
        </div>
      </div>
    </>
  );
};

export default UserMap;
