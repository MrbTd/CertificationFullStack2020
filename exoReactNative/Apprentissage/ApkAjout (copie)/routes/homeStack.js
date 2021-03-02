import React from 'react'
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home'
import ReviewDetails from '../screens/reviewDetail'
import  Header from '../shared/header'

const HomeStack = ({navigation}) => {
    const Stack = createStackNavigator();

  return (
      <Stack.Navigator >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ 
              headerTitle:()=><Header navigation={navigation}/>,
              
        }}
        />
        <Stack.Screen name="ReviewDetails" component={ReviewDetails} />

      </Stack.Navigator>
  );
};

export  default HomeStack