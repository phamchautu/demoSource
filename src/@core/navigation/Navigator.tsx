import React, { FC, PropsWithChildren, useMemo } from 'react';
import { TouchableOpacity } from 'react-native';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ViIcon from '@maui/ViIcon';
import { IconSize } from '@core/utils/enum';

export interface NavigatorProps {
    initial?: string;
}

export type NavigationScreenProp = {
    route: RouteProp<ParamListBase, string>;
    navigation: any;
}

export const renderBackIcon = (navigation: any) => {
    const goBack = () => {
        navigation.pop();
    };
    return (
        <TouchableOpacity
            onPress={goBack}
            style={{ marginRight: 20 }}
        >
            <ViIcon name="en-chevron-left" size={IconSize.lg} color="black" />
        </TouchableOpacity>
    );
};

export const defaultStackNavigationOptions = (props: NavigationScreenProp) => {
    return {
        headerLeft: () => renderBackIcon(props.navigation),
    };
};

const Stack = createNativeStackNavigator();

const Nav: FC<PropsWithChildren<NavigatorProps>> = (props) => {
    const { children, initial } = props;
    const inittialRouteName = useMemo(() => initial, [initial]);

    return (
        <Stack.Navigator
            initialRouteName={inittialRouteName}
            screenOptions={(props) => defaultStackNavigationOptions(props)}
        >
            {children}
        </Stack.Navigator>);
};

Nav.displayName = 'Navigator';

const Navigator = Object.assign(Nav, {
    Screen: Stack.Screen,
    Group: Stack.Group,
});

export default Navigator