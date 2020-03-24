import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './src/pages/Home';
import Cart from './src/pages/Cart';
import Header from './src/components/Header';

import {navigationRef} from './src/services/RootNavigation';

const {Navigator, Screen} = createStackNavigator();

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
