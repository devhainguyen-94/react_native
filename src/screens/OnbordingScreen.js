import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground} from 'react-native';

import { CustomButton } from "@components";
import { images } from '@constants';

const textWellcome = `Chào mừng\nđến với chúng tôi`;


class OnbordingScreen extends Component {

    constructor(props) {
        super(props);
    };

    handlePress = () => {
        this.props.navigation.navigate('LoginScreen');
    }

    render() {
        return(
            <ImageBackground style={styles.container} source={images.backgroundSplash} resizeMode="stretch">
                <ImageBackground source={images.backgroundOnbording} style={styles.container} resizeMode="stretch">
                    <View style={styles.imageContainer}>
                        <Image source={images.logoOnbording} style={styles.imageLogo}></Image>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style= { styles.textWellcome }>{textWellcome}</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <CustomButton title="Bắt đầu" styleButton={styles.button} styleTextButton={styles.textButton} onPress={this.handlePress} ></CustomButton>
                    </View>
                </ImageBackground>  
            </ImageBackground>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: '100%', 
        height: '100%'
    },

    imageContainer: {
        flex: 10,
        justifyContent: 'flex-end',
    },

    imageLogo: {
        
    },

    textContainer: {
        flex: 3,
        justifyContent: 'center',
    },

    textWellcome: {
        fontSize: 36,
        fontStyle: 'normal',
        fontWeight: 'normal',
        lineHeight: 40,
        textAlign: 'center',
        color: '#FFFFFF',
    },
    
    buttonContainer: {
        flex: 8,
        justifyContent: 'center',
    },

    button: {
        width: 350,
        height: 60,
        borderRadius: 20,
        backgroundColor: "#FFFFFF",
    },

    textButton: {
        fontFamily: 'Actor',
        fontSize: 30,
        fontStyle: 'normal',
        fontWeight: "400",
        lineHeight: 48,
        textAlign: 'center',
        color: '#004318',
    },

});

export default OnbordingScreen;
