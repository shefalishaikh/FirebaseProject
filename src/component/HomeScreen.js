import React from 'react';
import {View,Text, ScrollView, TouchableOpacity,onPress, FlatList,Image} from 'react-native';
import { stylesheet } from '../../StyleSheet';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useEffect,useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import { Divider } from 'react-native-paper';
import {ProfileUser} from './ProfilUser';
import ChatRoom from './ChatRoom';

     export const HomeScreen =({route,navigation})=>{
        // const user = route.params.users; 
        const{ Name,Key} = route.params; 
        const email= route.params.email;
        const password= route.params.password;
    console.log("active user")
    console.log(Name,Key);
    
    const [users, setUsers] = useState([]);
    // const [name,setName]= useState('');
  //  const[email,setEmail]= useState([]);
    const[message,setMessage]=useState('');
    const[sender,setSender]= useState('');
    const[time,setTime]= useState('');
    const[date,setdate]= useState('');
    const[activeusere,setActiveUser]=useState('');

    const userlist=[];
    const activeUserLetter= Name.charAt(0)

    useEffect(() => {
        navigation.setOptions({
            title: Name, //Set Header Title
            headerStyle: {
                backgroundColor: 'purple',
            },
            headerTintColor: 'white',
            headerLeft: () => (
                <View >
                    <TouchableOpacity onPress={() => { alert("profile view")}}>
                    <View style={stylesheet.imageview}>
                        <Text style={stylesheet.TextView}>{activeUserLetter}</Text>
                         {/* <Image source={ require('../images/emoji.jpg')} style={stylesheet.imageViewIcon} /> */}
                         </View>
                        {/* <Icon name="plus" size={25} color="black"  style={stylesheet.addgroupIcone} /> */}
                    </TouchableOpacity>
                </View>
            ),
            headerRight: () => (
                <View >
                    {/* <TouchableOpacity onPress={() => { navigation.navigate('ContactList') }}> */}
                   <TouchableOpacity onPress={() => deleteAccount()}>
                        <Icon name="delete" size={20} color="white"  style={stylesheet.addgroupIcone} />
                    </TouchableOpacity>
                </View>
            ),
        });
    }, []);
    useEffect (()=>{
        firestore()
        .collection("users") 
        .get()
        .then(querySnapshot => {   
            const users=[];
            querySnapshot.forEach(documentSnapshot => {

                users.push({
                            ...documentSnapshot.data(),
                            key: documentSnapshot.id,
                        });
               // users.push(documentSnapshot.data());
                console.log("user----"+users);   
                console.log('User ID: ', documentSnapshot.id);
                 
            });
            setUsers( users);
            // setActiveUser( )
            });

    },[]);

    const chatRoom=(ch_name,ch_key,Key,Name)=>{
        console.log("chat Room---"+ch_name,Name);

        firestore()
        .collection('Chats')
       
        // .set({
        //     Sender: sender,
        //     Message: message,
        // })
        // .then(() => {

        //     console.log(' chat data added!');
              
        //      // navigation.navigate("ChatRoom",{Rec_name:ch_name,Rec_key:ch_key,Sender_Name:Name,Sender_Key:Key})
        // });
        return true;
     }

    const renderItem = ({item}) => {
        const ch_name=  item.name
        const ch_key= item.key
        const first_letter= item.name.charAt(0);
        console.log(ch_name+"key"+item.key)
                return (
                    <View style={stylesheet.division} onStartShouldSetResponder={(item) => {
                    //     navigation.navigate("ChatRoom",{name:item.name}
                    // ,console.log("id-------"+item.name) )
                    // alert(ch_name)
                    }}>
                        <View style={stylesheet.imageview}>
                                  <Text style={stylesheet.TextView}>{first_letter}</Text>                      
                            {/* <Image source={ require('../images/one.jpg')} style={stylesheet.imageDivIcon} /> */}
                        </View>
                        <View style={stylesheet.headingDiv}>
                            <View style={stylesheet.headingDivTitle}>
                                <Text style={stylesheet.headingDivText}
                                onPress={(item)=> {
                                    
                                    // chatRoom(ch_name,ch_key,Key,Name);
                                    chatRoom(ch_name,ch_key,Key,Name)== true? navigation.navigate("ChatRoom",{Rec_name:ch_name,Rec_key:ch_key,Sender_Name:Name,Sender_Key:Key}):console.log("not working")
                                      
                                    //  navigation.navigate("ChatRoom",nname)
                                     }}
                                >{item.name}</Text>
                            </View>
                            <Divider style={stylesheet.headingDivBorder}></Divider>
                        </View>
                    </View>  
            )
        }       
        
     return(
        <View style={stylesheet.container}>
          <View style={stylesheet.homecontainer}>
             <FlatList
                    data={users}
                    keyExtractor={(item, index) => item.key}
                    // numColumns = {3}
                    renderItem={renderItem}
                    // ListHeaderComponent={
                    //     <ProfileUser
                    //      Name={Name}
                    //      Key={Key}        
                    //   />}
                />
                {/* <ScrollView  contentContainerStyle={stylesheet.scrollView}> */}
                        {/* <FlatList
                          data={users}
                          renderItem={renderItem}
                          keyExtractor={({item, index}) => item} 
                        />  */}
                 {/* </ScrollView> */}
            </View>
          </View>

    );
  
 
    
}