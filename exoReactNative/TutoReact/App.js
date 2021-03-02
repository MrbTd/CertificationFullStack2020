/**
*/
{/**<RootStackScreen/> <Drawer.Navigator drawerContent={props =><DrawerContent {...props}/>}>
      <Drawer.Screen name="Home" component={MainTabScreen}/>
       {<Drawer.Screen name="Details" component={ProfileScreen}/>}
      </Drawer.Navigator>*/}
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import MainTabScreen from './screens/MainTabScreen'
import DrawerContent from './screens/DrawerContent'
import RootStackScreen from './screens/RootStackScreen'
import { ActivityIndicator, View } from 'react-native';
import { useEffect } from 'react';
import {AuthContext} from './components/context'
const App= () => {
  const Drawer = createDrawerNavigator();

  const [isLoading,setIsLoading]=React.useState(true)
  const [userToken,setUserToken]=React.useState(null)

  const authContext=React.useMemo(()=>({
      signIn:()=>{
        setUserToken('fgkj')
        setIsLoading(false)
      },

      signOut:()=>{
        setUserToken(null)
        setIsLoading(false)
      },

      signUp:()=>{
        setUserToken('fgkj')
        setIsLoading(false)
      },
      
  }))

  useEffect(()=>{
    setTimeout(() => {
      setIsLoading(false)
    }, 1000);
  },[])

  if(isLoading)
  {
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator color="#0000ff"/>
      </View>
    )
  }
  return (
    <AuthContext.Provider value={authContext}>
    <NavigationContainer>
   {
     userToken !==null ?
     (
      <Drawer.Navigator drawerContent={props =><DrawerContent {...props}/>}>
      
      <Drawer.Screen name="HomeDrawer" component={MainTabScreen}/>
      

  
      </Drawer.Navigator>
     )
     :
     <RootStackScreen/>
   }
    </NavigationContainer>
    </AuthContext.Provider>
  );
};



  

export default App;
