import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
    StyleSheet, View, Text, FlatList, TouchableOpacity, TextInput,
} from 'react-native';

export default class App extends Component {

    state = {
        lembretes: []
    }

    componentDidMount() {
        // this.buscarLembretes();
    }

    buscarLembretes = async () => {

        /*fetch('https://webhooks.mongodb-realm.com/api/client/v2.0/app/organiza-tudo-luhho/service/API/incoming_webhook/buscarNotas', {
            method: 'POST',
            body: JSON.stringify({
                "usuario": await AsyncStorage.getItem('USERLOGGED')
            })
        })
            .then((response) => response.json()).
            then((responseJson) => {
                this.setState({ notas: responseJson });
            });
        */

    }

    render() {

        return (
            <View>

                <View style={styles.ContainerOpcoes}>
                    <TextInput placeholder={'Buscar Lembrete'} style={styles.txtBuscarLembrete}></TextInput>
                    <Icon style={styles.btnCriarLembrete} name={"plus-circle"} size={60} color={'#35C0ED'} />
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    ContainerOpcoes: {
        flexDirection: 'row'
    },
    txtBuscarLembrete: {
        flex: 1,
        margin: 15,
        marginBottom: 10,
        padding: 10,
        borderWidth: 0.3,
        borderRadius: 5,
    },
    btnCriarLembrete: {
        margin: 10,
        marginLeft: 0
    }
});