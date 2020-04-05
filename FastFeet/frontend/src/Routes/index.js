import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Route from './Route';
import SignIn from '~/pages/SignIn';
import Deliveries from '~/pages/Deliveries';

import NotFound from '~/components/NotFound';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/deliveries" component={Deliveries} isPrivate />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
