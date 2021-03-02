import React from 'react'
import {StyleSheet,Text,View,Image, ImageBackground} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const Header =({navigation})=>{
    const openMenu=()=>{
        navigation.openDrawer()
    }
    return(
        
        <ImageBackground source={require('../assets/vector_icon_ios_font_import5.png')} style={styles.header}>
            <Icon name="bars" size={28}  color="black" style={styles.icon} onPress={openMenu}/>
            <View style={styles.headerTitle}>
                <Image source={require('../assets/heart_logo.png')} style={styles.headerImage}/>
                <Text style={styles.headerText}>GameZone</Text>
            </View>
        
        </ImageBackground>
    )
} 
const styles=StyleSheet.create({
    header:{
        width:'100%',
        height:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    headerText:{
        fontWeight:'bold',
        fontSize:20,
        color:'#333',
        letterSpacing:1,
    },
    icon:{
        position:'absolute',
        left:16
    },
    headerImage:{
        width:26,
        height:26,
        marginHorizontal:10
    },
    headerTitle:{
       flexDirection:'row'
    }

})
export default Header