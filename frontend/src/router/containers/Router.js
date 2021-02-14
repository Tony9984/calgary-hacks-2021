import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../../global/containers/Layout';

import Dashboard from '../../pages/Dashboard';
import Friends from '../../pages/Friends';
import Profile from '../../pages/Profile';
import Course from '../../pages/CoursePage';

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/friends" component={Friends} />
          <Route exact path="/profile/:name" component={Profile} />
          <Route exact path="/course/:courseName" component={Course} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
