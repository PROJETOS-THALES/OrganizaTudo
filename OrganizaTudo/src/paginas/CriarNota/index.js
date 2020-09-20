import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';

export default function App({ navigation }) {

    const [titulo, setTitulo] = useState('');
    const [nota, setNota] = useState('');

    var click = false;

    const criarNota = async () => {

        var USERLOGIN = await AsyncStorage.getItem('USERLOGIN');
        var USERSECURITYCODE = await AsyncStorage.getItem('USERSECURITYCODE');

        if (titulo == '') {
            Alert.alert('Erro!', 'Por Favor, preencha o campo "Título" para continuar!', null);
        } else if (nota == '') {
            Alert.alert('Erro!', 'Por Favor, preencha o campo "Nota" para continuar!', null);
        } else {

            var date = new Date().getDate(); //Current Date
            var month = new Date().getMonth() + 1; //Current Month
            var year = new Date().getFullYear(); //Current Year
            var hours = new Date().getHours(); //Current Hours
            var min = new Date().getMinutes(); //Current Minutes
            var sec = new Date().getSeconds(); //Current Seconds
            var data = date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec;

            fetch('https://webhooks.mongodb-realm.com/api/client/v2.0/app/organiza-tudo-luhho/service/API/incoming_webhook/inserirNota',
                {
                    method: 'POST',
                    body: JSON.stringify({
                        usuario: {
                            apelido: USERLOGIN,
                            senha: USERSECURITYCODE
                        },
                        nota: {
                            titulo: titulo,
                            nota: nota,
                            data: data
                        }
                    })
                })
                .then((response) => response.json())
                .then(
                    (responseJson) => {
                        if (responseJson == '500') {
                            Alert.alert('Erro!', 'Obtivemos um problema ao criar a Nota ... Por Favor tente novamente mais tarde.', null);
                        }
                        else if (responseJson == '404') {
                            Alert.alert('Erro!', 'Sessão inválida!', null);
                        }
                        else {
                            Alert.alert('Sucesso!', 'Sua nova nota foi criada !!!', null);
                            navigation.navigate('Inicio', { screen: 'Notas' });
                        }

                    }
                );

        }
    }

    return (<View>

        <TextInput style={styles.Titulo} placeholder={'Título'}
            onChangeText={(value) => {
                setTitulo(value);
            }}
        />

        <TextInput style={styles.Nota} multiline={true} placeholder={'Nota'}
            onChangeText={(value) => {
                setNota(value);
            }}
        />

        <View>
            <Icon style={styles.floatingSalvar} name={'save'} size={60} color={'#35C0ED'}
                onPress={() => {

                    if (!click) {
                        click = true;
                        criarNota();
                    }

                }}
            />
        </View>

    </View>);

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
        borderBottomWidth: 0.3,
        textAlign: 'left',
        borderRadius: 2,
        fontSize: 15,
        maxHeight: '80%'
    },
    floatingSalvar: {
        position: 'absolute',
        top: 5,
        left: 15,
    },
});