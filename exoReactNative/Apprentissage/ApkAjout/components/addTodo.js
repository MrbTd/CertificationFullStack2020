import React, { useState } from 'react';
import { TextInput, View ,StyleSheet, Button} from 'react-native';

const AddTodo=({handleSubmit}) =>{
    const [text,setText]=useState('');

    const changeHandler=(val)=>{
        setText(val)
    }
    return (
        <View>
            <TextInput 
                style={styles.input}
                placeholder='new to ...'
                onChangeText={changeHandler}
            />
            <Button onPress={()=>handleSubmit(text)} title='add todo' color='coral'/>
        </View>
    );
}

const styles=StyleSheet.create({
    input:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:'#ddd'
    }
})
export default AddTodo;