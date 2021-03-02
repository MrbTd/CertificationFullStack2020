import React from 'react'
import { Text ,TextInput,StyleSheet, Image} from 'react-native'

const Subtitle = ({children,numberOfLines=2,size=18}) =>{
    return(
        <Text numberOfLines={numberOfLines} style={{fontSize:size}}>
            {children}
        </Text>
    )
}

export default Subtitle 