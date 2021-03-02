import React from 'react'
import { View ,TextInput,StyleSheet, Image, FlatList} from 'react-native'
import VerticalList from './VerticalList'

const EntertainmentNews = ({data}) =>{
    return(
     <VerticalList title="Entertainment News" data={data}/>
    )
}

const styles=StyleSheet.create({

    container:{
      marginVertical:15
    }
})
export default EntertainmentNews 