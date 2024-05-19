import { NavigatorProps } from '@core/navigation/Navigator';
import React from 'react'
import { View } from 'react-native';
import SignInContainer from './SignInContainer';
import Text from '@maui/Text';

interface SignInViewProps {

}

const SignInView = (props: SignInViewProps) => {

    return (
        <Text title={'SignIn'} />
    )
}
SignInView.displayName = 'SignInView'
export default SignInView