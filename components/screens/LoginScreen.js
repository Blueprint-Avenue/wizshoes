import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppScreen } from './AppScreen';
import {Button, TextInput} from 'react-native-paper'
const LoginScreen = () => {
    return (
        <AppScreen style={style.screen}>
            <View style={style.form}>
                <TextInput mode='outlined' label="Email"/>
                <TextInput mode='outlined' label="Password"/>
                <Button icon='rocket' mode='contained' style={{marginVertical: 10, padding:10}}>Login</Button>
            </View>
        </AppScreen>
    )
}

export default LoginScreen;

const style = StyleSheet.create({
    screen: {
        flex:1,
        justifyContent:"center",
        alignItems: "center",
        backgroundColor: '#263238'
    },
    form: {
        padding:10,
        width: '100%',
        backgroundColor: 'red',
        borderRadius: 10
    }
});
