import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://selpedeploy-api.onrender.com/'
});

//baseURL: 'https://selpedeploy-api.onrender.com/'
