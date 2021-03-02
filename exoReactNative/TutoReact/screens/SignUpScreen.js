import React from 'react';
import {View, Button, Text, StyleSheet,TextInput, Dimensions, Image,TouchableOpacity,StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'



function SignInScreen({navigation}) {

    const [data,setData]=React.useState({
        email:'',
        password:'',
        confirm_password:'',
        check_textInputChange:false,
        secureTextEntry:true,
        confirm_secureTextEntry:true

    })

    const texInputChange=(val)=>{
        if(val.length !==0)
        {
            setData({
                ...data,
                email:val,
                check_textInputChange:true
            })
        }
        else{
            setData({
                ...data,
                email:val,
                check_textInputChange:false
            })
        }
    }

    const handlePasswordChange=(val)=>{
        setData({
            ...data,
            password:val
        })
    }

    const handleConfirmPasswordChange=(val)=>{
        setData({
            ...data,
            confirm_password:val
        })
    }

    

    const updateScureText=()=>{
        setData({
            ...data,
            secureTextEntry:!(data.secureTextEntry)
        })
    }

    const updateConfirmScureText=()=>{
        setData({
            ...data,
            confirm_secureTextEntry:!(data.confirm_secureTextEntry)
        })
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#009387" barStyle="light-content">
            </StatusBar>

            <View style={styles.hearder}>
                <Text style={styles.text_hearder}>Register Now</Text>
            </View>

            <Animatable.View 
             animation="fadeInUpBig"
            style={styles.footer}>
               <Text style={styles.text_footer}>Email</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="user-o"
                        color='#05375a'
                        size={20}
                    />
                    <TextInput 
                    placeholder="Your Email" 
                    style={styles.textInput}
                    autoCapitalize="none" 
                    onChangeText={(val)=>texInputChange(val)}
                    />

                    {
                        data.check_textInputChange?
                     <Animatable.View
                     animation="bounceIn"
                     >
                        <Feather
                        name="check-circle"
                        color="green"
                        size={20}
                        />
                     </Animatable.View>
                :null}
                </View>

                <Text style={[styles.text_footer,{marginTop:35}]}>Password</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="lock"
                        color='#05375a'
                        size={20}
                        
                    />
                    <TextInput 
                    placeholder="Your Password" 
                    secureTextEntry={data.secureTextEntry ? true:false}
                    style={styles.textInput}
                    autoCapitalize="none" 
                    onChangeText={(val)=>handlePasswordChange(val)}

                    />
                    
                    <TouchableOpacity 
                    onPress={updateScureText}
                    >
                    
                    {data.secureTextEntry?
                    <Feather
                        name="eye-off"
                        color="gray"
                        size={20}
                        
                    />
                        :
                    <Feather
                        name="eye"
                        color="gray"
                        size={20}
                        
                    />}
                    </TouchableOpacity >
                    
                </View>

                <Text style={[styles.text_footer,{marginTop:35}]}>Confirm Password</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="lock"
                        color='#05375a'
                        size={20}
                        
                    />
                    <TextInput 
                    placeholder="Confirm Your Password" 
                    secureTextEntry={data.confirm_secureTextEntry ? true:false}
                    style={styles.textInput}
                    autoCapitalize="none" 
                    onChangeText={(val)=>handleConfirmPasswordChange(val)}

                    />
                    
                    <TouchableOpacity 
                    onPress={updateConfirmScureText}
                    >
                    
                    {data.confirm_secureTextEntry?
                    <Feather
                        name="eye-off"
                        color="gray"
                        size={20}
                        
                    />
                        :
                    <Feather
                        name="eye"
                        color="gray"
                        size={20}
                        
                    />}
                    </TouchableOpacity >
                    
                </View>

                <LinearGradient
                    colors={["#08d4c4","#01ab9d"]}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign,{color:"#fff"}]}>Sign Up</Text>
                </LinearGradient>
                <TouchableOpacity 
                onPress={()=>navigation.goBack()}
                style={[styles.signIn,{
                borderColor:'#009387',
                borderWidth:1,
                marginTop:15}]}
                > 
                
                    <Text style={[styles.textSign,{color:"#009387"}]}>Sign In</Text>
                </TouchableOpacity>

            </Animatable.View>
        </View>
    );
}

const styles=StyleSheet.create({
   
    container:{
        flex:1,
       backgroundColor:"#009387"
    },
    hearder:{
        flex:1,
        justifyContent:'flex-end',
        paddingHorizontal:20,
        paddingBottom:30       
        
    },
    footer:{
        flex:3,
        backgroundColor:'#fff',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingVertical:50,
        paddingHorizontal:30,
        width:'100%',
    },
    
    text_hearder:{
        color:'white',
        fontWeight:'bold',
        fontSize:30
    },
    text_footer:{
        color:'#05375a',
        fontSize:30
    },
    action:{
        flexDirection:'row',
        marginTop:5,
        borderBottomWidth:1,
        borderBottomColor:"#f2f2f2"
    },
    textInput:{
        flex:1,
        marginTop:-12,
        paddingLeft:10,
        color:"#05375a"
    },
    button:{
        alignItems:'center',
        marginTop:10
    },
    signIn:{
        width:"100%",
        height:50,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10
    },
    textSign:{
        fontSize:18,
        fontWeight:'bold'
    }
})

export default SignInScreen;