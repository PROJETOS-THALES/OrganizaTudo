import React, { useState, useEffect, Component } from 'react';
import { StyleSheet, View, TextInput, Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App({ route, navigation }) {

    const { routesTitulo } = route.params;
    const { routesNota } = route.params;

    const [titulo, setTitulo] = useState(routesTitulo);
    const [nota, setNota] = useState(routesNota);

    const deletarNota = async () => {

        fetch('https://webhooks.mongodb-realm.com/api/client/v2.0/app/organiza-tudo-luhho/service/API/incoming_webhook/deletarNota', {
            method: 'POST',
            body: JSON.stringify({
                "usuario": {
                    "apelido": await AsyncStorage.getItem('USERLOGIN'),
                    "senha": await AsyncStorage.getItem('USERSECURITYCODE')
                },
                "nota": {
                    "titulo": routesTitulo,
                    "nota": routesNota
                }
            })
        })
            .then((response) => response.json()).
            then((responseJson) => {
                if (responseJson == '500') {
                    Alert.alert('Erro!', 'Obtivemos um problema ao deletar a Nota ... Por favor tente novamente mais tarde.', null);
                }
                else if (responseJson == '404') {
                    Alert.alert('Erro!', 'Sessão inválida!', null);
                }
            });

    }

    return (
        <View>

            <TextInput style={styles.Titulo} placeholder={'Título'}
                onChangeText={(value) => {
                    setTitulo(value);
                }}
            > {routesTitulo} </TextInput>

            <TextInput style={styles.Nota} multiline={true}
                onChangeText={(value) => {
                    setNota(value);
                }}
            > {routesNota} </TextInput>

            <View>
                <Icon style={styles.floatingSalvar} name={'save'} size={60} color={'#35C0ED'}
                    onPress={() => {

                        // Salvar Nota
                        if (this.state.Titulo == '' || this.state.Nota == '') {
                            alert('Preencha todos os campos!');
                        }
                        else {
                            alert('Título: ' + this.state.Titulo + ' | Nota: ' + this.state.Nota);
                        }

                    }}
                />
            </View>

            <View>
                <Icon style={styles.floatingDeletar} name={'trash'} size={60} color={'#ed5135'}
                    onPress={() => {

                        Alert.alert(
                            'Deseja deletar essa nota ?',
                            'Após exclusão, não teremos como recuperar as anotações',
                            [
                                {
                                    text: "Cancelar",
                                    style: 'cancel',
                                    onPress: () => { }
                                },
                                {
                                    text: 'Deletar',
                                    style: 'destructive',
                                    onPress: () => {
                                        deletarNota();
                                        navigation.navigate('Inicio', { screen: 'Notas' });
                                    }
                                },
                            ]
                        );

                    }}
                />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    Titulo: {
        margin: 15,
        borderBottomWidth: 0.3,
        textAlign: 'center',
        fontSize: 25,
    },
    Nota: {
        margin: 15,
        borderWidth: 0.4,
        borderRadius: 2,
        fontSize: 15,
        maxHeight: '80%'
    },
    floatingSalvar: {
        position: 'absolute',
        top: 5,
        left: 15,
    },
    floatingDeletar: {
        position: 'absolute',
        top: 5,
        left: 15 + 65,
    }
});