import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import ShoppingCartIcon from '../cartItems.js/ShoppingCartIcon';
import CartScreen from '../screens/CartScreen';
import UserScreen from '../screens/UserScreen';
import DonationScreen from "../screens/DonationScreen";

const Stack = createStackNavigator()

const MainStackNav = () => {
    return(
        <Stack.Navigator
        screenOptions={{
            headerStyle: {
              backgroundColor: "#51050F",
            },
            headerTintColor: "#AB6D23",
            ...TransitionPresets.ModalPresentationIOS
          }}
          >
            <Stack.Screen name='Home' component={HomeScreen} options={{ headerRight: props => <ShoppingCartIcon {...props} /> }}/>
            <Stack.Screen name='Details' component={DetailsScreen}/>
        </Stack.Navigator>
    )
}

const CartStackNav = () => {
    return (
      <Stack.Navigator
      screenOptions={{
          headerStyle: {
            backgroundColor: "#51050F",
          },
          headerTintColor: "#AB6D23",
          headerBackTitle: "#AB6D23",
        }}
      >
        <Stack.Screen name="Cart" component={CartScreen} />
      </Stack.Navigator>
    );
  }

  const DonationStackNav = () => {
    return (
      <Stack.Navigator
      screenOptions={{
          headerStyle: {
            backgroundColor: "#51050F",
          },
          headerTintColor: "#AB6D23",
          headerBackTitle: "#AB6D23",
        }}
      >
        <Stack.Screen name="Give A Kick" component={DonationScreen} />
      </Stack.Navigator>
    );
  }

  const AboutStackNav = () => {
    return (
      <Stack.Navigator
      screenOptions={{
          headerStyle: {
            backgroundColor: "#51050F",
          },
          headerTintColor: "#AB6D23",
          headerBackTitle: "#AB6D23",
        }}
      >
        <Stack.Screen name="About" component={UserScreen} />
      </Stack.Navigator>
    );
  }

  export { MainStackNav, CartStackNav, DonationStackNav, AboutStackNav }
