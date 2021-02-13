import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../../global/containers/Layout';

import Dashboard from '../../pages/Dashboard';

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Dashboard} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
