import React from 'react'
import AppEntryView from './AppEntryView'
import { NavigationScreenProp } from '@core/navigation/Navigator'
import { getIsSignIn } from './AppEntrySelector'
import { useAppSelector } from '@core/redux/reduxUtils'

interface AppEntryContainerProps extends NavigationScreenProp {

}

const AppEntryContainer = (props: AppEntryContainerProps) => {
    const { navigation } = props
    const isSignIn = useAppSelector((state) => getIsSignIn(state))

    console.log('[isSignIn]', isSignIn)

    return (
        <AppEntryView />
    )
}

AppEntryContainer.displayName = 'AppEntryContainer'
export default AppEntryContainer