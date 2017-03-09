import axios from 'axios';
import  axiosService from './axiosService'
import { cache } from './cacheService'




var axiosLogin = axios.create({
  baseURL: "/auth/",
  headers: {
    'Content-Type' : 'application/x-www-form-urlencoded',
    'Accept' :  'Application/JSON',
  }
});

function login(user) {
    var params = new URLSearchParams();
    params.append('email', user.email);
    params.append('password', user.password);

  return axiosLogin.post('signin', params)
    .then(function (response) {
    cache.updateAccessToken(response.data.accessToken);
      return response.data
    })
    .catch(function (error) {
      console.log(error);
    })
  }


  export default login;

