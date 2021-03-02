import React from 'react';
import { View, StyleSheet,ScrollView ,Text} from 'react-native';
import {StatusBar} from "react-native";
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    backgroundColor:'#24292e',
    justifyContent:"space-between",
    flexDirection:"row"
  },
  textBar:{
    color:'white',
    fontWeight:'bold',
    paddingBottom:10
  }
});

const AppBar = () => {
  return (
<View style={styles.container}>
<ScrollView horizontal>
  <Link to="/">
  <Text style={styles.textBar}> Repository</Text>
  </Link>

  <Link to="/conex">
  <Text style={styles.textBar}> Connexion</Text>
  </Link>
  </ScrollView>
</View>
)
};

export default AppBar;