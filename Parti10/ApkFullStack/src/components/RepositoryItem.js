/*
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Button,
  Touchable,
  TouchableOpacity,
} from 'react-native';

const RepositoryItem = ({item}) => {
  return (
    <ScrollView>
     <View style={styles.conternai}>
       <View style={styles.itemView}>
        <Image source={{uri:item.ownerAvatarUrl}} style={styles.img}/>
            <View style={{flexDirection:'column'}}>
        <Text>{item.fullName}</Text>
        <Text>{item.description}</Text>
          
     <Button title={item.language}/>
        </View>
        </View>
        <View style={styles.itemView2}>
          
     <Text style={{textAlign:"center"}}>{item.stargazersCount}k {'\n'}Stars</Text>
     <Text style={{textAlign:"center"}}>{item.forksCount}{'\n'}Forks</Text>
     <Text style={{textAlign:"center"}}>{item.reviewCount}{'\n'}Reviews</Text>
     <Text style={{textAlign:"center"}}>{item.ratingAverage}{'\n'}Ratings</Text>
     
     </View>
     
     </View>


    </ScrollView>
  );
};
styles=StyleSheet.create({
  conternai:{
    paddingTop:15,
    paddingHorizontal:20,
    
  },
  itemView:{
    flexDirection:'row'
  },
  itemView2:{
    marginTop:10,
    flexDirection:'row',
    justifyContent:'space-around',
    

    
  },
  img:{
    width:50, 
    height:50,
    borderRadius:5,
    marginRight:10
   
  }
})

export default RepositoryItem;
