import axios from 'axios';

const api = axios.create({
  baseURL: 'http://ph0togram-api.herokuapp.com/:80',
});

export default api;
