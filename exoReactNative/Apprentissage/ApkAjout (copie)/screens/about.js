import React from 'react';
import { Text, View} from 'react-native';
import {globalStyles} from '../styles/global'

function About(props) {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.text}>About screen</Text>
        </View>
    );
}

export default About;