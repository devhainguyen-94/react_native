import React, { Component } from 'react';
import { View, StyleSheet, Text, SafeAreaView, StatusBar, ImageBackground, TextInput, Image, Linking, ScrollView, TouchableOpacity } from 'react-native';

import {
    CustomButton,
    CustomLink,
} from '@components';

import {
    images
} from '@constants';

const textLabel = "Nhập số điện thoại";
const code = "+84";
const textSubLabel = "Mobile Number";

class SignupScreen extends Component {

    constructor(props) {
        super(props);
    };

    state = {
        phone: '',
    };

    handlePhone = (text) => {
        this.setState({ phone: text });
    };

    handlePress = () => {
        this.props.navigation.navigate('VerifyScreen');
    }

    render() {
        return (
            <ImageBackground source={images.backgroundLogin} style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.textLabelContainer}>
                        <Text style={styles.textLabel}>{textLabel}</Text>
                        <Text style={styles.textSubLabel}>{textSubLabel}</Text>
                        <View style={styles.phoneInput}>
                            <Image source={images.logoVietnam} style={styles.iconInput}></Image>
                            <Text style={styles.text}>
                                {code}
                            </Text>
                            <TextInput style={styles.input}
                                underlineColorAndroid="transparent"
                                // placeholder={this.state.phone}
                                placeholderTextColor="#030303"
                                autoCapitalize="none"
                                autoFocus={true}
                                onChangeText={this.handlePhone}>
                            </TextInput>
                        </View>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.buttonItem} onPress={this.handlePress}>
                            <Image source={images.btnColor}></Image>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#FEFEFE",
    },

    scrollView: {
        flex: 1,
        flexDirection: 'column',
    },

    textLabelContainer: {
        flex: 5,
        justifyContent: 'flex-start',
        marginHorizontal: 25,
        marginTop: 80,
    },

    textLabel: {
        fontFamily: 'Actor',
        fontSize: 26,
        fontStyle: 'normal',
        fontWeight: "400",
        lineHeight: 29,
        textAlign: 'left',
        color: '#181725',
    },

    textSubLabel: {
        marginTop: 27,
        fontFamily: 'Actor',
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: 'normal',
        lineHeight: 29,
        textAlign: 'left',
        color: '#7c7c7c',
    },

    phoneInput: {
        // flex: 2,
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1.0,
        borderColor: "#E2E2E2",
    },

    iconInput: {

    },

    text: {
        marginLeft: 19,
        fontFamily: 'Abel',
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: "400",
        lineHeight: 29,
        textAlign: 'center',
        color: '#030303',
    },

    input: {
        paddingLeft: 5,
        // borderBottomWidth : 1,
        fontFamily: 'Abel',
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: "400",
        lineHeight: 29,
        textAlign: 'center',
        color: '#030303',
    },

    buttonContainer: {
        flex: 5,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },

    buttonItem: {
        flex: 1,
        marginTop: 33,
    },

});

export default SignupScreen;
