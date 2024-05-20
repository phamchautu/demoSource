import Navigator from '@core/navigation/Navigator'
import { useAppSelector } from '@core/redux/reduxUtils'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import SignInContainer from '@screen/Auth/SignIn/SignInContainer'
import React from 'react'
import { getIsSignIn } from '../../@core/redux/selectors/AuthSelector'
import AppEntryView from './AppEntryView'

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

    const isSignIn = useAppSelector(state => getIsSignIn(state))

    return (
        <NavigationContainer theme={MyTheme}>
            {
                isSignIn ?
                    <Navigator>
                        <Navigator.Screen
                            name='HomeScreen'
                            component={AppEntryView}
                        />
                    </Navigator>
                    :
                    <Navigator>
                        <Navigator.Screen
                            name='SignIn'
                            component={SignInContainer}
                            options={{ headerShown: false }}
                        />
                    </Navigator>
            }
        </NavigationContainer >
    )
}

AppEntryContainer.displayName = 'AppEntryContainer'
export default AppEntryContainer