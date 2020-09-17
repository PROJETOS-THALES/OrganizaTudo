import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import MyButton from '../../componentes/botao-padrao';
import MyInput from '../../componentes/campo-padrao';
import MyPasswordInput from '../../componentes/campo-senha';
import {
  StyleSheet, View, Text, Alert, Keyboard,
} from 'react-native';

export default class App extends Component {

  async componentDidMount() {
    var USERLOGGED = await AsyncStorage.getItem('USERLOGGED');
    if (USERLOGGED != null) {
      this.props.navigation.navigate('Inicio', { screen: 'Notas' });
    }
  }

  render() {

    var Apelido = '';
    var Senha = '';

    GravarDados = async (ObjectID, apelido, senha) => {
      try {
        AsyncStorage.setItem('USERLOGGED', ObjectID);
        AsyncStorage.setItem('USERLOGIN', apelido);
        AsyncStorage.setItem('USERSECURITYCODE', senha);
      }
      catch (e) {
        Alert.alert('Erro!', e, null);
      }
    }

    return (

      < View >

        <View style={styles.Header}>
          <Text style={styles.Titulo}>ORGANIZATUDO {Apelido}</Text>
        </View>

        <View style={styles.Body}>
          <MyInput focusable={true} placeholder={'Apelido'} onChangeText={(val) => this.Apelido = val} />
          <MyPasswordInput focusable={true} onChangeText={(val) => this.Senha = val} />
        </View>

        <View style={styles.Footer}>
          <MyButton text="Acessar"
            onPress={() => {
              if (this.Apelido != "" && this.Apelido != undefined && this.Senha != "" && this.Senha != undefined) {

                fetch('https://webhooks.mongodb-realm.com/api/client/v2.0/app/organiza-tudo-luhho/service/API/incoming_webhook/Login', {
                  method: 'POST',
                  body: JSON.stringify({
                    apelido: this.Apelido,
                    senha: this.Senha,
                  })
                }).then((response) => response.json()).
                  then((responseJson) => {
                    if (responseJson == '500') {
                      Alert.alert('Erro!', 'Obtivemos um problema ao buscar o Usuário, por favor tente novamente...', null);
                    }
                    else if (responseJson == '404') {
                      Alert.alert('Erro!', 'Usuário "' + this.Apelido + '" não encontrado!', null);
                    }
                    else {
                      // responseJson.$oid;
                      GravarDados(responseJson.$oid, this.Apelido, this.Senha);
                      Keyboard.dismiss();
                      this.props.navigation.navigate('Inicio', { screen: 'Notas' });
                    }

                  });

              }
              else {
                Alert.alert('Erro!', 'Preencha todos os campos!!!', null);
              }
            }} />
        </View>

        <View style={styles.Links}>
          <Text style={styles.Link} onPress={() => { this.props.navigation.navigate('CriarConta'); }}>Criar uma Conta</Text>
          <Text style={styles.Link} onPress={() => { this.props.navigation.navigate('RecuperarSenha'); }}>Esqueci minha senha</Text>
        </View>

      </View >
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