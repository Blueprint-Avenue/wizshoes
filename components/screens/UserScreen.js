import React, { Component } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Card, Text, Button, Icon, Image } from 'react-native-elements';
import { StyleSheet, TouchableOpacity, Linking } from 'react-native';
import * as Animatable from 'react-native-animatable';
import * as MailComposer from 'expo-mail-composer';
import About from '../../shared/About';



function AboutWiz(props) {
    return (
        <Card title={"About Our Community"} wrapperStyle={{ margin: 20 }}>
            <Text style={{ marginBottom: 10 }}>Established in Los Angeles over 8 years ago, WizKicks revolutionized sneaker retail as the original consignment store for rare shoes geared toward the smaller feet crowd. Carrying the rarest exclusives and collectible sneakers, WizKicks has evolved from a one-stop sneaker destination, to a cultural hub for sneaker enthusiasts and novices alike. WizKicks remains the premier source for authentic, rare sneakers.</Text>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.flightclub.com/about-us')}>
            <Image
            source={{uri:'https://www.flightclub.com/static/staticPages/about-us.png'}}
            style={{width: 400, height: 400, resizeMode: 'contain'}}
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
                    <Card title={"Contact Information"} wrapperStyle={{ margin: 20 }}>
                        <Text>3343 Peachtree Rd NE Ste 145-740</Text>
                        <Text>Atlanta, GA 30326</Text>
                        <Text style={{ marginBottom: 10 }}>U.S.A.</Text>
                        <Text>
                            Email:
                            DaWiz@Wiz3rdKicks.com
                        </Text>
                        <Button
                            title="Send Email"
                            buttonStyle={{ backgroundColor: '#085E7D', margin: 40 }}
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
        backgroundColor: '#008E89',
        paddingTop: 15,
    },
    Text: {
        fontFamily: ''
    }
});

export default UserScreen;
