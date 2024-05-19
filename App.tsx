/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';

import { Provider } from 'react-redux';
import store from '@core/redux'
import { NavigationContainer } from '@react-navigation/native';
import AppEntryContainer from '@screen/AppEntry/AppEntryContainer';
import Navigator from '@core/navigation/Navigator';
import SplashScreenContainer from '@screen/SpashScreen/SpashScreenContainer';

function App(): JSX.Element {

  const [isAppReady, setIsAppReady] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAppReady(true)
    }, 5000);
    return (() => {
      clearTimeout(timer)
    })
  }, []);

  return (
    <Provider store={store}>
      <SplashScreenContainer isAppReady={isAppReady} />
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