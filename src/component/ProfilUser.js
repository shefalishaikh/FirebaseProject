import React from 'react';
import {View,Text, ScrollView,Image}from 'react-native';
import { Divider } from 'react-native-paper';
import { stylesheet } from '../../StyleSheet';

export const ProfileUser =({navigation,Name,Key})=>{

   
    console.log("Name"+Name+"Key  "+Key)
    return(
        
        <View style={stylesheet.mainContainer}>
        <View style={stylesheet.container}>
        
           
                <View style={stylesheet.division} onStartShouldSetResponder={() => {alert("hello")}}>
                    <View style={{width:370,height:250,borderRadius:30,alignContent:'center',justifyContent:'center',alignItems:'center',alignSelf:'center'}}>
                        <Image source={ require('../images/one.jpg')} style={stylesheet.imageDivIcon} />
                    </View>
                </View>
                </View>
                        <View style={{flex:1,justifyContent:'center'}}>
                            <Text style={{justifyContent:'center',alignContent:'center',alignItems:'center',textAlign:'center'}}>{Name}</Text>
                        </View>
                        
                    </View>
             
              
                
        
    );
}
export default ProfileUser;