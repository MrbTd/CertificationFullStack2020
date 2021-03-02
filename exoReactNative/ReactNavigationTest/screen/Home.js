import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableHighlight,
  Button
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler'

const Home = ({navigation}) => {
  return (
    <View style={styles.home}>
     <Text>Home</Text>
     <TouchableOpacity
 style={styles.button}
     onPress={()=>navigation.navigate('Account')}
     >
       <Text>go to Account</Text>
     </TouchableOpacity>
     <Button onPress={()=>alert('ok')} title="clic"/>
    </View>
  );
};
const styles=StyleSheet.create({
    home:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    button:{
      marginVertical:10,
      paddingVertical:15,
      paddingHorizontal:45,
      borderRadius:10,
      backgroundColor:'#c3c3c3'
    }
})

export default Home;
