import React, { Component } from 'react';

import {
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
} from 'react-native';

export default function MyButton({ text, onPress }) {
    return (

        <TouchableOpacity onPress={onPress} style={styles.view}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    view: {
        width: '100%'
    },
    button: {
        width: '100%',
        borderRadius: 8,
        padding: 20,
        backgroundColor: "#35C0ED"
    },
    buttonText: {
        color: "#FFF",
        fontWeight: "bold",
        textTransform: "capitalize",
        fontSize: 16,
        textAlign: "center"
    }
});