import axios from 'axios';

const AxiosConfig = axios.create({
  baseURL: 'https://gconn-api-node-js.vercel.app',
});

export default AxiosConfig;
