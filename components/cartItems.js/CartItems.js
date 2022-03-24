import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { IconButton } from '../iconButton/IconButton';

export const CartItems = ({items}) => {
    const {image, title, price, qty, totalAmount} = items
    return(
        <View style={style.container}>
            <View>
                 <Image style={style.imgContainer} source={{uri: image}} />
            </View>
           <View style={style.body}>
                <Text style={style.title}>{title}</Text>
                <Text style={style.price}>${price}</Text>
                <Text style={style.totalAmount}>${totalAmount}</Text>
           </View>
           <View style={style.rightContent}>
               <IconButton iconName='minus' size={40}/>
                <Text style={style.qty}>{qty}</Text>
                <IconButton iconName='plus'size={40} backgroundColor='#6555' color="#000"/>
           </View>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ccc',
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
})
