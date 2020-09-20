import React, { useState, useEffect, Component } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App({ route, navigation }) {

    const { routesTitulo } = route.params;
    const { routesNota } = route.params;

    const [titulo, setTitulo] = useState(JSON.stringify(routesTitulo));
    const [nota, setNota] = useState(JSON.stringify(routesNota));

    return (
        <View>

            <TextInput style={styles.Titulo} placeholder={'Título'}
                onChangeText={(value) => {
                    setTitulo(value);
                }}
            > {JSON.stringify(routesTitulo)} </TextInput>

            <TextInput style={styles.Nota} multiline={true}
                onChangeText={(value) => {
                    setNota(value);
                }}
            > {JSON.stringify(routesNota)} </TextInput>

            <View>
                <Icon style={styles.floatingSalvar} name={'save'} size={60} color={'#35C0ED'}
                    onPress={() => {

                        // Salvar Nota
                        if (this.state.Titulo == '' || this.state.Nota == '') {
                            alert('Preencha todos os campos!');
                        }
                        else {
                            alert('Título: ' + this.state.Titulo + ' | Nota: ' + this.state.Nota);
                        }

                    }}
                />
            </View>

            <View>
                <Icon style={styles.floatingDeletar} name={'trash'} size={60} color={'#ed5135'}
                    onPress={() => {

                        // Deletar Nota
                        this.setState({ Titulo: '' });
                        this.setState({ Nota: '' });

                    }}
                />
            </View>

        </View>
    );
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
        borderWidth: 0.4,
        borderRadius: 2,
        fontSize: 15,
        maxHeight: '80%'
    },
    floatingSalvar: {
        position: 'absolute',
        top: 5,
        left: 15,
    },
    floatingDeletar: {
        position: 'absolute',
        top: 5,
        left: 15 + 65,
    }
});