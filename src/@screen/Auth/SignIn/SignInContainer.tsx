import { NavigatorProps } from '@core/navigation/Navigator';
import React from 'react'
import { View } from 'react-native';
import SignInView from './SignInView';

interface SignInContainerProps extends NavigatorProps {

}

const SignInContainer = (props: SignInContainerProps) => {

    return (
        <SignInView />
    )
}
SignInContainer.displayName = 'SignInContainer'
export default SignInContainer