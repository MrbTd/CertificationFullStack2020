import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import { View } from 'react-native';
import SplashScreen from './SplashScreen'
import SignInScreen from './SignInScreen'
import SignUpScreen from './SignUpScreen'
function RootStackScreen({navigation}) {
    
    const RootStack=createStackNavigator()
    return (
        <RootStack.Navigator headerMode="none">
            <RootStack.Screen name="SplashScreen" component={SplashScreen}/>
            <RootStack.Screen name="SignInScreen" component={SignInScreen}/>
            <RootStack.Screen name="SignUpScreen" component={SignUpScreen}/>
            
        </RootStack.Navigator>
    );
}

export default RootStackScreen;