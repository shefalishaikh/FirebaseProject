import React from "react"
import {View,Text,Image,ScrollView, TouchableOpacity,onPress, ImageBackground}from 'react-native'
import { TextInput } from "react-native-paper";
import { useState,useEffect } from 'react'
import { stylesheet } from "../../StyleSheet";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import InvertibleScrollView from 'react-native-invertible-scroll-view';
import firestore from '@react-native-firebase/firestore';






export const ChatRoom =({route})=>{

    const Rec_name= route.params.Rec_name;
    const Rec_key= route.params.Rec_key;
    const Sender_Name= route.params.Sender_Name;
    const Sender_Key= route.params.Sender_Key;

    console.log("chat "+ Rec_name , Rec_key)
    console.log("Sender "+ Sender_Name,Sender_Key )
  
    const [message, setMessage] = useState();
    const [data,setData]= useState([]);
   
    const submitButton=(message)=>{
        var sender=Sender_Name;
         message.persist();
        console.log("sender name--------"+sender);
       // console.log(JSON.parse(message));\
       // console.log(JSON.parse(JSON.stringify(message)))
            addChats();
          
       
    }
    const addChats = () => {
        console.log("-------sender and msg---------")
      //  console.log(Sender_Name, message,Rec_name);
     
      console.log(message);
        firestore()
            .collection("Chat")
            .doc(Sender_Key+Rec_key)
            .set({

                Sender: Sender_Name,
                Message: message,
            })
    
            .then(() => {
                console.log("chat data updated!");
               // alert(JSON.stringify( message))
            //    chatgroup();
            });
           
        return true;
      
    }
    function validateInput(text) {
        if (text) {
        
            return true;
        }
        else {
            return false;
        }
    }
    let componentMounted =true;
    useEffect (()=>{

        let query= firestore().collection("Chat").doc(Sender_Key+Rec_key);
         query.get().then(querySnapshot => {   

            const msg = querySnapshot.data().Message;
            const id = querySnapshot.id;
            const sender= querySnapshot.data().Sender;

                         console.log("-----database------")
                
                      console.log(id)
                        console.log(msg)
                        console.log(sender)
                        setMessage(msg);
                
             });
            
            return () => {componentMounted =false}
         
    },[]);

    return (
        <View style={stylesheet.mainContainer}>
            {/* <View style={stylesheet.container}> */}
                <ImageBackground source={require('../images/group_bg.jpg')} style={stylesheet.imageBackground}>
                    <ScrollView contentContainerStyle={stylesheet.scrollView}>
                        <View style={stylesheet.chatArea} >
                            {/* {chat()} */}
                        {chatgroup()}
                            {/* <Text>{name}</Text> */}
                        </View>
                    </ScrollView>
                    <InvertibleScrollView contentContainerStyle={stylesheet.scrollView} inverted>
                        <View style={stylesheet.chatArea} >
                            {/* {chatgroup()} */}
                        </View>
                    </InvertibleScrollView>
                    <View style={stylesheet.textArea}>
                        <View style={stylesheet.textAreaSec1}>
                            <View style={stylesheet.textSection}>
                                <View style={stylesheet.textInputSection}>
                                    <TextInput
                                        autoCompleteType='off'
                                        multiline={true}
                                        onChangeText={(message) => { 
                                            setMessage(message);
                                         }}
                                        placeholder={"Type a message"}
                                    
                                        // onContentSizeChange={(event) => { (setHeight(event.nativeEvent.contentSize.height)) }}
                                        // style={[stylesheet.textInputArea, { height: height < rowHeight ? Math.max(49, height) : (146.6666717529297) }]}
                                    />
                                </View>
                                <View style={stylesheet.mediaInputSection}>
                                    <View style={stylesheet.cameraInputButtonArea}>
                                        <TouchableOpacity
                                            activeOpacity={0.5}
                                            style={stylesheet.cameraInputButton}
                                            onPress={() => { alert("CAMERA OPEN") }}
                                        >
                                            <Icon name="camera" color="gray" size={25} />
                                        </TouchableOpacity>
                                    </View>
                                </View>

                            </View>
                        </View>
                        <View style={[stylesheet.textAreaSec2]}>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                style={stylesheet.sentMsgButton}
                               // value={message}
                                onPress={(message) => { 
                                 //   alert(message)
                                     //  alert(JSON.stringify(message))
                                    submitButton(message), setMessage(message) 
                                }}
                            >
                                <Icon name="send" color="white" size={27} />
                            </TouchableOpacity>
                        </View>

                    </View>
                </ImageBackground>
            {/* </View> */}
        </View>
    );
    
 

    function chatgroup() {
    //    return (
        // message.map((item) => {
                        
                console.log("data show");
              console.log(JSON.stringify( message));
                return (

                    <View style={stylesheet.chatArea} >
                        {/* { user == item.Sender ? */}
                            <View style={[stylesheet.chatTextAreaB, { alignSelf: 'flex-end',backgroundColor:'orange', alignItems: 'flex-start' }]}>
                                <View>   
                                    <Text style={stylesheet.chatText}></Text>
                                    {/* <Text style={[stylesheet.date, { alignSelf: 'flex-end' }]}>{item.Date} {item.Time} </Text> */}
                                </View>
                            </View> 
                            {/* :
                            <View style={[styles.chatTextAreaA, { alignSelf: 'flex-start', alignItems: 'flex-start' }]}>
                                <View>
                                   
                                    <Text style={styles.name}>{item.Sender}</Text>
                                    <Text style={styles.chatText}>{item.Message}</Text>
                                    <Text style={styles.date}>{item.Date}  {item.Time} </Text>
                                </View>
                            </View>} */}
                    </View>
        //         );
        //   }
              )
      //   );
    }




}
export default ChatRoom;