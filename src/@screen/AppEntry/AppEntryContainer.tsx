import React from 'react'
import AppEntryView from './AppEntryView'

interface AppEntryContainerProps {

}

const AppEntryContainer = (props: AppEntryContainerProps) => {

    console.log('[Access screen]: AppEntry')

    return (
        <AppEntryView />
    )
}

AppEntryContainer.displayName = 'AppEntryContainer'
export default AppEntryContainer