import React from 'react';
import { View,Button, Text, StyleSheet, Dimensions, Image,TouchableOpacity } from 'react-native';

import LinearGradient from 'react-native-linear-gradient'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import * as Animatable from 'react-native-animatable';

function SplashScreen({navigation}) {
    
    
    return (
        <View style={styles.container}>

           <View style={styles.hearder}>
               <View style={{borderRadius:100, backgroundColor:'white'}}>
               <Animatable.Image 
               animation="bounceIn"
               
               source={require('../assets/logo.png')}
               style={[styles.logo,{width:150,height:150}]}
               resizeMode="stretch"
               />
               </View>
           </View>

           <Animatable.View 
                style={styles.footer}
                animation="fadeInUpBig"
           >
           <Text style={styles.title}>Stay connected with everyone!</Text>
           <Text style={styles.text}>Sign in with with account</Text>
           <View style={styles.button}>
           <TouchableOpacity onPress={()=>navigation.navigate('SignInScreen')}>
               <LinearGradient
                    colors={['#08d4c4','#01ab9d']}
                    style={styles.signIn}

               >
                   <Text style={styles.textSign}>Get Started</Text>
                   <MaterialIcons
                    name="navigate-next"
                    color="white"
                    size={20}
                   />
               </LinearGradient>

           </TouchableOpacity>
           </View>
           </Animatable.View>

        </View>
    );
}
const {height}=Dimensions.get("screen")
const height_logo=height*0.28

const styles=StyleSheet.create({
   
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:"#009387",
        
    },
    hearder:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
         
        
    },
    footer:{
        flex:1,
        backgroundColor:'#fff',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingVertical:50,
        paddingHorizontal:30,
        width:'100%',
    },
    

    textSign:{
        color:'white',
        fontWeight:'bold'
    },
    signIn:{
        width:150,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50,
        flexDirection:'row'
    },
    button:{
        alignItems:'flex-end',
        marginTop:5
    },
    title:{
        color:"#05375a",
        fontSize:30,
        fontWeight:'bold'
    },
    text:{
        color:'gray',
        marginTop:10
    },
    logo:{
        width:height_logo,
        height:height_logo
    }
})

export default SplashScreen;