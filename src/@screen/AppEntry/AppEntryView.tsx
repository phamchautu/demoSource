import React, { useEffect } from 'react'
import { View } from 'react-native'

const AppEntryView = () => {

    useEffect(() => {
    }, []);
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

        </View>
    )
}

AppEntryView.displayName = 'AppEntryView'
export default AppEntryView