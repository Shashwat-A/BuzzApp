import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Facebook extends Component {
    render() {
        return(
            <View style={style.cotainer}>
                <Text style={style.text}>Facebook</Text>
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
        color: 'blue',
        fontWeight: 'bold',
        alignText: 'center'
    }
})