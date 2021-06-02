/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';


import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import Signup from './src/component/Signup';
import Login from './src/component/Login';
import { HomeScreen } from './src/component/HomeScreen';
import { ContactList } from './src/component/ContactList';
import ChatRoom from './src/component/ChatRoom';


const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      
        <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
        <Stack.Screen options={{ headerShown: false }} name="Signup" component={Signup} />
        <Stack.Screen  name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ContactList" component={ContactList} />
        <Stack.Screen name="ChatRoom" component={ChatRoom} />

        </Stack.Navigator>
        </NavigationContainer>
  );
}
  
export default App;
