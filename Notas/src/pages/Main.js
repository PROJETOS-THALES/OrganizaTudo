import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
    Button,
} from 'react-native';

export default class App extends Component {

    static navigationOptions = {
        title: "Minhas Notas",
        headerLeft: (
            <View></View>
        ),
    };

    render() {
        return (

            <View style={styles.inicio}>

                <Text>Main</Text>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    inicio: {
        flex: 1,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
});