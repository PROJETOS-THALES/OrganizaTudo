import React, { Component } from 'react';

import {
    StyleSheet,
    TextInput,
} from 'react-native';

export default function MyInput({ placeholder, onChangeText, }) {
    return (

        <TextInput style={styles.Input} placeholder={placeholder}
            onChangeText={onChangeText}></TextInput>

    );
}

const styles = StyleSheet.create({
    Input: {
        backgroundColor: '#ccc8',
        width: '100%',
        padding: 20,
        marginVertical: 10,
        borderRadius: 8
    },
});