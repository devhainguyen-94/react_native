import React, { Component } from 'react';
import { View, StyleSheet, Text, SafeAreaView, StatusBar, ImageBackground, TextInput, Image, Linking, ScrollView, TouchableOpacity } from 'react-native';

import {
    CustomButton,
    CustomLink,
    SelectBox,
} from '@components';

import {
    images
} from '@constants';

const textLabel = "Chọn vị trí";
const textSubLabel = "Bật vị trí của bạn để bắt kịp\n những gì đang diễn ra trong khu vực của bạn";

const listProvince = [
    {
        id: 1,
        name: "Hà Nội"
    },
    {
        id: 2,
        name: "Nam Định"
    }, 
    {
        id: 3,
        name: "Thái Nguyên"
    }

];

const listDistrict = [
    {
        id: 1,
        name: "Thanh Xuân"
    },
    {
        id: 2,
        name: "Cầu Giấy"
    }, 
    {
        id: 3,
        name: "Hoàng Mai"
    }

];

class LocationScreen extends Component {

    constructor(props) {
        super(props);
    };

    state = {
        phone: '',
    };

    handlePhone = (text) => {
        this.setState({ phone: text })
    };

    handlePress = () => {
        this.props.navigation.navigate('HomeScreen');
    };

    render() {
        return (
            <ImageBackground source={images.backgroundLogin} style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <Image source={images.illustration} style={styles.imageTopLogin}></Image>
                    <View style={styles.textLabelContainer}>
                        <Text style={styles.textLabel}>
                            {textLabel}
                        </Text>
                        <Text style={styles.textSubLabel}>
                            {textSubLabel}
                        </Text>
                    </View>
                    <View style={styles.selectBoxContainer}>
                        <View style={styles.selectBox}>
                            <SelectBox  listItem={listProvince} label="Chọn thành phố"></SelectBox>
                        </View>
                        <View style={styles.selectBox}>
                            <SelectBox  listItem={listDistrict} label="Quận/Huyện"></SelectBox>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.buttonContainer}>
                    <CustomButton title="Xác nhận" styleButton={styles.button} styleTextButton={styles.textButton} onPress={this.handlePress} ></CustomButton>
                </View>
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

    imageTopLogin: {
        marginTop: 80,
        alignSelf: 'center',
    },

    textLabelContainer: {
        flex: 5,
        alignSelf: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 0,
        marginTop: 40,
    },

    textLabel: {
        fontFamily: 'Actor',
        fontSize: 26,
        fontStyle: 'normal',
        fontWeight: "400",
        lineHeight: 29,
        textAlign: 'center',
        color: '#181725',
    },

    textSubLabel: {
        marginTop: 15,
        fontFamily: 'Actor',
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: 'normal',
        lineHeight: 15,
        textAlign: 'center',
        color: '#c4c4c4',
    },

    selectBoxContainer: {
        marginTop: 50,
        marginHorizontal: 25,
    },

    selectBox: {
        marginTop: 15,
        marginBottom: 15,
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
        justifyContent: 'center',
        marginBottom: 40,
    },

    button: {
        width: 340,
        height: 60,
        borderRadius: 20,
        backgroundColor: "#53B175",
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },

    textButton: {
        fontFamily: 'Actor',
        fontSize: 24,
        fontStyle: 'normal',
        fontWeight: "400",
        lineHeight: 29,
        textAlign: 'center',
        color: '#FFFFFF',
    },

});

export default LocationScreen;
