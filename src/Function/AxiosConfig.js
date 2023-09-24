import axios from 'axios';

export const MainAPI = axios.create({
  baseURL: 'http://localhost:5000',
  // baseURL: 'https://gconn-api-node-js.vercel.app',
});

export const OfficialValorantAPI = axios.create({
  baseURL: 'https://valorant-api.com',
});

export const henrikdevAPI = axios.create({
  baseURL: 'https://api.henrikdev.xyz/valorant',
});



