import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Search from '../Components/Search'
import FilmDetail from '../Components/FilmDetail'


const Stack = createStackNavigator();

const SearchStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Search"
          component={Search}
          options={{ title: 'Rechercher' }}
        />
        <Stack.Screen name="FilmDetail" component={FilmDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default SearchStackNavigator

