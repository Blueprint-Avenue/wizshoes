import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { AppScreen } from './AppScreen';
import { Button } from 'react-native-paper';
import { ADD_TO_CART, REMOVE_FROM_CART, ADJUST_QTY } from '../../redux/CartItem';
import { IconButton } from '../iconButton/IconButton';

function Separator() {
    return <View style={{ borderBottomWidth: 1, borderBottomColor: '#a9a9a9' }} />
  }

function CartScreen () {
    const cartItems = useSelector(state => state)
    const dispatch = useDispatch()

    const removeItemFromCart = item =>
      dispatch({
        type: REMOVE_FROM_CART,
        payload: item
      })


    return (
        <View style={style.container}>
            {cartItems.length !== 0 ? (
            <AppScreen style={{flex:1}}>
                <FlatList
                data={cartItems}
                keyExtractor={(item) => item.id.toString()}
                ItemSeparatorComponent={() => Separator()}
                renderItem={({item}) =>(
                    <View style={style.cartContainer}>
                        <View>
                             <Image style={style.imgContainer} source={{uri: item.image}} />
                        </View>
                       <View style={style.body}>
                            <Text style={style.title}>{item.title}</Text>
                            <Text style={style.price}>${item.price}</Text>
                       </View>
                       <View style={style.rightContent}>
                       <TouchableOpacity
                      onPress={() => removeItemFromCart(item)}
                      style={style.button}>
                      <Text style={style.buttonText}>-</Text>
                    </TouchableOpacity>
                       </View>
                    </View>
                )}
                />

            <View style={style.bottomContent}>
                <Button icon="cart" color="#F5F5F5" style={{backgroundColor: '#51050F', padding:10}}>
                    <Text>CHECKOUT</Text>
                </Button>
            </View>
            </AppScreen>
             ) : (
                <View style={style.emptyCartContainer}>
                <Text style={style.emptyCartMessage}>Your cart is empty :'(</Text>
              </View>
            )}
        </View>
    )
}



export default CartScreen;

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#AB6D23',
        paddingTop: 15,
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
        color: '#F5F5F5'
    },
    cartContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#51050F',
        padding:10
    },
    imgContainer:{
        height: 110,
        width: 110,
        marginRight: 16
    },
    image: {
        width: '300',
        height:'300',
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
        color: '#F5F5F5'
    },
    price: {
        fontSize: 16,
        fontWeight: '600',
        fontFamily: 'Lato_400Regular',
        marginVertical: 5,
        color: '#F5F5F5'
    },
    totalAmount:{
        fontSize: 18,
        fontFamily: 'Lato_400Regular',
        fontWeight: '600'
    },
    emptyCartContainer: {
        marginTop: 250,
        justifyContent: 'center',
        alignItems: 'center'
      },
      emptyCartMessage: {
        fontSize: 45,
        color: '#51050F'
      }
      ,
    button: {
      borderRadius: 10,
      backgroundColor: '#AB6D23',
      padding: 10
    },
    buttonText: {
      fontSize: 22,
      color: '#fff'
    },
});
