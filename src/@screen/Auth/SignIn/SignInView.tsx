import { LoginFormValue } from '@core/redux/thunks/AuthThunk';
import { LoginSchema } from '@core/services/Validate';
import { APP_PADDING, APP_WIDTH } from '@core/utils/constants';
import Button from '@maui/Button';
import Grid from '@maui/Grid';
import Input from '@maui/Input';
import ScreenBody from '@maui/ScreenBody';
import Text from '@maui/Text';
import { Formik, FormikProps } from 'formik';
import LottieView from 'lottie-react-native';
import React, { useRef, useState } from 'react';
import { Dimensions, GestureResponderEvent, ScrollView, StyleSheet, View } from 'react-native';

interface SignInViewProps {
    handlePressLogin: (data: LoginFormValue) => void
    handlePressRegister: null | ((event: GestureResponderEvent) => void) | undefined;
    handlePressForgotPassword: null | ((event: GestureResponderEvent) => void) | undefined;
}

const SignInView = (props: SignInViewProps) => {

    const { handlePressLogin, handlePressForgotPassword, handlePressRegister } = props;
    const scrollRef = useRef<ScrollView>(null);
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    // useKeyboard({
    //     onShown(event) {
    //         scrollRef.current?.scrollTo({ y: 120, animated: true });
    //     },
    //     onShow(event) {
    //         scrollRef.current?.scrollTo({ y: 120, animated: true });
    //     },
    //     onhide(event) {
    //         scrollRef.current?.scrollTo({ y: 0, animated: true });
    //     },
    //     onHidden(event) {
    //         scrollRef.current?.scrollTo({ y: 0, animated: true });
    //     },
    // });

    return (
        <ScreenBody
            ref={scrollRef}
            safe={false}
            scroll={{
                showsVerticalScrollIndicator: false,
                keyboardShouldPersistTaps: 'handled',
            }}
        >
            <View>
                <LottieView
                    source={require('@assets/lotties/loginImage.json')}
                    style={{ width: '100%', height: 200, marginTop: 60 }}
                    autoPlay
                    resizeMode='cover'
                />
                <Grid.Col
                    style={{
                        padding: APP_PADDING,
                        marginTop: 40,
                        marginBottom: 10,
                    }}
                >
                    <Formik
                        initialValues={{ phone_number: '', password: '' }}
                        onSubmit={handlePressLogin}
                        validateOnBlur
                        validationSchema={LoginSchema}
                    >
                        {({ values, handleChange, errors, handleSubmit }: FormikProps<LoginFormValue>) => {
                            const { phone_number, password } = values;
                            const { phone_number: phone_number_error, password: password_error } = errors;
                            return (
                                <Grid.Col>
                                    <Input
                                        value={phone_number}
                                        onChangeText={handleChange('phone_number')}
                                        iconLeftName="fe-phone"
                                        placeholder="Phone number"
                                        keyboardType="number-pad"
                                        error={phone_number_error}
                                    />
                                    <Input
                                        value={password}
                                        secureTextEntry={!showPassword}
                                        onChangeText={handleChange('password')}
                                        iconLeftName="fe-lock"
                                        placeholder="Password"
                                        iconRightName={showPassword ? 'ii-eye' : 'ii-eye-off'}
                                        onPressRightIcon={handleShowPassword}
                                        keyboardType="default"
                                        error={password_error}
                                    />
                                    <Button
                                        title="Login"
                                        onPress={handleSubmit}
                                        style={styles.button}
                                        titleStyle={styles.buttonText}
                                    />
                                </Grid.Col>
                            );
                        }}
                    </Formik>

                    <Grid.Flex style={{ alignSelf: 'center' }} onPress={handlePressForgotPassword}>
                        <Text style={styles.forgotPassText} title={'Forgot password'} />
                    </Grid.Flex>
                    <Grid.Row style={styles.registerWrap}>
                        <Grid.Flex onPress={() => { }}>
                            <Text style={styles.newMemberText} title={'New member'} />
                        </Grid.Flex>
                        <Grid.Flex onPress={handlePressRegister}>
                            <Text style={styles.registerText} title={'Register now'} />
                        </Grid.Flex>
                    </Grid.Row>
                </Grid.Col>
            </View>
        </ScreenBody>
    )
}

const styles = StyleSheet.create({
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 3,
    },
    button: {
        height: 60,
        width: APP_WIDTH,
        backgroundColor: '#8614f7',
        padding: 16,
        shadowColor: '#8614f7',
        marginVertical: 20,
        shadowOffset: {
            width: 1,
            height: 2,
        },
        shadowOpacity: 0.6,
        shadowRadius: 3,
        elevation: 5,
    },
    buttonText: {
        fontSize: 20,
        letterSpacing: 0.2,
    },
    forgotPassText: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '700',
        marginTop: 20,
    },
    registerWrap: {
        marginVertical: 20,
        alignSelf: 'center',
    },
    newMemberText: {
        textAlign: 'right',
        fontSize: 16,
        fontWeight: '400',
    },
    registerText: {
        marginHorizontal: 8,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '900',
        color: '#8614f7',
    },
});
SignInView.displayName = 'SignInView'
export default SignInView