import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function App({ navigation }) {

    return (
        <View style={styles.Header}>
            <Text>Recuperar Senha</Text>
        </View>
    );

}

const styles = StyleSheet.create({
    Header: {
        alignItems: 'center',
        marginTop: 50
    }
});