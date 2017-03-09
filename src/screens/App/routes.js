import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import Layout from './Layout';

import About from '../About';
import Topic from '../Topic';
import TopicDraft from '../TopicDraft'
import NotFound from '../NotFound';

/**
 * Once a Screen or Page has the need for more than one container
 * A 'screens' wrapper component is created to embody those pieces 
 * and any shared logic they might need. Cool.
 */
import { Login, SignUp } from '../../containers'


const Routes = (props) => (
  <Route {...props} path='/' component={Layout}>
    <IndexRoute component={Topic} />
    <Route path="/topic/:topicId" component={TopicDraft} />
    <Route path="/about" component={About} />
    <Route path="/signup" component={SignUp} />
    <Route path="/login" component={Login} />
    <Route path="*" component={NotFound} />
  </Route>
)

export default Routes;