import axios from 'axios';
import { TEST_ACTION } from './types';

const access_token = ''
const topicURL = 'drafts?topic_id='
const API_URL = `http://localhost:3001/api/${topicURL}${access_token}`;

// Make a request for a user with a given ID
axios.get(API_URL)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });