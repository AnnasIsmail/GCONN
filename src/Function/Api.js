import { MainAPI, OfficialValorantAPI, henrikdevAPI } from "./AxiosConfig";

// Function to get the appropriate Axios instance based on API type
const getAxiosInstance = (API) => {
  return API === "main" ? MainAPI : API === "valorant" ? OfficialValorantAPI : API === "hendrik" ? henrikdevAPI : null;
};

// Function to handle GET requests
export const get = async (url, API, headers) => {
  const axios = getAxiosInstance(API);
  
  try {
    const response = await axios.get(url, { headers });
    return response.data;
  } catch (error) {
    console.error('GET request error:', error);
    throw error;
  }
};

// Function to handle POST requests
export const post = async (url, data, API, headers) => {
  const axios = getAxiosInstance(API);

  try {
    const response = await axios.post(url, data, { headers });
    return response.data;
  } catch (error) {
    console.error('POST request error:', error);
    throw error;
  }
};

// Function to handle PUT requests
export const put = async (url, data, API, headers) => {
  const axios = getAxiosInstance(API);

  try {
    const response = await axios.put(url, data, { headers });
    return response.data;
  } catch (error) {
    console.error('PUT request error:', error);
    throw error;
  }
};

// Function to handle DELETE requests
export const del = async (url, API, headers) => {
  const axios = getAxiosInstance(API);

  try {
    const response = await axios.delete(url, { headers });
    return response.data;
  } catch (error) {
    console.error('DELETE request error:', error);
    throw error;
  }
};
