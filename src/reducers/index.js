import { combineReducers } from 'redux';
import TopicReducer from './topic_reducer';

 const rootReducer = combineReducers({
   auth: AuthReducer,
 });

 export default rootReducer;