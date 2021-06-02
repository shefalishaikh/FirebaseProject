import React from "react"
import {View,Text,Image,ScrollView, TouchableOpacity,onPress, ImageBackground}from 'react-native'
import { TextInput } from "react-native-paper";
import { useState,useEffect } from 'react'
import { stylesheet } from "../../StyleSheet";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import InvertibleScrollView from 'react-native-invertible-scroll-view';
import firestore from '@react-native-firebase/firestore';






export const ChatRoom =({route,navigation})=>{

    const Rec_name= route.params.Rec_name;
    const Rec_key= route.params.Rec_key;
    const Sender_Name= route.params.Sender_Name;
    const Sender_Key= route.params.Sender_Key;

    console.log("chat "+ Rec_name , Rec_key)
    console.log("Sender "+ Sender_Name,Sender_Key )
  
    const [message, setMessage] = useState("");
    const [chat,setchat]= useState([]);
    const [allow, setAllow] = useState(false);
    const [refreash,setRefreash]=useState(false);
   
    const submitButton=(message)=>{
        var sender=Sender_Name;
        // message.persist();
        console.log("sender name--------"+sender);
        if(validateInput(message))
           { addChats();   }
       
    }
    function formDataClear(allow)
   {
       console.log("befor"+allow)
       if(submitButton(message))
       {
           setMessage("");
           console.log("After"+allow)
           setAllow(false);
       }
      
   } 

    const addChats = () => {
      console.log(message);
        firestore()
            .collection("Chat")
            .add({
                Sender: Sender_Name,
                Message: message,
                sender_key:Sender_Key,
                rev_kay:Rec_key
            })
            .then(() => {
                console.log("chat data updated!"); 
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
    useEffect (()=>{
        navigation.setOptions({
            title:Rec_name , //Set Header Title
            headerStyle: {
                backgroundColor: 'purple',
            },
            headerTintColor: '#fff',
        });
        console.log("-----database------")
     //   let query= firestore().collection("Chat").doc(Sender_Key+Rec_key)
     let componentMounted =true;
    // const subscribe = firestore()
        let query= firestore().collection("Chat").where('rev_kay','==',Rec_key)
        //  query.get().then(querySnapshot => {   
            query.onSnapshot(querySnapshot => {  
              const chat=[];
            querySnapshot.forEach(documentSnapshot=>{
                console.log("-----database------")
               console.log (documentSnapshot.data(),documentSnapshot.id)
             chat.push({
                 ...documentSnapshot.data(),
                 Key:documentSnapshot.id
             })
             console.log(chat.length)
             setchat(chat);
            //  setRefreash(refreash==true? false:true);
             
            })
            //   const chat=[];
            //  // const message= querySnapshot.get('Message')
            //      const msg = querySnapshot.data().Message;
            //      const id = querySnapshot.id;
            //      const sender= querySnapshot.data().Sender;
            //       chat.push({
            //               // id:id,
            //                Message : msg,
            //               Sender: sender
            //      })
            //     setchat(chat)
            //     console.log("-----database------")
            //      console.log(id)
            //      console.log(msg)
            //      console.log(sender) 
            //      console.log("array"+JSON.stringify( chat))
                
              });  
            return () => {componentMounted =false}   
    },[refreash]);
      
    useEffect (()=>{
        console.log("ndfdgnfdjsjg")
         console.log(message)
    },[message]);


    return (
        <View style={stylesheet.mainContainer}>
            {/* <View styles={{backgroundColor:'white', flex: 1, resizeMode: '', justifyContent: "center"}}> */}
                <ImageBackground source={require('../images/background.jpg')} style={stylesheet.imageBackground}>
                    <ScrollView contentContainerStyle={stylesheet.scrollView}>
                        <View style={stylesheet.chatArea} > 
                       { console.log(chat.length)}
                        {chatgroup()}
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
                                          //  setAllow(allow)
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
                                    submitButton(message), 
                                     setMessage("") ,
                                    // formDataClear(allow);
                                    setRefreash(refreash == true ? false : true)
                                }   }
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
       return (
        chat.map((item,index) => {
                        
                console.log("data show");
            //  console.log(JSON.stringify( message));
                return (
                    <View style={stylesheet.chatArea} key={index}>
                        { Sender_Name== item.Sender ? 
                            <View style={[stylesheet.chatTextAreaB, { alignSelf: 'flex-end', alignItems: 'flex-start' }]}>
                                <View>   
                                 {/* <Text style={stylesheet.chatText}> {item.id}</Text>  */}
                                <Text style={stylesheet.chatText}>{item.Message}</Text>
                                {/* <Text style={stylesheet.chatText}> {item.Sender}</Text> */}
                                    {/* <Text style={[stylesheet.date, { alignSelf: 'flex-end' }]}>{item.Date} {item.Time} </Text> */}
                                </View>
                            </View> 
                             :
                            <View style={[stylesheet.chatTextAreaA, { alignSelf: 'flex-start', alignItems: 'flex-start',backgroundColor:'purple' }]}>
                                <View>
                                      {/* <Text style={stylesheet.chatText}> {item.id}</Text>  */}
                                     {/* <Text style>{item.id}{item.Sender}</Text> */}
                                     <Text style={stylesheet.chatTextSender}>{item.Message}</Text> 
                                 
                                </View>
                            </View>} 
                    </View>
                );
          }
              )
        );
    }

   
   function formClear(allow) {
    return allow;
   }


}
export default ChatRoom;