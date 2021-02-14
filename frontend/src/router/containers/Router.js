import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../../global/containers/Layout';

import Dashboard from '../../pages/Dashboard';
import Friends from '../../pages/Friends';

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/friends" component={Friends} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
