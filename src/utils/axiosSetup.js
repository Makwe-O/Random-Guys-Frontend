import axios from 'axios';

export const apiInstance = axios.create({
  baseURL: 'https://swapi.co/api/'
});

const makeRequest = (url, searchTerm, options = { method: 'GET' }) => {
  return apiInstance({
    url,
    method: options.method,
    params: { q: searchTerm }
  }).then(response => response.data);
};

export default makeRequest;
