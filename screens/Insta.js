import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Insta extends Component {
    render() {
        return(
            <View style={style.cotainer}>
                <Text style={style.text}>Instagram</Text>
            </View>
        )
    }
}

const style = StyleSheet.create({
    cotainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },

    text: {
        faontSize: 20,
        color: 'pink',
        fontWeight: 'bold',
        alignText: 'center'
    }
})