import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { AppScreen } from './AppScreen';
import { CartItems } from '../cartItems.js/CartItems';
import { Button } from 'react-native-paper';
import { ADD_TO_CART, REMOVE_FROM_CART } from '../../redux/CartItem';
import { IconButton } from '../iconButton/IconButton';


const CartScreen = () => {
    const cartItems = useSelector(state => state)
    const dispatch = useDispatch()

    const removeItemFromCart = item =>
      dispatch({
        type: REMOVE_FROM_CART,
        payload: item
      })


    return (
        <View style={style.container}>
            <AppScreen style={{flex:1}}>
                <FlatList
                data={cartItems}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) =>(
                    <View style={style.cartContainer}>
                        <View>
                             <Image style={style.imgContainer} source={{uri: item.image}} />
                        </View>
                       <View style={style.body}>
                            <Text style={style.title}>{item.title}</Text>
                            <Text style={style.price}>${item.price}</Text>
                            <Text style={style.totalAmount}>${}</Text>
                       </View>
                       <View style={style.rightContent}>
                           <IconButton iconName='minus' size={40} onPress={() => removeItemFromCart(item)}/>
                            <Text style={style.qty}>{}</Text>
                            <IconButton iconName='plus'size={40} backgroundColor='#6555' color="#000"/>
                       </View>
                    </View>
                )
            }
                />
            <View style={style.bottomContent}>
                <Text style={style.bottomText}>Total Amount :${Math.floor()}</Text>
                <Button icon="cart" color="#eee" style={{backgroundColor: '#000', padding:10}}>
                    <Text>CHECKOUT</Text>
                </Button>
            </View>

            </AppScreen>
        </View>
    )
}



export default CartScreen;

const style = StyleSheet.create({
    container: {
        flex: 1
    },
    bottomContent: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        padding:10,
        borderRadius: 6
    },
    bottomText: {
        fontSize: 20,
        fontFamily: 'Lato_400Regular',
        fontWeight: '600',
        color: '#000'
    },
    cartContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#323232',
        padding:10
    },
    imgContainer:{
        height: 60,
        width: 60,
        marginRight: 16
    },
    image: {
        width: '100%',
        height:'100%',
    },
    body: {
        flex: 2,

    },
    rightContent: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    qty: {
        marginHorizontal:16,
    },
    title:{
        fontSize: 18,
        fontFamily: 'Lato_400Regular',
        fontWeight: '600',
        color: 'black'
    },
    price: {
        fontSize: 16,
        fontWeight: '600',
        fontFamily: 'Lato_400Regular',
        marginVertical: 5
    },
    totalAmount:{
        fontSize: 18,
        fontFamily: 'Lato_400Regular',
        fontWeight: '600'
    }
});
