import React, { Component } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Card, Text, Button, Icon, Image } from 'react-native-elements';
import { StyleSheet, TouchableOpacity, Linking } from 'react-native';
import * as Animatable from 'react-native-animatable';
import * as MailComposer from 'expo-mail-composer';
import About from '../../shared/About';



function AboutWiz(props) {
    return (
        <Card title={"About Our Community"}  style={styles.cardStyle} wrapperStyle={{ margin: 20 }}>
            <Text style={{ marginBottom: 10 }}>Established in Los Angeles over 8 years ago, WizKicks revolutionized sneaker retail as the original consignment store for rare shoes geared toward the smaller feet crowd. Carrying the rarest exclusives and collectible sneakers, WizKicks has evolved from a one-stop sneaker destination, to a cultural hub for sneaker enthusiasts and novices alike. WizKicks remains the premier source for authentic, rare sneakers.</Text>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.flightclub.com/about-us')}>
                <Image
                    source={{ uri: 'https://www.flightclub.com/static/staticPages/about-us.png' }}
                    style={{ width: 400, height: 400, resizeMode: 'contain' }}
                />
            </TouchableOpacity>
        </Card>

    )
}

class UserScreen extends Component {

    sendMail() {
        MailComposer.composeAsync({
            recipients: ['skmcintosh@gmail.com'],
            subject: 'WizKick\'s Inquiry',
            body: 'To whom it may concern:'
        })
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
                    <AboutWiz />
                    <Card title={"Contact Us"} style={styles.cardStyle} wrapperStyle={{ margin: 20 }}>
                    <Text style={styles.headerOne}>We Are Available 7 Days A Week</Text>
                        <Image
                            source={{ uri:'https://www.wearebasket.net/wp-content/uploads/2017/11/unnamed-file.jpg' }}
                            style={{ width: 400, height:400, resizeMode: 'contain' }}
                        />
                        <Text style={styles.baseText}>3343 Peachtree Rd NE Ste 145-740</Text>
                        <Text style={styles.baseText}>Atlanta, GA 30326</Text>
                        <Text style={styles.USA}>U.S.A.</Text>
                        <Text style={styles.baseText}>
                            Email:
                            DaWizCustomerCare@Wiz3rdKicks.com
                        </Text>
                        <Button
                            title="Send Email"
                            buttonStyle={{ backgroundColor: '#51050F', margin: 40 }}
                            icon={<Icon
                                name='rocket'
                                type='font-awesome'
                                color='#fff'
                                iconStyle={{ marginRight: 10 }}
                            />}
                            onPress={() => this.sendMail()}
                        />
                    </Card>
                </Animatable.View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#AB6D23',
        paddingTop: 15,
    },
    baseText: {
        fontWeight:'bold',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 30,
        color: '#51050F',
        fontSize: 16,
        fontWeight:'400',
    },
    USA: {
        fontWeight:'bold',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 30,
        color: '#51050F',
        fontSize: 16,
        fontWeight:'400',
        marginBottom:10
    },
    headerOne: {
        flexDirection: 'row',
        fontSize: 16,
        fontWeight:'bold',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 30,
        color: '#51050F'
    },
    cardStyle: {
        color: '#51050F',
        fontSize: 16,
        fontWeight:'bold',
    }
});

export default UserScreen;
