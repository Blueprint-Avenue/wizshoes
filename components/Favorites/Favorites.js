import React, { useContext } from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import {FavoriteContext} from '../context/Favorite.context';


export const Favorite = ({product}) => {

    const {add, remove, isFavored} = useContext(FavoriteContext)

    // check if favorite is already saved
    const isSaved = isFavored.find( faves => faves.id === product.id)


    return(
        <TouchableOpacity style={style.faves} onPress={() => !isSaved ? add(product) : remove(product)}>
            <AntDesign size={40} color={!isSaved ? '#607D8B' : '#607D8B'} name={!isSaved ? 'hearto' : 'heart'}/>
        </TouchableOpacity>
    )
}


const style = StyleSheet.create({
    faves: {
        position: 'absolute',
        left: 10,
        top: 30,
        zIndex: 100
    }
});
