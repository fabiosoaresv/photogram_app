import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ph0togram-api.herokuapp.com/:443',
});

export default api;
