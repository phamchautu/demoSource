import React from 'react'
import { View } from 'react-native';
import SignInView from './SignInView';
import { NavigationScreenProp } from '@core/navigation/Navigator';

interface SignInContainerProps extends NavigationScreenProp {

}

const SignInContainer = (props: SignInContainerProps) => {

    return (
        <SignInView />
    )
}
SignInContainer.displayName = 'SignInContainer'
export default SignInContainer