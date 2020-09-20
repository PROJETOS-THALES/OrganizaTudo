import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, View, TextInput } from 'react-native';

export default function App({ navigation }) {

    state = {
        lembretes: []
    }

    const buscarLembretes = async () => {

    }

    return (
        <View>

            <View style={styles.ContainerOpcoes}>
                <TextInput placeholder={'Buscar Lembrete'} style={styles.txtBuscarLembrete}></TextInput>
                <Icon style={styles.btnCriarLembrete} name={"plus-circle"} size={60} color={'#35C0ED'} />
            </View>

        </View>
    );

}

const styles = StyleSheet.create({
    ContainerOpcoes: {
        flexDirection: 'row'
    },
    txtBuscarLembrete: {
        flex: 1,
        margin: 15,
        marginBottom: 10,
        padding: 10,
        borderWidth: 0.3,
        borderRadius: 5,
    },
    btnCriarLembrete: {
        margin: 10,
        marginLeft: 0
    }
});