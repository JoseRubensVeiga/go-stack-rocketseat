import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';

import './src/config/ReactotronConfig';

import Home from './src/pages/Home';
import Cart from './src/pages/Cart';
import Header from './src/components/Header';

import {navigationRef} from './src/services/RootNavigation';
import store from './src/store';

const {Navigator, Screen} = createStackNavigator();

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <NavigationContainer ref={navigationRef}>
          <Navigator>
            <Screen
              name="Home"
              component={Home}
              options={{
                headerShown: false,
              }}
            />
            <Screen
              name="Cart"
              component={Cart}
              options={{
                headerShown: false,
              }}
            />
          </Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}

export default App;
