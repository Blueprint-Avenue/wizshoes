import React from 'react';
import { StyleSheet } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import LoginScreen from '../screens/LoginScreen';
import  RegisterScreen  from '../screens/RegisterScreen'
import { MainWelcomeScreen } from '../screens/WelcomeScreen';

const Stack = createStackNavigator();

export const AuthNav = () => {
    return (
       <Stack.Navigator screenOptions={{headerShown: false}}>
           <Stack.Screen name="Main" component={ MainWelcomeScreen} />
           <Stack.Screen name="Login" component={LoginScreen} />
           <Stack.Screen name="Register" component={RegisterScreen} />
       </Stack.Navigator>
    )
}


const styles = StyleSheet.create({});
