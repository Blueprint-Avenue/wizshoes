import React, {useContext} from 'react';
import { StyleSheet, Text, View , FlatList} from 'react-native';
import { ProductContext } from '../context/Product.context';
import {ActivityIndicator} from 'react-native-paper';
import { AppCard } from '../AppCard/AppCard';
import { AppScreen } from './AppScreen';

const HomeScreen = ({navigation}) => {

    const {isLoading, item} = useContext(ProductContext);

        if(isLoading){
            return(
                <View style={styles.prodLoading}>
                   <ActivityIndicator animating={true} size='large'/>
                   <Text style={{marginVertical: 10}}>Loading Kicks</Text>
                </View>
            )
        }

    return (
            <AppScreen>
            <View>
                <Text>Best of AirMax</Text>
                <FlatList
                // horizontal
                // showsHorizontalScrollIndicator={false}
                data={item}
                key={(item) => item.id}
                renderItem={({item}) => <AppCard title={item.title} price={item.price} image={item.image} items={item} onPress={() => navigation.navigate("Details", {item: item})}/>}
                />
            </View>
            </AppScreen>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    prodLoading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
