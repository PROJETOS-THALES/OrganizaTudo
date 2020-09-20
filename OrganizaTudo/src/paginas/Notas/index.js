import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, TextInput, Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App({ navigation }) {

    const [notas, setNotas] = useState([]);
    const [nota, setNota] = useState([]);

    useEffect(() => {
        buscarNotas();
    }, []);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            buscarNotas();
        });
        return unsubscribe;
    }, [navigation]);

    const buscarNotas = async () => {

        fetch('https://webhooks.mongodb-realm.com/api/client/v2.0/app/organiza-tudo-luhho/service/API/incoming_webhook/buscarNotas', {
            method: 'POST',
            body: JSON.stringify({
                "usuario": await AsyncStorage.getItem('USERLOGGED')
            })
        })
            .then((response) => response.json()).
            then((responseJson) => {
                setNotas(responseJson);
            });

    }

    const buscarNota = async (Titulo) => {

        if (Titulo == '') {
            buscarNotas();
        }
        else {
            fetch('https://webhooks.mongodb-realm.com/api/client/v2.0/app/organiza-tudo-luhho/service/API/incoming_webhook/buscarNotas', {
                method: 'POST',
                body: JSON.stringify({
                    "usuario": await AsyncStorage.getItem('USERLOGGED'),
                    "titulo": Titulo
                })
            })
                .then((response) => response.json()).
                then((responseJson) => {
                    setNotas(responseJson);
                });
        }
    }

    const deletarNota = async (Titulo, Nota) => {

        fetch('https://webhooks.mongodb-realm.com/api/client/v2.0/app/organiza-tudo-luhho/service/API/incoming_webhook/deletarNota', {
            method: 'POST',
            body: JSON.stringify({
                "usuario": {
                    "apelido": await AsyncStorage.getItem('USERLOGIN'),
                    "senha": await AsyncStorage.getItem('USERSECURITYCODE')
                },
                "nota": {
                    "titulo": Titulo,
                    "nota": Nota
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

        buscarNotas();

    }

    return (
        <View>

            <View style={styles.ContainerOpcoes}>

                <TextInput placeholder={'Buscar Nota'} style={styles.txtBuscarNota}
                    onChangeText={(value) => {
                        buscarNota(value + '');
                    }}
                ></TextInput>

                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('CriarNota');
                    }} >
                    <Icon style={styles.btnCriarNota} name={"plus-circle"} size={60} color={'#35C0ED'} />
                </TouchableOpacity>
            </View>

            <FlatList style={styles.ContainerListagemNota}
                data={notas} keyExtractor={item => item._id.$oid}
                renderItem={({ item }) => (
                    <TouchableOpacity

                        onPress={() => {
                            navigation.navigate('EditarNota', {
                                routesTitulo: item.titulo,
                                routesNota: item.nota
                            });
                        }}

                        onLongPress={() => {

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
                                            deletarNota(item.titulo, item.nota);
                                        }
                                    },
                                ]
                            );

                        }}>

                        <View style={styles.ContainerNotas}>
                            <Text style={styles.ContainerTituloNota}>
                                {item.titulo}
                            </Text>
                            <Text style={styles.ContainerConteudoNota} numberOfLines={3}>
                                {item.nota}
                            </Text>
                        </View>
                    </TouchableOpacity>
                )}
            />

        </View>
    );

}

const styles = StyleSheet.create({
    ContainerListagemNota: {
        marginTop: 5,
        marginBottom: 100
    },
    ContainerNotas: {
        margin: 15,
        marginTop: 0,
        backgroundColor: '#fafafa',
        borderWidth: 0.3,
        borderColor: '#35C0ED',
        padding: 20,
        flexDirection: 'column'
    },
    ContainerTituloNota: {
        fontSize: 30,
        marginBottom: 10,
    },
    ContainerConteudoNota: {
        fontSize: 18,
        color: '#999',
        lineHeight: 25
    },
    ContainerOpcoes: {
        flexDirection: 'row'
    },
    txtBuscarNota: {
        flex: 1,
        margin: 15,
        marginBottom: 10,
        padding: 10,
        borderWidth: 0.3,
        borderRadius: 5,
    },
    btnCriarNota: {
        margin: 10,
        marginLeft: 0
    }
});