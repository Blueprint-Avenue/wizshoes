import React, { Component } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Card, Text, Icon, Image } from 'react-native-elements';
import { Button, TextInput } from 'react-native-paper'
import { StyleSheet, TouchableOpacity, Linking, View, Keyboard } from 'react-native';
import * as Animatable from 'react-native-animatable';
import * as MailComposer from 'expo-mail-composer';




function Donate(props) {
    return (
        <Card title={"Get a Kick, Give a Kick"} wrapperStyle={{ margin: 20 }}>
            <Text style={styles.baseText}>Shoes are often the most difficult item to get in poverty stricken communities. Here at The Wiz, we pride ourselves with the act of giving back. In fact around here, it is our love language.
            </Text>
            <Text style={styles.baseText}>
                Partnered with a local Boy's and Girl's Club, for every pair of sneaker's that you buy, we will donate two pairs to one boy and girl in the community. Together we can stop bullying by making sure no child is wearing shoes that are too old or smelly or too inappropriate.</Text>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.shoesthatfit.org/major_partner/nordstrom/')}>
                <Image
                    source={{ uri: 'https://fashionunited.com/xNxHYVy5DR-bmSykgl17luMge-VIRDNvYe1EBRtz-3s/resize:fill:1388:926:1/gravity:ce/quality:70/aHR0cHM6Ly9mYXNoaW9udW5pdGVkLmNvbS9pbWcvbWFzdGVyLzIwMjEvMDgvMTYvMjM2NTUxMjU5LTEwMTU5ODg0OTc0NDQ0ODM3LTk0MzM5ODU0MzA2MjQyMjY1MS1uLWEzbnI1eHNiLTIwMjEtMDgtMTYuanBlZw' }}
                    style={{ width: 300, height: 300, resizeMode: 'contain' }}
                />
            </TouchableOpacity>
        </Card>

    )
}

class DonationScreen extends Component {
    state = {
        keyboardStatus: undefined
    };

    _onPress() {
        alert('Congrat\'s: You Officially Signed Up!')
    }
    componentDidMount() {
        this.keyboardDidShowSubscription = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                this.setState({ keyboardStatus: 'Keyboard Shown' });
            },
        );
        this.keyboardDidHideSubscription = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                this.setState({ keyboardStatus: 'Keyboard Hidden' });
            },
        );
    }

    componentWillUnmount() {
        this.keyboardDidShowSubscription.remove();
        this.keyboardDidHideSubscription.remove();
    }
    render() {
        return (
            <ScrollView style={styles.container}>
                <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
                    <Card title={"For More Information"} wrapperStyle={{ margin: 20 }}>
                        <View style={styles.form}>
                            <TextInput
                                style={styles.input}
                                mode='outlined'
                                placeholder='Email'
                                onSubmitEditing={Keyboard.dismiss}
                            />
                            <TextInput
                                style={styles.input}
                                mode='outlined'
                                placeholder='Name'
                                onSubmitEditing={Keyboard.dismiss}
                            />
                            <Text style={styles.status}>
                                {this.state.keyboardStatus}
                            </Text>
                            <Button icon='rocket' color='#51050F' mode='contained' style={{ marginVertical: 10, padding: 10 }} onPress={this._onPress}>Join Our NewsLetter</Button>
                        </View>
                    </Card>
                    <Donate />
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
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 16,
        fontWeight: '400',
        marginBottom: 10
    },
    form: {
        padding: 10,
        width: '100%',
        backgroundColor: '#AB6D23',
        borderRadius: 10
    },
    input: {
        padding: 10,
        borderWidth: 0.5,
        borderRadius: 4
      },
      status: {
        padding: 10,
        textAlign: "center"
      }
});

export default DonationScreen;
