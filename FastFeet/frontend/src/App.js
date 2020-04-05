import React from 'react';
import { Provider } from 'react-redux';

import '~/config/ReactotronConfig';
import store from '~/store';

import GlobalStyle from './styles/global';
import Routes from './Routes';

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
      <GlobalStyle />
    </Provider>
  );
}
