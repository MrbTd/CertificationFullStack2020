import React, { useState } from 'react';

import {Text, TextInput, TouchableHighlight, View} from 'react-native';

const FormSignIn = ({placeholder,value,change,secure,styles}) => {
   
  return (
    <View>
        
      <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={change}
      secureTextEntry={secure}
      style={styles}
      />
    </View>
  )
};

export default FormSignIn;