import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
    StyleSheet, View, Text, FlatList, TouchableOpacity, TextInput,
} from 'react-native';

export default class App extends Component {

    state = {
        notas: []
    }

    componentDidMount() {
        this.buscarNotas();
    }

    buscarNotas = async () => {

        fetch('https://webhooks.mongodb-realm.com/api/client/v2.0/app/organiza-tudo-luhho/service/API/incoming_webhook/getNotas', {
            method: 'POST',
            body: JSON.stringify({
                "usuario": await AsyncStorage.getItem('USERLOGGED')
            })
        })
            .then((response) => response.json()).
            then((responseJson) => {
                this.setState({ notas: responseJson });
            });

    }

    render() {

        return (
            <View>

                {/* <TextInput placeholder={'Título da Nota'} style={styles.notaBusca}></TextInput> */}

                <FlatList style={styles.notaLista}
                    data={this.state.notas} keyExtractor={item => item._id.$oid}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => { alert('acessar') }} onLongPress={() => { alert('deletar') }}>
                            <View style={styles.Container}>
                                <Text style={styles.notaTitulo}>
                                    {item.titulo}
                                </Text>
                                <Text style={styles.notaConteudo}>
                                    {item.nota}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    Container: {
        margin: 15,
        marginTop: 0,
        backgroundColor: '#fafafa',
        borderWidth: 0.3,
        borderColor: '#35C0ED',
        padding: 20,
        flex: 1,
    },
    notaBusca: {
        marginRight: 15,
        marginLeft: 15,
        marginBottom: 10,
        marginTop: 10,
        padding: 10,
        borderWidth: 0.3,
        borderRadius: 5
    },
    notaLista: {
        marginTop: 15
    },
    notaTitulo: {
        fontSize: 30,
        marginBottom: 10,
    },
    notaConteudo: {
        fontSize: 18,
        color: '#999',
        lineHeight: 25
    }
});