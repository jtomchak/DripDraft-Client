import  { axiosService }  from './axiosService';
import { TEST_ACTION } from '../actions/types';


function fetchDrafts(topicId) {
    var config = {
        params: {
            topic_id: `${topicId}`
        }
    };
  return axiosService.get('drafts', config)
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      console.log(error);
    })
  }


  export { fetchDrafts };

