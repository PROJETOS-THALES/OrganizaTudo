import React, { Component } from 'react';

import {
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
} from 'react-native';

export default function MyButton({text, onPress}) {
    return (

        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 100,
        backgroundColor: "#DA552F"
    },
    buttonText: {
        color: "#FFF",
        fontWeight: "bold",
        textTransform: "capitalize",
        fontSize: 16,
        textAlign: "center"
    }
});