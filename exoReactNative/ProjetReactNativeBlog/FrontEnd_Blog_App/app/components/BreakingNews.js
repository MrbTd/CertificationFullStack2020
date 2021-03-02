import React from 'react'
import { View ,TextInput,StyleSheet, Image, FlatList} from 'react-native'
import HorizontalList from './HorizontalList'


const BreakingNews = ({data}) =>{
    return(
     <HorizontalList title='breaking news' data={data}/>
    )
}

const styles=StyleSheet.create({

    container:{
    }
})
export default BreakingNews 