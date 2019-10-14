import axios from 'axios';

export const apiInstance = axios.create({
  baseURL: 'https://swapi.co/api/'
});

const makeRequest = (url, searchTerm, page, options = { method: 'GET' }) => {
  return apiInstance({
    url,
    method: options.method,
    params: { search: searchTerm, page }
  }).then(response => response.data);
};

export default makeRequest;
