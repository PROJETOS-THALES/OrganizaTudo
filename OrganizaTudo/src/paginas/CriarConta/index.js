import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, Alert } from 'react-native';
import MyButton from '../../componentes/botao-padrao';
import MyInput from '../../componentes/campo-padrao';

export default function App({ navigation }) {

    const [apelido, setApelido] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const criarConta = async () => {

        if (apelido == '') {
            Alert.alert('Erro!', 'Por favor, preencha o campo "Apelido" para continuar!', null);
        } else if (email == '') {
            Alert.alert('Erro!', 'Por favor, preencha o campo "E-mail" para continuar!', null);
        } else if (senha == '') {
            Alert.alert('Erro!', 'Por favor, preencha o campo "Senha" para continuar!', null);
        } else {

            fetch('https://webhooks.mongodb-realm.com/api/client/v2.0/app/organiza-tudo-luhho/service/API/incoming_webhook/criarConta', {
                method: 'POST',
                body: JSON.stringify({

                    "apelido": apelido,
                    "email": email,
                    "senha": senha

                })
            })
                .then((response) => response.json()).
                then((responseJson) => {
                    if (responseJson == '500') {
                        Alert.alert('Erro!', 'Obtivemos um problema ao criar a conta ... Por favor tente novamente mais tarde.', null);
                    }
                    else if (responseJson == '400') {
                        Alert.alert('Erro!', 'Este "Apelido" já está em uso, por favor escolha outro!', null);
                    } else {
                        Alert.alert('Sucesso!', 'Sua conta foi criada com sucesso!', null);
                        navigation.navigate('Login');
                    }
                });

        }

    }

    return (
        <View>
            <View style={styles.Body}>
                <MyInput placeholder={'Apelido'} onChangeText={(value) => {
                    setApelido(value);
                }} />
                <MyInput placeholder={'E-mail'} onChangeText={(value) => {
                    setEmail(value);
                }} />
                <MyInput placeholder={'Senha'} onChangeText={(value) => {
                    setSenha(value);
                }} />
            </View>
            <View style={styles.Footer}>
                <MyButton text="Confirmar" onPress={() => {
                    criarConta();
                }} />
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    Body: {
        alignItems: 'center',
        marginRight: '6%',
        marginLeft: '6%',
        marginTop: '6%',
    },
    Footer: {
        alignItems: 'center',
        marginRight: '6%',
        marginLeft: '6%',
        marginTop: '6%',
    },
});