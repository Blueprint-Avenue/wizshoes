import React from 'react';
import {TouchableOpacity} from 'react-native';
import {AntDesign} from '@expo/vector-icons';


export const IconButton = ({onPress, iconName, backgroundColor='000', size=60, color='#eee'}) => {
    return(
        <TouchableOpacity style={{
            height: size,
            width: size,
            borderRadius: size / 2,
            backgroundColor,
            justifyContent: 'center',
            alignItems: 'center'

        }}
        >
            <AntDesign name={iconName} size={size * 0.5} color={color} />
        </TouchableOpacity>
    )
}
