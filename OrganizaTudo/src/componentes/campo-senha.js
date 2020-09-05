import React, { Component } from 'react';

import {
    StyleSheet,
    TextInput,
} from 'react-native';

export default function MyPasswordInput({ placeholder, onChangeText, }) {
    return (

        <TextInput style={styles.Input} placeholder={'Senha'}
            onChangeText={onChangeText} secureTextEntry={true}></TextInput>

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