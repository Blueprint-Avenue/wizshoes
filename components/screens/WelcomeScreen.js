import React from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { Button } from 'react-native-paper';
import {AppScreen } from './AppScreen';


export const MainWelcomeScreen = ({navigation}) => {
    return (
        <View style={style.container}>
            <AppScreen style={style.screen}>
                <View style={style.appTitle}>
                    <Text style={style.titleText}>Konnect To Da Wiz!</Text>
                </View>
                <View style={style.btnContainer}>
                <Button mode='contained' style={style.btn} color='#607D8B' icon='email' onPress={() => navigation.navigate("Login")}>Login</Button>
                <Button mode='contained' style={style.btn} color='#263238' onPress={() => navigation.navigate("Register")}>Register</Button>
                </View>
            </AppScreen>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#263238'
    },
    screen: {
       justifyContent: 'center',
       alignItems: "center",

    },
    btnContainer: {
        padding:10,
        width: '100%',
        backgroundColor: 'red'
    },
    btn: {
        padding:10,
        marginVertical:10
    },
    appTitle: {
        marginVertical:20,
    },
    titleText: {
        fontSize: 26,
        fontWeight:'600',
        fontFamily: 'Lato_400Regular',
        color: 'white'
    }
});
