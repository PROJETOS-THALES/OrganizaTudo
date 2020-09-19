import React, { Component, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    StyleSheet, View, Text, FlatList, TouchableOpacity, TextInput,
} from 'react-native';

export default function App({ navigation }) {

    const [notas, setNotas] = useState([]);

    // componentDidMount
    useEffect(() => {
        buscarNotas();
    }, [])

    // componentDidUpdate
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            buscarNotas();
        });
        return unsubscribe;
    }, [navigation])

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
            this.buscarNotas();
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

    /*React.useEffect(() => {
        const unsubscribe = this.props.navigation.addListener('focus', () => {
            // The screen is focused
            // Call any action
        });

        // Return the function to unsubscribe from the event so it gets removed on unmount
        return unsubscribe;
    }, [this.props.navigation]);*/

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
                                titulo: item.titulo,
                                nota: item.nota
                            });
                        }}

                        onLongPress={() => {
                            alert('deletar')
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