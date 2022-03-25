import React, {useContext} from 'react';
import { StyleSheet, View , FlatList, Text, ScrollView} from 'react-native';
import { ProductContext } from '../context/Product.context';
import {ActivityIndicator} from 'react-native-paper';
import { AppCard } from '../AppCard/AppCard';
import { AppScreen } from './AppScreen';
import KickCarousel from '../Carousel';





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
        <ScrollView style={styles.container}>
            <KickCarousel/>
            <AppScreen>
            <View>
                <Text style={styles.headerOne}> The Best Of Wiz </Text>
                <FlatList
                // horizontal
                // showsHorizontalScrollIndicator={false}
                data={item}
                key={(item) => item.id}
                renderItem={({item}) => <AppCard title={item.title} price={item.price} image={item.image} items={item.item} onPress={() => navigation.navigate("Details", {item: item})}/>}
                />
            </View>
            </AppScreen>
            </ScrollView>

    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    prodLoading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: '#AB6D23',
    },
    headerOne: {
        flexDirection: 'row',
        fontSize: 43,
        fontWeight:'500',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 30,
        color:'#F5F5F5',
        marginBottom: 30,
        textTransform:'uppercase'
    }
});
