import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://selpedeploy-api.onrender.com/'
});

//http://192.168.1.4:3000/
