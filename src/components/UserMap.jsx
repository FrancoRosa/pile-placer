import {Map, Marker, GoogleApiWrapper, Polyline} from 'google-maps-react';

const UserMap = ({google}) =>{
  const location = {
    lat: -13.21, 
    lng: -72.1
  }

  return (
    <div className="container map">
      <Map google={google} zoom={18} 
        initialCenter={location}
      >
        <Marker onClick={()=>console.log('click')} position={location}/>
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: ('AIzaSyBsgd5A9q-23gHy8tL6e5O0lct6JoD97xo')
})(UserMap)