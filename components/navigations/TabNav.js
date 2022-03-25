import React from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {AntDesign} from '@expo/vector-icons';
import { MainStackNav, CartStackNav, DonationStackNav, AboutStackNav } from "./StackNav";
import ShoppingCartIcon from "../cartItems.js/ShoppingCartIcon";



const Tab = createMaterialBottomTabNavigator();

export const TabNav = () => {
    return (
        <Tab.Navigator
      screenOptions={({route}) => ({

        tabBarIcon: ({focused, size, color}) => {
            let iconName;
            if (route.name === 'Home') {
                iconName='home';
                size = focused ? 22 : 25;
                color= focused ? '#AB6D23' : '#F78812';
            } else if (route.name === 'Cart'){
                iconName='shoppingcart';
                size = focused ? 22 : 25;
                color= focused ? '#AB6D23' : '#F78812';
            } else if (route.name === 'Donate'){
              iconName='info';
              size = focused ? 22 : 25;
              color= focused ? '#AB6D23' : '#F78812';
          } else if (route.name === 'About'){
              iconName='contacts';
              size = focused ? 22 : 25;
              color= focused ? '#AB6D23' : '#F78812';

          }
          return(
              <AntDesign
              name={iconName}
              size={size}
              color={color}
              />
            )
          }
      })}
      tabBarOptions={{
          showIcon: true,
          labelStyle: { fontSize: 16},
          showLabel: true
      }}
      activeColor='#eee'
      inactiveColor='#008E89'
      barStyle={{backgroundColor:'#51050F'}}
      >
       <Tab.Screen name="Home" component={MainStackNav} options={{ headerRight: props => <ShoppingCartIcon {...props}/> }}/>
            <Tab.Screen name="Cart" component={CartStackNav}/>
            <Tab.Screen name="Donate" component={DonationStackNav}/>
            <Tab.Screen name="About" component={AboutStackNav }/>

      </Tab.Navigator>
    )
}
