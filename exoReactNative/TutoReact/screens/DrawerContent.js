import React from 'react';
import { View ,StyleSheet} from 'react-native';
import {DrawerContentScrollView,DrawerItem} from '@react-navigation/drawer'
import {Avatar,Title,Caption,Paragraph,Drawer,Text,TouchableRipple,Switch} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

function DrawerContent({navigation,props}) {
    const [isDarkTheme,setIsDarkTheme]=React.useState(false)
    
    const toggleTheme=()=>{
        setIsDarkTheme(!isDarkTheme);
    }

    return (
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>

                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:"row", marginTop:15}}>
                            <Avatar.Image
                                source={{
                                    uri:'https://media-exp1.licdn.com/dms/image/C4E03AQGbrEXsWt7XFA/profile-displayphoto-shrink_200_200/0/1611331610687?e=1617235200&v=beta&t=T-RPDmLx1XVprqSjbe1_grOPcvyUfEIlryQd7UDsMpE'
                                }}
                                size={50}
                            />
                            <View style={{marginLeft:15,flexDirection:'column'}}>
                                <Title style={styles.title}>Ben Toure Daouda</Title>
                                <Caption style={styles.caption}>@Mr_bTd</Caption>
                            </View>
                        </View>
                        
                        <View style={styles.row}>

                        <View style={styles.section}>
                               <Paragraph style={[styles.paragraph,styles.caption]}>80</Paragraph>
                               <Caption style={styles.caption}>Following</Caption>
                        </View>

                        <View style={styles.section}>
                               <Paragraph style={[styles.paragraph,styles.caption]}>100</Paragraph>
                               <Caption style={styles.caption}>Follower</Caption>
                        </View>

                            

                        </View>

                    </View>
                    
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={( {color,size})=>(
                                    <Icon 
                                    name="home-outline"
                                    color={color}
                                    size={size}
                                    />
                                )}
                                label="Home"
                                onPress={()=>{navigation.navigate('Home')}}
                            />
                            <DrawerItem

                            icon={( {color,size})=>(
                                    <Icon 
                                    name="account-outline"
                                    color={color}
                                    size={size}
                                    />
                                )}
                                label="Profile"
                                onPress={()=>{navigation.navigate('HomeScreen')}}
                            />
                            
                            <DrawerItem

                            icon={( {color,size})=>(
                                    <Icon 
                                    name="bookmark-outline"
                                    color={color}
                                    size={size}
                                    />
                                )}
                                label="Bookkmarkes"
                                onPress={()=>{navigation.navigate('HomeScreen')}}
                            />

                            <DrawerItem
                            icon={( {color,size})=>(
                                    <Icon 
                                    name="account-settings-outline"
                                    color={color}
                                    size={size}
                                    />
                                )}
                                label="Settings"
                                onPress={()=>{navigation.navigate('DetailScreen')}}
                            />  

                            <DrawerItem
                            icon={( {color,size})=>(
                                    <Icon 
                                    name="account-check-outline"
                                    color={color}
                                    size={size}
                                    />
                                )}
                                label="Support"
                                onPress={()=>{navigation.navigate('Home')}}
                            />
   
                    </Drawer.Section>

                    <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={()=>{toggleTheme()}}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={isDarkTheme}/>
                                </View>
                                
                            </View>
                        </TouchableRipple>

                    </Drawer.Section>
                
                </View>

            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>

                <DrawerItem
                    icon={( {color,size})=>(
                        <Icon 
                        name="exit-to-app"
                        color={color}
                        size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={()=>{}}
                />
                

            </Drawer.Section>
        </View>
    );
}
const styles =StyleSheet.create({
    drawerContent:{
        flex:1,
    },
    userInfoSection:{
        paddingLeft:20,
    },
    title:{
        fontSize:16,
        marginTop:3,
        fontWeight:'bold'
    },
    caption:{
        fontSize:16,
        lineHeight:14,
    },
    row:{
        marginTop:20,
        flexDirection:'row',
        alignItems:'center'
    },
    section:{
        flexDirection:'row',
        alignItems:'center',
        marginRight:15
    },
    paragraph:{
        fontWeight:'bold',
    },
    drawerSection:{
        marginTop:15,
    },
    bottomDrawerSection:{
        marginBottom:15,
        borderTopColor:'#f4f4f4',
        borderTopWidth:1
    },
    preference:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:12,
        paddingHorizontal:16
    },
    
    
})
export default DrawerContent;