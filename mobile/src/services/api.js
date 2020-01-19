import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.106:3333',
  //baseURL: ' http://005d99ac.ngrok.io/',
});

export default api;