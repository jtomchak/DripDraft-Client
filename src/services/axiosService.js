// Creating a customa instance of axios with default settings.
// To be used through out the app instead of raw axios
// axiosService defaults can be overridden on an as needed bases

import axios from 'axios';

const accessToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ODliNTJkZDFmZTgwYTAwNDc3OGYxNjUiLCJpYXQiOjE0ODY3NDU5MTksImV4cCI6MTUxODI4MTkxOX0.J6ZpM_10ofeR5q1RuCnOEpnaMYPPsQlbmZTlR2BselQ`

var axiosService = axios.create({
  baseURL: "/api/",
  headers: {
    'Content-Type' : 'application/x-www-form-urlencoded',
    'Accept' :  'Application/JSON',
    'Authorization': 'Bearer ' + accessToken
  }
  /* other custom settings */
});

module.exports = axiosService;