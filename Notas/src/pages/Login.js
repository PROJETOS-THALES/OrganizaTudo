import React, { Component } from 'react';
import { Keyboard } from 'react-native';
import MyButton from '../components/button';
import MyInput from '../components/input';
import MyPasswordInput from '../components/password-input';

import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

export default class App extends Component {
  render() {
    var Apelido = '';
    var Senha = '';
    return (
      <View>

        <View style={styles.Header}>
          <Text style={styles.Titulo}>ORGANIZA.TUDO {Apelido}</Text>
        </View>

        <View style={styles.Body}>
          <MyInput placeholder={'Apelido'} onChangeText={(val) => this.Apelido = val} />
          <MyPasswordInput onChangeText={(val) => this.Senha = val} />
        </View>

        <View style={styles.Footer}>
          <MyButton text="Acessar"
            onPress={
              () => {
                if (
                  this.Apelido != "" && this.Apelido != undefined &&
                  this.Senha != "" && this.Senha != undefined) {
                  Keyboard.dismiss();
                  alert('Bem Vindo ' + this.Apelido + '!!!');
                  this.props.navigation.push('Main');
                } else {
                  alert('Preencha todos os campos!!!');
                }
              }}
          />
        </View>

        <View style={styles.Links}>
          <Text style={styles.Link}>Criar uma Conta</Text>
          <Text style={styles.Link}>Esqueci minha senha</Text>
        </View>

      </View>
    );
  }

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
    marginTop: 50,
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