import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const Account = () => {
  return (
    <View style={styles.home}>
     <Text>Account</Text>
    </View>
  );
};
const styles=StyleSheet.create({
    home:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default Account;
