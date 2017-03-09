import  axiosService  from './axiosService';
import { TEST_ACTION } from '../actions/types';


function fetchTopics() {
  return axiosService.get('topics')
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      console.log(error);
    })
  }


  export { fetchTopics };

