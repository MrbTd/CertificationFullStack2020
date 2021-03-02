import React from 'react';
import { Text, View,StyleSheet, } from 'react-native';

const  Header=(props)=> {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>My Todos</Text>
        </View>
    );
}

const styles=StyleSheet.create({
    header:{
        height:80,
        paddingTop:38,
        backgroundColor:'coral'

    },
    title:{
        textAlign:'center',
        color:'white',
        fontWeight:'bold',
        fontSize:20
    }
})

export default Header;