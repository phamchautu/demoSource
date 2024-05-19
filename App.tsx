/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { Provider } from 'react-redux';
import store from '@core/redux'
import { NavigationContainer } from '@react-navigation/native';
import AppEntryContainer from 'src/@screen/AppEntry/AppEntryContainer';
import Navigator from '@core/navigation/Navigator';

function App(): JSX.Element {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigator>
          <Navigator.Screen
            name='AppEntry'
            component={AppEntryContainer}
            options={{ headerShown: false }}
          />
        </Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;