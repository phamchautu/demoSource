import React from 'react'
import AppEntryView from './AppEntryView'
import Navigator, { NavigationScreenProp } from '@core/navigation/Navigator'
import { getIsSignIn } from '../../@core/redux/selectors/AuthSelector'
import { useAppSelector } from '@core/redux/reduxUtils'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import SignInContainer from '@screen/Auth/SignIn/SignInContainer'

interface AppEntryContainerProps {

}

const MyTheme = {
    ...DefaultTheme
    ,
    colors: {
        ...DefaultTheme.colors,
        background: '#ffffff'
    },
};

const AppEntryContainer = (props: AppEntryContainerProps) => {

    return (
        <NavigationContainer theme={MyTheme}>
            <Navigator>
                <Navigator.Screen
                    name='SignIn'
                    component={SignInContainer}
                    options={{ headerShown: false }}
                />
            </Navigator>
        </NavigationContainer>
    )
}

AppEntryContainer.displayName = 'AppEntryContainer'
export default AppEntryContainer