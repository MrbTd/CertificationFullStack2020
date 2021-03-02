import React from 'react'
import { View ,TextInput,StyleSheet, Image, FlatList} from 'react-native'
import VerticalList from './VerticalList'

const PoliticalNews = ({data}) =>{
    return(
     <VerticalList title="Political News" data={data}/>
    )
}

const styles=StyleSheet.create({

    container:{
      marginVertical:15
    }
})
export default PoliticalNews 