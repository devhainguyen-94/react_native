import React, { Component } from 'react';
import { View, StyleSheet, Text, SafeAreaView, StatusBar, ImageBackground, TextInput, Image, Linking, ScrollView, TouchableOpacity } from 'react-native';

import {
    CustomButton,
    CustomLink,
} from '@components';

import {
    images
} from '@constants';

const textLabel = "Nhập code 4 số gửi về SDT";
const textSubLabel = "Code";

class VerifyScreen extends Component {

    constructor(props) {
        super(props);
    };

    state = {
        code: '- - - -',
    };

    handleCode = (text) => {
        this.setState({ phone: text })
    };

    handlePress = () => {
        this.props.navigation.navigate('LocationScreen');
    };



    render() {
        return (
            <ImageBackground source={images.backgroundLogin} style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.textLabelContainer}>
                        <Text style={styles.textLabel}>{textLabel}</Text>
                        <Text style={styles.textSubLabel}>{textSubLabel}</Text>
                        <View style={styles.phoneInput}>
                            <TextInput style={styles.input}
                                placeholderTextColor="#030303"
                                placeholder={this.state.code}
                                secureTextEntry={true}
                                autoFocus={true}
                                onChangeText={this.handleCode}>
                            </TextInput>
                        </View>
                    </View>
                    <View style={styles.buttonContainer}>
                        <View>
                            <Text style={styles.subText}>Gửi lại mã</Text>

                        </View>
                        <View>
                            <TouchableOpacity style={styles.buttonItem} onPress={this.handlePress}>
                                <Image source={images.btnColor}></Image>
                            </TouchableOpacity>
                        </View>
                        
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
    },

    textLabelContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        marginHorizontal: 25,
        marginTop: 80,
    },

    textLabel: {
        fontFamily: 'Abel',
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
        marginTop: 35,
        marginHorizontal: 15,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        
    },

    buttonItem: {
        flex: 1,
    },

    subText: {
        height: 29,
        width: 150,
        fontFamily: 'Abel',
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: 'normal',
        lineHeight: 29,
        color: '#53B175',
    }

});

export default VerifyScreen;
