import React, { useState } from 'react';

import {Text, View,TouchableHighlight,StyleSheet} from 'react-native';
import FormSignIn from './FormSignIn';

const SignIn = () => {
  const [user,setUser]=useState('')
  const [pass,setPass]=useState('')

  const onSubmit = (values) => {
         
  };

  return (
    <View>
     <View style={styless.conternai}>
        <FormSignIn placeholder="Username" change={text => setUser(text)} value={user} styles={styless.inputView}/>
        <FormSignIn placeholder="Password" change={text => setPass(text)} value={pass} secure={true} styles={styless.inputView}/>
     </View>
    <TouchableHighlight  style={styless.btnView} onPress={()=>onSubmit(user)}><Text style={styless.textView}>SignIn</Text></TouchableHighlight>
     
    </View>
  )
};

styless=StyleSheet.create({
  conternai:{
    margin:15, 
  },
  inputView:{
    paddingLeft:10,borderWidth:1,borderRadius:3,borderColor:'black',marginBottom:10
  },
  textView:{
    textAlign:'center',color:'white',fontWeight:'bold'
  },
  btnView:{
    backgroundColor:'#11A1FF'
  }
})




export default SignIn;