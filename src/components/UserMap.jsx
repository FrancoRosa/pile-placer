import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { MapContainer, TileLayer, Popup } from 'react-leaflet'
import Marker from 'react-leaflet-enhanced-marker'
import 'leaflet/dist/leaflet.css'

const UserMap = () =>{
  const location = {
    lat: -13.21, 
    lng: -72.1
  }
  return(
    <MapContainer center={location} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
      />
    <Marker position={location} icon={<img src={faUpload}/>}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
  );
};

export default UserMap;