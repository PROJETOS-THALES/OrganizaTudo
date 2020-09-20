import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App({ navigation }) {

    return (
        <View style={styles.ContainerSair} >

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
                                    navigation.navigate('Login')
                                }
                            },
                        ]
                    );
                }} />

        </View >
    );

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