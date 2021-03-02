import React ,{ useState }from 'react';
import { FlatList, Text,StyleSheet, TouchableOpacity, View,Modal,TouchableWithoutFeedback,Keyboard} from 'react-native';
import {globalStyles} from '../styles/global'
import Card from '../shared/card'
import Icon from 'react-native-vector-icons/MaterialIcons';
import ReviewForm from './reviewForm'

function Home({navigation}) {
    const [modalOpen,setModalOpen]=useState(false)
    const [reviews,setReviews]=useState([
        {title:'Zelda Breath of Fresh Air',rating:5,body:'lorem ipsum',key:'1'},
        {title:'Gota Catch Them All',rating:4,body:'lorem ipsum',key:'2'},
        {title:'Not So Final',rating:3,body:'lorem ipsum',key:'3'},

    ])

    const addReview=(review)=>{
        review.key=Math.random().toString()
        setReviews((currentReviews)=>{
            return [review,...currentReviews]
        })
        setModalOpen(false)
    }

    return (
        <View style={globalStyles.container}>

            <Modal visible={modalOpen} animationType='slide' >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
                    <View style={styles.modalContent}>
                    <Icon name='close' size={30} onPress={()=>setModalOpen(false)} style={{...styles.modalToggle,...styles.modalClose}}/>
                    
                    <ReviewForm addReview={addReview}/>
                    
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

            <Icon name='add' size={30} onPress={()=>setModalOpen(true)} style={styles.modalToggle}/>

            <FlatList
            data={reviews}
            renderItem={({item} )=>(
                <TouchableOpacity onPress={()=>navigation.navigate('ReviewDetails',item)}>
                        <Card>
                        <Text style={globalStyles.text}>{item.title}</Text>

                        </Card>
            
                </TouchableOpacity>
            )}
            />
        </View>
    );
}
const styles=StyleSheet.create({
    modalContent:{
        flex:1,
       
    },
    modalToggle:{
        marginBottom:10,
        borderColor:'#f2f2f2',
        padding:10,
        borderRadius:10,
        alignSelf:'center'
    },
    modalClose:{
        marginTop:20,
        marginBottom:0
    }
})
export default Home;