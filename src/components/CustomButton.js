import React, { Component } from 'react';
import {
    View,
    Button,
    Text,
    TouchableOpacity,
    StyleSheet,
    ActivityIndicator,
} from 'react-native';


class CustomButton extends Component {
    
    render() {
        return (
            <TouchableOpacity style={[styles.button, this.props.styleButton]}
                onPress={this.onClick}
            >
                <View style={styles.textContainer}>
                    <Text style={[styles.textButton, this.props.styleTextButton]}>{ this.props.title }</Text>
                </View>
            </TouchableOpacity>
        );
    };
    onClick = ()=>{
        this.props.onPress ?.();
    }
}
   
const styles = StyleSheet.create({
    button: {
        width: 350,
        height: 60,
        borderRadius: 20,
        backgroundColor: "#FFFFFF",
    },

    textContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
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

export default CustomButton;