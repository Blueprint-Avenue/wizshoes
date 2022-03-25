import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import ShoppingCartIcon from '../cartItems.js/ShoppingCartIcon';

const Stack = createStackNavigator()

export const StackNav = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown:false, ...TransitionPresets.ModalPresentationIOS}}>
            <Stack.Screen name='Home' component={HomeScreen} options={{ headerRight: props => <ShoppingCartIcon {...props} /> }}/>
            <Stack.Screen name='Details' component={DetailsScreen}/>
        </Stack.Navigator>
    )
}
