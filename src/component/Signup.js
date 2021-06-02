import React from 'react'
import { useState,useEffect } from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import { stylesheet } from '../../StyleSheet';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import Login from "./Login"

export const Signup=({navigation})=>{
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPass]=useState('');
    const [users, setUsers] = useState([]);
    const [key ,setKey]= useState('')
    const usersCreateList = [];
    const result='';
    
    
        useEffect(() => {
            const subscriber = firestore()
                .collection('users')
               // .orderBy('user', 'asc')
                .onSnapshot(querySnapshot => {
                  //  const users = [];
                    console.log('Total users: ', querySnapshot.size);
    
                    querySnapshot.forEach(documentSnapshot => {
                        console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
                        // users.push({
                        //     ...documentSnapshot.data(),
                        //     key: documentSnapshot.id,
                        // });
                    });
    
                    // setUsers(users);
                    // users.map((item, index) => {
                    //     console.log(item.department, item.key);
                    // })
    
                });
    
            // Unsubscribe from events when no longer in use
            return () => subscriber();
        }, []);
    
     

    const Usersignup=  async()=>{
        if(!email || !password || ! name){
            alert("please add all the field")
            return ;
     }    
     else
     {
        navigation.navigate('Login');
        
     }
        firestore()
        .collection("users")
        .add({
            name: name,
            email:email,
            password:password
        })
        .then(()=>{
            console.log("Added " + name, email, password)
        })

    //       useEffect (()=>{
    //     firestore()
    //     .collection('users')
    //     .get()
    //     .then(querySnapshot => {
    //       console.log('Total users: ', querySnapshot.size);
      
    //       querySnapshot.forEach(documentSnapshot => {
    //         console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
    //       });
    //     });

    
        
        // useEffect (()=>{
        //     firestore()
        //     .collection('user')
        //     .get()
        //     .then(querySnapshot => {
        //       console.log('Total users: ', querySnapshot.size);
          
        //       querySnapshot.forEach(documentSnapshot => {
        //         console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
        //       });
        //     });
    
        //   },[])
    
        
    
            
    //  try{
    //     result =  await auth().createUserWithEmailAndPassword(email,password)
    // //    .then(()=>{
    //        console.log("User"+result)
    // //    })
    //      firestore().collection('User').doc(result.user.uid).set({
          
    //          email:email,
    //          password:password,
    //         // uid:result.user.uid,
    //          status:"online"
    //      })  
    //      console.log("Value "+email,password);
        
    //  }catch(err){
    //      alert("something went wrong")
    //      console.log("User"+result)
    //      console.log("Value "+email,password);
    //  }

    }

    return(
        <View style ={stylesheet.container}> 
            <TextInput style ={stylesheet.input}
                keyboardType='default'
                value={name}
                onChangeText={(text)=>setName(text)}
                placeholder='Enter Name'></TextInput>
            <TextInput style ={stylesheet.inputEmail}
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
                 onPress ={()=> {Usersignup();               
                 }} >
                <Text style ={stylesheet.buttonText}>Signup</Text>
                </TouchableOpacity>
                <TouchableOpacity style={stylesheet.submitButton}
                 onPress ={()=> {navigation.navigate('Login')              
                 }} >
                <Text style ={stylesheet.buttonText}>Already have a Account.?</Text>
                </TouchableOpacity>
        </View>
    )
}
export default Signup;