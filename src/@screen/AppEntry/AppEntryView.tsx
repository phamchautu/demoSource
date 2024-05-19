import Text from '@maui/Text'
import React, { useEffect, useRef } from 'react'
import { View } from 'react-native'
import LottieView from 'lottie-react-native';

const AppEntryView = () => {
    const animationRef = useRef<LottieView>(null);

    useEffect(() => {
    }, []);
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

        </View>
    )
}

AppEntryView.displayName = 'AppEntryView'
export default AppEntryView