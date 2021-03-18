import React, { Component } from 'react';
import {
    View,
    Image,
    ImageBackground,
    Text,
    StyleSheet,
    SafeAreaView,
    PixelRatio,
    Dimensions
} from 'react-native';

import { images } from "@constants";

class SplashScreen extends Component {

    render() {
        return (
            <ImageBackground source={images.backgroundSplash} style={ styles.container } resizeMode="stretch">
                <Image source={images.logoSplash} style={styles.imageLogo}></Image>
            </ImageBackground>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    imageLogo: {
        resizeMode: 'contain',
    }
});

export default SplashScreen;