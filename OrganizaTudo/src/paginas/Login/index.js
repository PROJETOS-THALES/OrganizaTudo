import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Alert, Keyboard, } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import MyButton from '../../componentes/botao-padrao';
import MyInput from '../../componentes/campo-padrao';
import MyPasswordInput from '../../componentes/campo-senha';

export default function App({ navigation }) {

  const [apelido, setApelido] = useState('');
  const [senha, setSenha] = useState('');

  useEffect(() => {
    VerificarDados();
  }, []);

  const VerificarDados = async () => {
    try {
      var USERLOGGED = await AsyncStorage.getItem('USERLOGGED');
      if (USERLOGGED != null) {
        navigation.navigate('Inicio', { screen: 'Notas' });
      }
    }
    catch (e) {
      Alert.alert('Erro!', e, null);
    }
  }

  const GravarDados = async (ObjectID, Apelido, Senha) => {
    try {
      AsyncStorage.setItem('USERLOGGED', ObjectID);
      AsyncStorage.setItem('USERLOGIN', Apelido);
      AsyncStorage.setItem('USERSECURITYCODE', Senha);
    }
    catch (e) {
      Alert.alert('Erro!', e, null);
    }
  }

  return (
    < View >

      <View style={styles.Header}>
        <Text style={styles.Titulo}>ORGANIZATUDO</Text>
      </View>

      <View style={styles.Body}>
        <MyInput focusable={true} placeholder={'Apelido'} onChangeText={(value) => setApelido(value)} />
        <MyPasswordInput focusable={true} onChangeText={(value) => setSenha(value)} />
      </View>

      <View style={styles.Footer}>
        <MyButton text="Acessar"
          onPress={() => {
            if (apelido != '' && senha != '') {

              fetch('https://webhooks.mongodb-realm.com/api/client/v2.0/app/organiza-tudo-luhho/service/API/incoming_webhook/Login',
                {
                  method: 'POST',
                  body: JSON.stringify({
                    apelido: apelido,
                    senha: senha,
                  })
                })
                .then((response) => response.json())
                .then(
                  (responseJson) => {
                    if (responseJson == '500') {
                      Alert.alert('Erro!', 'Obtivemos um problema ao buscar o Usuário, por favor tente novamente...', null);
                    }
                    else if (responseJson == '404') {
                      Alert.alert('Erro!', 'Usuário "' + apelido + '" não encontrado!', null);
                    }
                    else {
                      // responseJson.$oid;
                      GravarDados(responseJson.$oid, apelido, senha);
                      Keyboard.dismiss();
                      navigation.navigate('Inicio', { screen: 'Notas' });
                    }

                  }
                );

            }
            else {
              Alert.alert('Erro!', 'Preencha todos os campos!!!', null);
            }
          }} />
      </View>

      <View style={styles.Links}>
        <Text style={styles.Link} onPress={() => { navigation.navigate('CriarConta'); }}>Criar uma Conta</Text>
        {/* <Text style={styles.Link} onPress={() => { navigation.navigate('RecuperarSenha'); }}>Esqueci minha senha</Text> */}
      </View>

    </View >
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