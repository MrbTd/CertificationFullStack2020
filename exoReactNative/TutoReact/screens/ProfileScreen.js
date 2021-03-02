/**
*/
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons'
import React from 'react';
import HomeScreen from './HomeScreen'

const ProfileScreen= ({navigation}) => {
    const HomeStack = createStackNavigator();


    return (
      
        <HomeStack.Navigator initialRouteName="Home">
          <HomeStack.Screen name="Home" component={HomeScreen}
          options={{title:'Overview',
          headerLeft:()=><Icon name="menu" size={28} backgroundColor="white" onPress={()=>{navigation.openDrawer()}}/>
          }}
           />
        </HomeStack.Navigator>
      
    );
  };
  export default ProfileScreen