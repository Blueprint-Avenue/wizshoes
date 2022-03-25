import React from 'react';
import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import {AntDesign} from '@expo/vector-icons';


export const AppCard = ({title, price, image, items, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={style.card}>
            <View style={style.imageContainer}>
                <Image source={{uri: image}} style={{height:"100%", width: "100%"}} />
            </View>

            <View style={style.cardBody}>
                <View style={style.cardContent}>
                <Text style={style.title}>{title}</Text>
                <Text style={style.price}>${price}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <AntDesign name="star" size={18} color='#AB6D23' />
                    <AntDesign name="star" size={18} color='#AB6D23' />
                    <AntDesign name="star" size={18} color='#AB6D23' />
                    <AntDesign name="star" size={18} color='#AB6D23' />
                    <AntDesign name="star" size={18} color='#AB6D23' />
                </View>
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    card: {
        width: 375,
        backgroundColor: '#51050F',
        paddingBottom: 10,
        marginHorizontal: 20,
        borderRadius: 10,
        marginBottom: 25
    },
    imageContainer: {
        height: 300
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
        color: '#F5F5F5',
        fontFamily: 'Lato_400Regular'
    },
    price: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#F5F5F5',

    }
});
