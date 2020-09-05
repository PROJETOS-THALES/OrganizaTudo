import React, { Component } from 'react';
import { Keyboard } from 'react-native';
import MyButton from '../../componentes/botao-padrao';
import MyInput from '../../componentes/campo-padrao';
import MyPasswordInput from '../../componentes/campo-senha';

import {
  StyleSheet,
  View,
  Text,
  Alert,
} from 'react-native';

export default function App({ navigation }) {

  var Apelido = '';
  var Senha = '';

  function Login() {

    fetch('https://webhooks.mongodb-realm.com/api/client/v2.0/app/organiza-tudo-luhho/service/API/incoming_webhook/Login', {

      method: 'POST',
      body: JSON.stringify({
        apelido: arguments[0],
        senha: arguments[1],
      })

    }).then((response) => response.json()).
      then((responseJson) => {

        if (responseJson == '500') {
          Alert.alert('Erro!', 'Obtivemos um problema ao buscar o Usuário, por favor tente novamente...', null);
        } else if (responseJson == '404') {
          Alert.alert('Erro!', 'Usuário "' + arguments[0] + '" não encontrado!', null);
        } else {
          // responseJson.$oid - id
          Alert.alert('Sucesso!', 'Bem Vindo ' + arguments[0] + '!', null);
          Keyboard.dismiss();
          navigation.navigate('Inicio');
        }

      });

  }

  return (
    <View>

      <View style={styles.Header}>
        <Text style={styles.Titulo}>ORGANIZA TUDO {Apelido}</Text>
      </View>

      <View style={styles.Body}>
        <MyInput placeholder={'Apelido'} onChangeText={(val) => this.Apelido = val} />
        <MyPasswordInput onChangeText={(val) => this.Senha = val} />
      </View>

      <View style={styles.Footer}>
        <MyButton text="Acessar"
          onPress={() => {
            if (this.Apelido != "" && this.Apelido != undefined && this.Senha != "" && this.Senha != undefined) {
              Login(this.Apelido, this.Senha);
            } else {
              Alert.alert('Erro!', 'Preencha todos os campos!!!', null);
            }
          }}
        />
      </View>

      <View style={styles.Links}>
        <Text style={styles.Link} onPress={() => { navigation.navigate('CriarConta') }}>Criar uma Conta</Text>
        <Text style={styles.Link} onPress={() => { navigation.navigate('RecuperarSenha') }}>Esqueci minha senha</Text>
      </View>

    </View>
  );

}

const styles = StyleSheet.create({
  Titulo: {
    fontSize: 30
  },
  Texto: {
    color: '#FFF'
  },
  Link: {
    alignItems: 'center',
    color: '#35C0ED',
    fontSize: 17,
    marginTop: 10,
    marginBottom: 10
  },
  Header: {
    alignItems: 'center',
    marginTop: 35,
    marginBottom: 30
  },
  Body: {
    alignItems: 'center',
    marginRight: 25,
    marginLeft: 25
  },
  Footer: {
    alignItems: 'center',
    marginRight: 25,
    marginLeft: 25,
    marginTop: 15
  },
  Links: {
    alignItems: 'center',
    marginTop: 20
  }
});