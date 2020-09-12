import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
    StyleSheet, View, Text, Alert,
} from 'react-native';

export default class App extends Component {
    render() {
        return (
            <View style={styles.ContainerSair}>
                <Text
                    style={styles.Sair}

                    onPress={() => {
                        AsyncStorage.removeItem('USERLOGGED');
                        Alert.alert(
                            'Tem certeza? ',
                            'Se você sair, será necessário efetuar Login novamente para acessar sua conta!',
                            [
                                {
                                    text: "Cancelar",
                                    style: 'cancel',
                                    onPress: () => { }
                                },
                                {
                                    text: 'Sair',
                                    style: 'destructive',
                                    onPress: () => this.props.navigation.navigate('Login'),
                                },
                            ]
                        );
                    }}

                >Sair</Text>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    ContainerSair: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Sair: {
        fontSize: 40
    }
});