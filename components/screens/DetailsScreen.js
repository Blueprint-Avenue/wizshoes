import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button, List } from 'react-native-paper'
import { AppCard } from '../AppCard/AppCard';
import { AppScreen } from './AppScreen';

const DetailsScreen = ({route}) => {
    const {product} = route.params



    return (
        <AppScreen>
            <ScrollView>
            <View>
                <AppCard
                style={style.card}
                imgContainer={style.imgContainer}
                title={product.title}
                price={product.price}
                image={product.image}
                items={product} />
            </View>
            <View style={style.btnContainer}>
                <Button icon="shopping" color="#263238" mode="contained" style={style.btn}>Add To WizCart</Button>
            </View>
            <List.Section title={`${product.title} Details`}>
                <List.Accordion
                title="Product Information"
                left={() => <List.Icon icon="information"/>}>
                <List.Item description={product.description} />
                </List.Accordion>
                <List.Accordion
                title="Ratings"
                left={() => <List.Icon icon="star"/>}>
                <List.Item title="5/5" />
                </List.Accordion>
            </List.Section>
            </ScrollView>
        </AppScreen>
    )
}

export default DetailsScreen

const style = StyleSheet.create({
    card: {
        backgroundColor: '#263238',
        width: '100%',
        marginHorizontal: 0,
        borderRadius: 5
    },
    imgContainer: {
        height:330
    },
    btnContainer: {
        padding: 10
    },
    btn: {
        padding: 10
    }
});
