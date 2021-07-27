import axios from 'axios';
import io from "socket.io-client";

const host='localhost:9999'
export const socket = io.connect(`http://${host}`);

export const setLatLng = async (location) => {
  console.log('... setting lat lng');
  const url = `http://${host}/api/location`;
  const response = await axios.post(url, location)
  return response.data
}

export const setHeading = async (heading) => {
  console.log('... setting heading');
  const url = `http://${host}/api/heading`;
  const response = await axios.post(url, heading)
  return response.data
}

export const getLocation = async () => {
  console.log('... getting location and heading');
  const url = `http://${host}/api/status`;
  const response = await axios.get(url)
  return response.data
}

export const getWaypoints = async () => {
  console.log('... getting waypoints');
  const url = `http://${host}/api/waypoints`;
  const response = await axios.get(url)
  return response.data
}

export const uploadFile = async (file, epsg) => {
  console.log('... uploading file');
  const url = `http://${host}/api/file`;
  let formData = new FormData();
  formData.append('file', file)
  formData.append('code', epsg)
  const response = await axios.post(url, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
  return response.data
}