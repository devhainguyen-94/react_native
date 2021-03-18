import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
    SplashScreen,
    OnbordingScreen,
    LoginScreen,
} from '../screens';

const Stack = createStackNavigator();

class OnbordingStack extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator screenOptions={{
                    headerShown: false,
                }} >
                    <Stack.Screen
                        name="OnbordingScreen"
                        component={OnbordingScreen} />
                    <Stack.Screen name="LoginScreen" component={LoginScreen} />
                </Stack.Navigator>

            </NavigationContainer>
        );
    }

}

export default OnbordingStack;
