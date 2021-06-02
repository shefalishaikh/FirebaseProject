import React from 'react';
import {View,Text, ScrollView, TouchableOpacity,onPress, FlatList, Alert} from 'react-native';
import { stylesheet } from '../../StyleSheet';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { useEffect,useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import Checkbox  from '@react-native-community/checkbox';


    
    export const ContactList =({navigation})=>{

    const [users, setUsers] = useState([]);
    const[selectedUser,setSelectedUser]=useState([]);
    const [name,setName]= useState('');
    const[email,setEmail]= useState('');
    const [allow, setAllow] = useState(false);
    // const [key ,setKey]= useState('')

    const userlist=[];

    useEffect(() => {
        navigation.setOptions({
           // title: nav_title, //Set Header Title
            headerStyle: {
                backgroundColor: '#fff',
            },
            headerTintColor: 'black',
            headerRight: () => (
                <View >
                    <TouchableOpacity onPress={() => { alert("add group") }}>
                        <Icon name="plus" size={25} color="black"  style={stylesheet.addgroupIcone} />
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
            });
        //     setUsers(users);
        //     console.log("User"+JSON.stringify(users))
        //     console.log(users);
        //     users.map((item, index) => {
        //         const name = item.name;
        //         const email= item.email;
        //         setName( name);
        //         setEmail(email);
        //     })    
        // });
    },[]);
    function selectedUserShow(){
        const listSelected= users.filter(item=> item.selected ==true)
        console.log('listSelected:', listSelected);
        let contentAlert=[];
        listSelected.forEach(item=>{
            contentAlert = contentAlert+ item.name +" "+item.key ;
             // listSelected.forEach(item=>{
        //     selectedUser.push({
            console.log(item.name+item.key);
        //         ...item.listSelected(),
        //         key: item.id,
        //     });
        })
        // Alert.alert(contentAlert);
        console.log(contentAlert);
    }

    const selectedValue=(item)=>{

        const newData = users.map(Item=>{

            if(Item.key== item.key)
            {
              
                return{
                    ...Item,
                    // selected:true
                    selected:!item.selected
                }
            } 
            return{
                ...Item,
                // checked:false,
                // selected:false
                 selected:item.selected
            }
        })
        setUsers(newData);
         console.log("selected value--");
         console.log(newData);
    }
     const renderSeperator = () => {
        return(
            <View
                style={{
                    height: 1,
                    backgroundColor: '#CED0CE',
                }}
            />
        );
    };

    const onValueChange = (item, index) => {

       const {users} = setUsers();
        const newData = users.map(e => {
          if (e.key == item.key) {
            return {
              ...e,
              selected: true
            }
          }
          return {
            ...e,
            selected: false
          }
        });
        console.log('AAAA:', newData)
        setUsers({
          users: newData
        })
      }
     const onClick = () => {
    const {users}  = setUsers();
        const listSelected = users.filter(e => e.selected == true);
        console.log('listSelected:', listSelected);
        let contentAlert = '';
        listSelected.forEach(e=>{
          contentAlert = contentAlert + e.original_title + '\n';
        })
        (contentAlert)
      
      }
     const renderItem =({item,index})=>{  
       const letter= item.name.charAt(0);
       return(
        <View style ={stylesheet.item} >
            {/* <TouchableOpacity style={{padding:5}}> */}
            <View style={{width:"85%"} }>
               <Text style ={{fontSize:20}}>Name:{item.name} </Text> 
               <Text>Email: {item.email}</Text>  
               <Text>Key: {item.key}</Text>  
               <Text>Name:{letter} </Text> 
                 </View>
              <View style={{width:"15%"} }>
                    {/* <Checkbox
                    style={stylesheet.wrapButton}
                    disabled={false}
                    onAnimationType='fill'
                    offAnimationType='fade'
                    boxType='square'
                    onValueChange={() => {onValueChange(item, index)}}
                /> */}
              <Checkbox style={stylesheet.wrapButton}
                   disabled={false}
                   boxType='square'
                   onAnimationType='fill'
                    offAnimationType='fade'
                    onValueChange={()=>{selectedValue(item)}}
                    >
                      </Checkbox>
                  </View>   
            {/* </TouchableOpacity> */}
         {/* <Text>hello</Text> */}
        {/* <Text style ={{fontSize:20}}>Name:{item.name} </Text> 
        <Text>Email: {item.email}</Text>  */}
       </View>  
       )  
       
    }
    return(
          <View style={stylesheet.mainContainer}>
            <View style={stylesheet.container}>
                {/* <ScrollView  contentContainerStyle={stylesheet.scrollView}> */}
                    {/* <FlatList
                
                    data={users}
                    renderItem={renderItem}
                    keyExtractor={item => `key-${item.key}`}
                    extraData={users}
                    />
                    <View style={stylesheet.wrapButton} >
                    <TouchableOpacity  onPress={onClick}>
                        <Text>Add to Cart</Text>
                    </TouchableOpacity>
                    </View> */}
                        <FlatList
                          data={users}
                          renderItem={renderItem}
                        //   keyExtractor={({item, index}) => {item}} 
                          keyExtractor={(item) => `key-${item.key}`}
                          extraData={users}
                          ItemSeparatorComponent={renderSeperator}
                        /> 
                        <View style={stylesheet.wrapButton}>
                            <TouchableOpacity 
                            onPress={()=>{ selectedUserShow()}}>
                                <Text>Selected items show</Text>
                                </TouchableOpacity>
                        </View>
                 {/* </ScrollView> */}
            </View>
          </View>

    );
    
}
export default ContactList;