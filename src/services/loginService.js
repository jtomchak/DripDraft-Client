import axios from 'axios';
import  { toQueryString } from './axiosService'
import { cache } from './cacheService'




var axiosLogin = axios.create({
  baseURL: "/auth/",
  headers: {
    'Content-Type' : 'application/x-www-form-urlencoded',
    'Accept' :  'Application/JSON',
  }
});

function login(user) {
    var params = {
      'email': user.email,
      'password': user.password
    }

  return axiosLogin.post('signin', toQueryString(params))
    .then(function (response) {
    cache.updateAccessToken(response.data.accessToken);
      return response.data
    })
    .catch(function (error) {
      console.log(error);
    })
  }


  export default login;

