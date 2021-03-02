import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';



const DetailScreen =({navigation})=>{
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Hello Detail Screen</Text>
      <Button title="Got to detail screen...again" onPress={()=>navigation.push('Details')}/>
      <Button title="Got to home" onPress={()=>navigation.navigate('Home')}/>
      <Button title="Got goBack" onPress={()=>navigation.goBack()}/>
      <Button title="Got to the thirst screen" onPress={()=>navigation.popToTop()}/>

     
    </View>
  )
}
export default DetailScreen