import React from 'react';
import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import { Favorite } from '../Favorites/Favorites';

export const AppCard = ({title, price, image, items, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={style.card}>
            <Favorite products={items}  />
            <View style={style.imageContainer}>
                <Image source={{uri: image}} style={{height:"100%", width: "100%"}} />
            </View>

            <View style={style.cardBody}>
                <View style={style.cardContent}>
                <Text style={style.title}>{title}</Text>
                <Text style={style.price}>{price}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <AntDesign name="star" size={18} color='gold' />
                    <AntDesign name="star" size={18} color='gold' />
                    <AntDesign name="star" size={18} color='gold' />
                    <AntDesign name="star" size={18} color='gold' />
                    <AntDesign name="star" size={18} color='gold' />
                </View>
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    card: {
        width: 400,
        backgroundColor: '#607D8B',
        paddingBottom: 10,
        marginHorizontal: 5,
        borderRadius: 10,
    },
    imageContainer: {
        height: 200
    },
    cardBody: {
        padding: 10,
    },
    cardContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        marginVertical: 10
    },
    title: {
        fontSize: 20,
        fontWeight: '500',
        color: '#eee',
        fontFamily: 'Lato_400Regular'
    },
    price: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#eee',

    }
});
