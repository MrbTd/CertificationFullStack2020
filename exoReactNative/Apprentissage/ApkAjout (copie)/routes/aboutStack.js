import React from 'react'

import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/about'
import  Header from '../shared/header'


const AboutStack = ({navigation}) => {
    const Stack = createStackNavigator();

  return (
      <Stack.Navigator >
        <Stack.Screen
          name="About"
          component={About}
          options={{
            headerTitle:()=><Header navigation={navigation}/>,
          }}
        />
      </Stack.Navigator>
  );
};
export  default AboutStack