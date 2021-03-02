/**
*/
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import DetailScreen  from "./DetailScreen";

const ExploreScreen= () => {
    const DetailsStack = createStackNavigator();

    return (
        <DetailsStack.Navigator initialRouteName="Details">
          <DetailsStack.Screen name="Details" component={DetailScreen} />
        </DetailsStack.Navigator>
      
    );
  };
  export default ExploreScreen