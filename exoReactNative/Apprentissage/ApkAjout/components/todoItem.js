import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const TodoItem=({item,pressHandler}) =>{
    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <View style={styles.item}>
                <Icon name='bars' size={28}/>
                 <Text>{item.text}</Text>
                 
            </View>
        </TouchableOpacity>
    );
}
const styles=StyleSheet.create({
  item:{
       padding:16,
       marginTop:16,
       borderColor:"#bbb",
       borderWidth:1,
       borderStyle:'dashed',
       borderRadius:10
  }
})
export default TodoItem;