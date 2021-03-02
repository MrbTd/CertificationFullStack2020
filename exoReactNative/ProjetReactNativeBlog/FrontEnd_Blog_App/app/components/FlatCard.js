import React from 'react'
import { View ,TextInput,StyleSheet, Image} from 'react-native'

import Title from './Title' 
import Subtitle from './Subtitle'

const FlatCard = ({item}) =>{
    const {thumbnail,title,desc}=item;
    return(
        <View style={styles.container}>
            <Image source={{uri:thumbnail}} style={styles.Image} />
            <View style={styles.contentContainer}>
                <Title>{title}</Title>
                <Subtitle>{desc}</Subtitle>
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        borderRadius:8,
        backgroundColor:'white',
        overflow:'hidden',
        marginBottom:10,
        height:80
    },
    Image:{
        flex:0.35,
        height:'100%'
    },
    contentContainer:{
        flex:0.65,
        paddingHorizontal:5
    }

})
export default FlatCard 