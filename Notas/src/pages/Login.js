import React, { Component } from 'react';
import MyButton from '../components/button';

import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

export default class App extends Component {

  static navigationOptions = {
    title: "Login"
  };

  render() {
    return (

      <View style={styles.inicio}>

        <View style={styles.inputs}>

        </View>

        <View style={styles.botao}>
          
          <MyButton text="Acessar"

            onPress={
              () => {
                this.props.navigation.push('Main');
              }}

          />

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  inicio: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputs: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  botao: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },

  texto: {
    color: '#FFF'
  }

});