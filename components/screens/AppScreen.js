import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Constant from 'expo-constants';

export const AppScreen =({style, children}) => {
    return (
        <SafeAreaView style={[styles.screen, {...style}]}>
            {children}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
      marginTop: Constant.statusBarHeight
    }
});
