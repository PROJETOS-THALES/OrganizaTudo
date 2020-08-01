import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

export default class App extends Component {

  render() {
    return (

      <View style={styles.inicio}>

        <View style={styles.inputs}>
            <Text>Login</Text>
        </View>

        <View style={styles.botoes}>

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
  botoes: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  texto: {
    color: '#FFF'
  }
});