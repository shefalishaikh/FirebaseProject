import React from 'react'
import { useState,useEffect } from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import { stylesheet } from '../../StyleSheet';
import firestore from '@react-native-firebase/firestore';
import auth from "@react-native-firebase/auth";

 export const Login =({navigation,routes})=>{
    const[email,setEmail]=useState('aman@gmail.com');
    const[password,setPass]=useState('Aman123');
 
    const [users, setUsers] = useState([]);
    // const[activeusere,setActiveUser]=useState('');
    var Name,Key;
  
   
    //   useEffect (()=>{
    //     firestore()
    //     .collection('users')
    //     .get()
    //     .then(querySnapshot => {
    //       console.log('Total users: ', querySnapshot.size);
      
    //       querySnapshot.forEach(documentSnapshot => {
    //         console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
    //       });
    //     });

    //   },[])
    function SignupHandel(){
       { navigation.navigate("Signup")};
    }

    function userLogin() {
        if(email === '' && password === '') {
          Alert.alert('Enter details to login')
          return ;
        }

                }
      
   // function Userlogin(email,password){
        // userVerify(email,password,()=>{
        //     console.log("user login ")
        //     navigation.navigate("Signup");
        // })

        
   // }
    function userVerify(email,password) {
        if(email === '' && password === '') {
            Alert.alert('Enter details to login')
            return ;
          }
        firestore()
            .collection("users")
            // order by asc and desc order
            .where('email' ,"==",email )
            .where('password' ,"==",password )
            .get()
            .then(querySnapshot => {
                alert("Email And Password incorrect")
                console.log('Total users: ', querySnapshot.size);
               // size = querySnapshot.size;
                querySnapshot.forEach(documentSnapshot => {
                    alert("Email And Password correct, Succeslly login")
                    console.log('User exists: ', documentSnapshot.id, documentSnapshot.data());
                // {navigation.navigate('HomeScreen')}

                    if (documentSnapshot.exists) {
                        console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
                        users.push({
                            ...documentSnapshot.data(),
                            key: documentSnapshot.id,
                        });

                        console.log(" Users Data", documentSnapshot.data());  
                          Name = documentSnapshot.data().name;
                          Key =  documentSnapshot.id
                          console.log("userName------"+ Name , Key)
                          navigation.replace('HomeScreen',{Name,Key,email,password})

                       
                     }
                    
                });
                setUsers(users);
                console.log(users)
                users.map((item, index) => {
                    console.log("UserList " +item.name, item.key);
                   
                })
              
            });
    }

 return(
     <View style ={stylesheet.container}> 
         <TextInput style ={stylesheet.input}
         keyboardType='default'
         value={email}
         onChangeText={(text)=>setEmail(text)}
         placeholder='Enter Email'></TextInput>
        <TextInput style ={stylesheet.inputpass}
        value={password}
         onChangeText={(text)=>setPass(text)}
         keyboardType='default'
         placeholder='Enter Password'></TextInput>
         <TouchableOpacity style={stylesheet.submitButton}
         onPress ={()=> userVerify(email,password)}>
             
             <Text style ={stylesheet.buttonText}>Submit</Text>
             </TouchableOpacity>
         <TouchableOpacity style={stylesheet.submitButton}
            onPress ={()=> SignupHandel()}>
            <Text style ={stylesheet.buttonText}>Signup</Text>
         </TouchableOpacity>    
     </View>
 )
}
export default Login;