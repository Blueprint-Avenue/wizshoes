import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import UserScreen from '../screens/UserScreen';
import {AntDesign} from '@expo/vector-icons';
import { StackNav } from "./StackNav";
import ShoppingCartIcon from "../cartItems.js/ShoppingCartIcon";

const Tab = createBottomTabNavigator();


const TabIcons = {
    Home: 'home',
    Cart: 'shoppingcart',
    About: 'user'
}

export const TabNav = () => {
    return(
        <Tab.Navigator tabBarOptions={{showLabel: false}} screenOptions={({route}) => ({
            tabBarIcon: ({size, color}) => {
                const iconName =  TabIcons[route.name]
                return <AntDesign name={iconName} size={size} color={color}/>
            }
        })}>
            <Tab.Screen name="Home" component={StackNav} options={{ headerRight: props => <ShoppingCartIcon {...props}/> }}/>
            <Tab.Screen name="Cart" component={CartScreen}/>
            <Tab.Screen name="About" component={UserScreen}/>
        </Tab.Navigator>
    )
}
