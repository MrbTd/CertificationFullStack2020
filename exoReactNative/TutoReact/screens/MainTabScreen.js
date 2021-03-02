/**
*/
import 'react-native-gesture-handler';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import ProfileScreen from './ProfileScreen'
import ExploreScreen from './ExploreScreen'
import HomeScreen from './HomeScreen'
import DetailScreen from './DetailScreen'


const MainTabScreen=()=>{
    const Tab = createMaterialBottomTabNavigator();

    return(
        <Tab.Navigator
      initialRouteName="Home"
      activeColor="#e91e63"
      barStyle={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name="Home"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'ProfileScreen',
          tabBarColor:"#d02860",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="ExploreScreen"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'ExploreScreen',
          tabBarColor:"#694fad",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'HomeScreen',
          tabBarColor:"#d0afaf",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={{
          tabBarLabel: 'DetailScreen',
          tabBarColor:"#f0f0a1",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
    )
}


export default MainTabScreen