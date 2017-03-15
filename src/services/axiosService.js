// Creating a customa instance of axios with default settings.
// To be used through out the app instead of raw axios
// axiosService defaults can be overridden on an as needed bases

import axios from 'axios';
import { cache } from './cacheService'


var axiosService = axios.create({
  baseURL: "/api/",
  headers: {
    'Content-Type' : 'application/x-www-form-urlencoded',
    'Accept' :  'Application/JSON',
  }
  /* other custom settings */
});

/**
 * Using to urlencoded x-form posts :-(
 */
const toQueryString = function(obj) {
    return Object.keys(obj).map(k => {
      return encodeURIComponent(k) + "=" + encodeURIComponent(obj[k])
    })
    .join("&");
}

axiosService.interceptors.request.use(function(config) {
  const token = cache.fetchAccessToken();

  if ( token != '' ) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, function(err) {
  return Promise.reject(err);
});

export { axiosService, toQueryString }