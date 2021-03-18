import React, { Component } from 'react';
import { View, StyleSheet, Text, SafeAreaView, StatusBar, ImageBackground, TextInput, Image, ScrollView ,TouchableOpacity } from 'react-native';

import {
    CustomButton,
} from '@components';

import {
    images
} from '@constants';

const textLabel = "Đăng nhập\nbằng số điện thoại";

class LoginScreen extends Component {

    constructor(props) {
        super(props);
    };

    state = {
        phone: '+84',
    }
    handlePhone = (text) => {
        console.log(text);
        this.setState({ phone: text })
    }

    render() {
        return (
          
            <SafeAreaView style={styles.container}>
                  
                <ImageBackground source={images.backgroundLogin} style={styles.imageContainer}>
                </ImageBackground>
                <View style={styles.contentContainer}>
                <ScrollView>
                    <View style={styles.textLabelContainer}>
                        <Text style={styles.textLabel}>{textLabel}</Text>
                        <View style={styles.phoneInput}>
                            <Image source={images.logoVietnam} style={styles.iconInput}></Image>
                            <TextInput style={styles.input}
                                underlineColorAndroid="transparent"
                                placeholder='+84'
                                placeholderTextColor="#030303"
                                autoCapitalize="none"
                                onChangeText={this.handlePhone}>
                            </TextInput>
                        </View>
                    </View>
                    <View style={styles.linkContainer}>
                        <Text style={styles.linkRegister}>Đăng ký mới</Text>
                        <Text style={styles.linkRegister}>Hoặc đăng nhập Google-Facebook</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        {/* <TouchableOpacity   style={styles.google} > <Text> Đăng nhập bằng Google  </Text> </TouchableOpacity> */}
                        {/* <TouchableOpacity   style={styles.facebook} > <Text> Đăng nhập bằng Facebook </Text> </TouchableOpacity> */}
                        <TouchableOpacity  style={[styles.button ,styles.google]} >
                          <View style={styles.wrapperButton}>
                          <Image style={styles.tinyLogo}
                                source={require('@assets/images/Group6893.png')}
                            />
                              <Text style={styles.textButton}> Đăng nhập bằng Google</Text>
                              </View>
                        </TouchableOpacity>
                        <TouchableOpacity  style={[ styles.button ,styles.facebook] } >
                        <View style={styles.wrapperButton}>
                        <Image style={styles.tinyLogo}
                                source={require('@assets/images/Vector.png')}
                            />
                            <Text style={styles.textButton}>Đăng nhập bằng Facebook</Text></View>
                        </TouchableOpacity>
                    </View>
                    </ScrollView>
                </View>
                
            </SafeAreaView> 
           
        ) ;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FEFEFE",

    },

    imageContainer: {
        flex: 5,
    },

    contentContainer: {
        flex: 7,
        flexDirection: 'column',
        paddingHorizontal: 12,
    },

    textLabelContainer: {
        flex: 3,
        justifyContent: 'flex-start',
        paddingLeft: 25,
    },

    textLabel: {
        fontFamily: 'Actor',
        fontSize: 26,
        fontStyle: 'normal',
        fontWeight: "400",
        lineHeight: 29,
        textAlign: 'left',
        color: '#030303',
    },

    phoneInput: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1.0,
        borderColor: "#E2E2E2",
    },

    iconInput: {

    },

    input: {
        paddingLeft: 19,
        // borderBottomWidth : 1,
        fontFamily: 'Abel',
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: "400",
        lineHeight: 29,
        textAlign: 'center',
        color: '#030303',
    },

    linkContainer: {
        paddingTop:20,
        flexDirection: "column",
        alignItems: "center",
        
    },

    buttonContainer: {
        flex: 4,
    },
    linkRegister : {
        color : '#828282',
    },
    textButton :{
        color :'#FCFCFC',
    },
    button :{ 
        borderRadius : 15,
        padding: 20,
        margin:10,
        alignItems: "center",
        
       
    },
    google : {
        backgroundColor :'#53B175',
       
    },
    facebook :{
        backgroundColor:'#0318B1',
      
    },
    wrapperButton :{
        flexDirection :'row',
        }
});

export default LoginScreen;