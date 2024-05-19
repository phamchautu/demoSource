/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';

import { Provider } from 'react-redux';
import store from '@core/redux'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import Navigator from '@core/navigation/Navigator';
import SignInContainer from '@screen/Auth/SignIn/SignInContainer';
import SplashScreenContainer from '@screen/SpashScreen/SpashScreenContainer';
import AppEntryContainer from '@screen/AppEntry/AppEntryContainer';


function App(): JSX.Element {

  const [isAppReady, setIsAppReady] = useState(false)
  // const isSignIn = useAppSelector((state) => getIsSignIn(state))


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
      <AppEntryContainer />
    </Provider>
  );
}

export default App;