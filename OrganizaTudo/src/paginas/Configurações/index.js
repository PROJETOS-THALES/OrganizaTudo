import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
    StyleSheet, View, Text, Alert,
} from 'react-native';

export default class App extends Component {
    render() {
        return (
            <View style={styles.ContainerSair}>

                <Icon style={styles.floatingSair} name={"power-off"} size={60} color={'#35C0ED'}
                    onPress={() => {

                        Alert.alert(
                            'Tem certeza?',
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
                                    onPress: () => {
                                        AsyncStorage.removeItem('USERLOGGED')
                                        AsyncStorage.removeItem('USERLOGIN')
                                        AsyncStorage.removeItem('USERSECURITYCODE')
                                        this.props.navigation.navigate('Login')
                                    }
                                },
                            ]
                        );
                    }} />

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
    floatingSair: {
        position: "absolute",
        right: 10,
        top: 10
    }
});