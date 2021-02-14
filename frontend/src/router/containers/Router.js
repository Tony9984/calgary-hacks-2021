import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../../global/containers/Layout';

import Dashboard from '../../pages/Dashboard';
import Friends from '../../pages/Friends';
import Profile from '../../pages/Profile';

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/friends" component={Friends} />
          <Route exact path="/profile/:name" component={Profile} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
