import {StyleSheet} from 'react-native';
export const stylesheet = StyleSheet.create(
    {
        container:{
            flex:1,
             backgroundColor:'white'
          
        },
        scrollView: {
            flexGrow: 1,
        },
        mainContainer: {
            backgroundColor: 'white',
            flex: 1,
            
          // marginTop:20
        },
        homecontainer: {
            backgroundColor: 'white',
            flex: 1,
            
           marginTop:20
        },
        division: {
            
            height: 80,
            padding: 1,
            flexDirection: 'row',
            alignItems: 'center',
        },
        imageview:{
             fontSize:60,
               borderRadius:27,
               margin:15,
               width:50,height:50,backgroundColor:'black'
        },
        TextView:{
           marginTop:15,
            justifyContent:'center',
            alignItems:'center',
            color:'white',
            textAlign:'center',
            alignContent:'center',
            alignSelf:'center',
            height:20
        },
        imageViewIcon:{
            borderRadius:27,
            
            width:50,height:50,backgroundColor:'orange'
        },
        addgroupIcone:{
             width:35,
             height:35,
            justifyContent:'center',
            alignContent:'center',
            marginTop:10,
             alignSelf:'center'
             
        },
        listView: {
            flex: 1,
            padding: 10,
            backgroundColor: 'orange',
        },
        input:{
            backgroundColor:'gray',
            borderRadius:10,
            backgroundColor:'white',
            marginTop:200,
            fontSize:20,
            marginLeft:30,
            marginRight:30
        },
        inputEmail:{
            backgroundColor:'gray',
            borderRadius:10,
            backgroundColor:'white',
            marginTop:30,
            fontSize:20,
            marginLeft:30,
            marginRight:30
        },
        
        inputpass:{
            backgroundColor:'gray',
            borderRadius:15,
            marginTop:30,
            fontSize:20,
            backgroundColor:'white',
            marginLeft:30,
            marginRight:30
        },
        item: {
            backgroundColor: 'white',
            padding: 7,
            marginVertical: 5,
            marginHorizontal: 16,
            flexDirection:'row',
          },
          title: {
            fontSize: 32,
          },
        submitButton:{
            backgroundColor:'purple',
            marginTop:40,
            borderRadius:5,
            padding:5,
            marginLeft:80,
            alignSelf:'center',
            alignContent:'center',
            textAlign:'center',
            alignItems:'center',
            marginRight:80

        },
        buttonText:{
            fontSize:25,
           color:'white',
            // marginTop:20,
            marginLeft:30,
            marginRight:30  ,
           alignItems:'center' ,  
           alignContent:'center',
           alignSelf:"center",
           textAlign:'center'
   },
   wrapButton:{
       
    //   backgroundColor:'white',
        marginTop:10,
       justifyContent:'center',
       alignSelf:'center',
       alignContent:'center',
       alignItems:'center'   
       
   }, imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
},
chatArea: {
    paddingTop: 10,
    paddingLeft: 3.5,
    paddingRight: 3.5,

},
chatTextAreaA: {
    backgroundColor: '#f7f7f7',
    maxWidth: '80%',
    padding: 4,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    borderBottomLeftRadius: 0,
    alignSelf: 'center'
},
chatTextAreaB: {
    backgroundColor: '#f7f7f7',
    maxWidth: '80%',
    padding: 4,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    borderBottomRightRadius: 0,
    alignSelf: 'center'
},
chatText: {
    alignItems: 'flex-start',
    alignSelf: 'flex-start'
    
},
chatTextSender: {
    alignItems: 'flex-start',
    alignSelf: 'flex-start'
    ,color:'white'
},
name: {
    color: 'tomato',
    fontWeight: 'bold',
    // fontSize: dimensions.font_size.small_x,
},
date: {
    // fontSize: dimensions.font_size.small_x,
    color: 'gray',
    fontFamily: 'sans-serif-light',
    fontWeight: 'bold'
},
textArea: {
    margin: 5,
    flexDirection: 'row',
},
textAreaSec1: {
    width: '85%',
},
textSection: {
    width: '100%',
    flexDirection: 'row',
    padding: 5,
},
textInputSection: {
    width: '87%',
    
},
textInputArea: {
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    // fontSize: dimensions.font_size.medium,
},
mediaInputSection: {
    width: '13%',
    backgroundColor: 'white',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 7.5,
},
cameraInputButtonArea: {
    backgroundColor: 'lightgray',
    borderRadius: 50,
},
cameraInputButton: {
    backgroundColor: 'purple',
    padding: 4,
    borderRadius: 50,
},
textAreaSec2: {
    width: '15%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 5,
},
sentMsgButton: {
    backgroundColor: 'purple',
    // backgroundColor: '#09776a',
    padding: 5,
    width: 48,
    height: 48,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 1,
},

    }
)