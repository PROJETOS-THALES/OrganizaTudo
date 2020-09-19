import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';

export default class App extends Component {

    state = {
        Titulo: '',
        Nota: ''
    }

    criarNota = async () => {

        var USERLOGIN = await AsyncStorage.getItem('USERLOGIN');
        var USERSECURITYCODE = await AsyncStorage.getItem('USERSECURITYCODE');

        if (this.state.Titulo == '' || this.state.Nota == '') {
            alert('Preencha todos os campos!');
        }
        else {

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
                            titulo: this.state.Titulo,
                            nota: this.state.Nota,
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
                            this.props.navigation.navigate('Inicio', { screen: 'Notas' });
                        }

                    }
                );

        }
    }

    render() {
        return (<View>

            <TextInput style={styles.Titulo} placeholder={'Título'}
                onChangeText={(value) => {
                    this.setState({ Titulo: value });
                }}
            />

            <TextInput style={styles.Nota} multiline={true} placeholder={'Nota'}
                onChangeText={(value) => {
                    this.setState({ Nota: value });
                }}
            />

            <View>
                <Icon style={styles.floatingSalvar} name={'save'} size={60} color={'#35C0ED'}
                    onPress={() => {
                        this.criarNota();
                    }}
                />
            </View>

        </View>);
    }
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