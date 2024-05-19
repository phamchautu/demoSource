import Text from '@maui/Text'
import React, { useEffect, useRef, useState } from 'react'
import { Modal, View } from 'react-native'
import LottieView from 'lottie-react-native';

interface SplashScreenViewProps {
    isModalVisible: boolean
    handleAnimationFinish: () => void
}

const SplashScreenView = (props: SplashScreenViewProps) => {

    const { isModalVisible, handleAnimationFinish } = props
    const animationRef = useRef<LottieView>(null);

    useEffect(() => {
        if (isModalVisible) {
            animationRef.current?.play()
        }
    })

    return (
        <Modal visible={isModalVisible}>
            <LottieView
                ref={animationRef}
                source={require('@assets/lotties/splash_screen.json')}
                style={{ width: "100%", height: "100%" }}
                autoPlay
                loop={false}
                onAnimationFinish={handleAnimationFinish}
            />
        </Modal>
    )
}

SplashScreenView.displayName = 'SplashScreenView'
export default SplashScreenView