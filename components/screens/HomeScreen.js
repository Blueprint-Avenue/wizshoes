import React, {useContext} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ProductContext } from '../context/Product.context';
import {ActivityIndicator} from 'react-native-paper';

const HomeScreen = () => {

    const {isLoading, products} = useContext(ProductContext);

        if(isLoading){
            return(
                <View style={styles.prodLoading}>
                   <ActivityIndicator animating={true} size='large'/>
                   <Text style={{marginVertical: 10}}>Loading Kicks</Text>
                </View>
            )
        }

    return (
        <View>
            <View>
                <Flatlist
                data={products}
                key={(item) => item.id}
                renderItem={({item}) => console.log(item.title)}
                />
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    prodLoading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
