import axios from 'axios';
import io from "socket.io-client";

const host='localhost'
export const socket = io.connect(`http://${host}:9999`);

export const setLatLng = async (location) => {
  console.log('... setting lat lng');
  const url = `http://${host}:9999/api/location`;
  const response = await axios.post(url, location)
  return response.data
}

export const setHeading = async (heading) => {
  console.log('... setting heading');
  const url = `http://${host}:9999/api/heading`;
  const response = await axios.post(url, heading)
  return response.data
}

export const getLocation = async () => {
  console.log('... getting location and heading');
  const url = `http://${host}:9999/api/status`;
  const response = await axios.get(url)
  return response.data
}

