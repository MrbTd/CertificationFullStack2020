import React from 'react'
import { View ,TextInput,StyleSheet, Image, FlatList} from 'react-native'
import HorizontalList from './HorizontalList'


const TechNews = ({data}) =>{
    return(
     <HorizontalList title='Tech News' data={data}/>
    )
}

const styles=StyleSheet.create({

    container:{
    }
})
export default TechNews 