import React from 'react';
import { Button, Text, View } from 'react-native';

function BookmarkScreen(props) {
    return (
        <View style={styles.container}>
            <Text>Bookmark Screen</Text>
            <Button
                title="Click Here"
                onPress={()=>alert('Button Clicked !')}
            />
        </View>
    );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})

export default BookmarkScreen;