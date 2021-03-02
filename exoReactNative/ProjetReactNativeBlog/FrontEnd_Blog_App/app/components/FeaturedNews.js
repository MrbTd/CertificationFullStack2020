import React from 'react'
import { View ,TextInput,StyleSheet, Image} from 'react-native'
import BlockCard from './BlockCard'

const FeaturedNews = ({item}) =>{
    return <BlockCard item={item} style={styles.container} style={{marginVertical:15}}/>
}

const styles=StyleSheet.create({

    container:{
    }
})
export default FeaturedNews 