import { NavigationScreenProp } from '@core/navigation/Navigator';
import { useAppDispatch } from '@core/redux/reduxUtils';
import { LoginFormValue, signIn } from '@core/redux/thunks/AuthThunk';
import React from 'react';
import SignInView from './SignInView';

interface SignInContainerProps extends NavigationScreenProp {

}

const SignInContainer = (props: SignInContainerProps) => {
    const { navigation } = props
    const dispatch = useAppDispatch()

    // useEffect(() => {
    //     if (isSignIn) {
    //         navigation.navigate('HomeScreen')
    //     }
    // }, [isSignIn])

    const handlePressRegister = () => {
        console.log('Navigation Register')
    };

    const handlePressForgotPassword = () => {
        console.log('Navigation ForgotPassword')
    };

    const handlePressLogin = (value: LoginFormValue) => {
        dispatch(signIn(value))
    };

    return (
        <SignInView
            handlePressRegister={handlePressRegister}
            handlePressForgotPassword={handlePressForgotPassword}
            handlePressLogin={handlePressLogin}
        />
    )
}
SignInContainer.displayName = 'SignInContainer'
export default SignInContainer