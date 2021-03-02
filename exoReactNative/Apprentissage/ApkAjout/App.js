import React, { useState } from 'react';
import Header from './components/header'
import TodoItem from './components/todoItem'
import AddTodo from './components/addTodo'
import {StyleSheet,View,FlatList, Alert,TouchableWithoutFeedback,Keyboardr, Keyboard} from 'react-native';

const App = () => {
  const [todos,setTodos]=useState([
    {text:'buy coffe',key:'1'},
    {text:'create an app',key:'2'},
    {text:'play on the swith',key:'3'},
    
  ])
  const pressHandler=(key)=>{
    setTodos((prevTodos)=>{
      console.log('p1',prevTodos)
      return prevTodos.filter(todo => todo.key !=key );
      
    })
  }

  const handleSubmit=(texte)=>{
    if(texte.length>3){
      setTodos((preve)=>{
        return[{text:texte,key:Math.random().toString()},...preve] 
     })
    }
    else{
      Alert.alert('OOPS','Vous n\'avez pas entrer un nombre >3',[{text:'close'}] )
    }
  }

return (
  <TouchableWithoutFeedback onPress={()=>{
    Keyboard.dismiss()
    console.log('dimmissed keyboad')
  }}>
      <View style={styles.container}>
        <Header/>
          <View style={styles.content}>
          <AddTodo handleSubmit={handleSubmit}/>
            <View style={styles.list}>
                <FlatList
                  data={todos}
                  renderItem={({item})=><TodoItem item={item} pressHandler={pressHandler}/>
                }
                />
            </View>
          </View>  
      </View>   
  </TouchableWithoutFeedback>   
   
  );
};

const styles=StyleSheet.create({
container:{
  flex:1,
  backgroundColor:"white"
},
content:{
  padding:40,
  flex:1,
  

},
list:{
  marginTop:20,
  
}

})
export default App;
