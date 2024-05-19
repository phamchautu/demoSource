import React from 'react'
import SplashScreenView from './SpashScreenView'

interface SplashScreenContainerProps {
    isAppReady: boolean
}

const SplashScreenContainer = (props: SplashScreenContainerProps) => {
    const { isAppReady } = props
    const [hasAnimationPlayedOnce, setHasAnimationPlayedOnce] = React.useState(false)
    console.log('isAppReady', isAppReady)

    const handleAnimationFinish = () => {
        setHasAnimationPlayedOnce(true)
    }
    const isModalVisible = !(isAppReady && hasAnimationPlayedOnce)


    return (
        <SplashScreenView
            isModalVisible={isModalVisible}
            handleAnimationFinish={handleAnimationFinish}
        />
    )
}

SplashScreenContainer.displayName = 'SplashScreenContainer'
export default SplashScreenContainer