import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
    StyleSheet,
    View,
    Text
} from 'react-native';

export default class App extends Component {
    render() {
        return (
            <View style={styles.Header}>
                <Text>Criar Conta</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Header: {
        alignItems: 'center',
        marginTop: 50
    }
});