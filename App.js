import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native'
import Adduser from './components/Adduser';
import Landing from './components/Landing'
import About from './components/about';

export default function App() {

  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer screenOptions={{headerShown:false}}>
      <Stack.Navigator initialRouteName={'home'} screenOptions={{headerShown:false}} >
      <Stack.Screen name={'home'} component={Landing} />

        <Stack.Screen name={'Adduser'} component={Adduser} />

        
      <Stack.Screen name={'about'} component={About} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};