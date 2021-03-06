import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Route from './Route';
import SignIn from '~/pages/SignIn';
import Deliveries from '~/pages/Deliveries';
import Deliverymans from '~/pages/Deliverymans';
import Recipients from '~/pages/Recipients';
import Problems from '~/pages/Problems';

import NotFound from '~/components/NotFound';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/deliveries" component={Deliveries} isPrivate />
        <Route path="/deliverymans" component={Deliverymans} isPrivate />
        <Route path="/recipients" component={Recipients} isPrivate />
        <Route path="/problems" component={Problems} isPrivate />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
