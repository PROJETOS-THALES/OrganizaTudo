import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const EditarNota = ({ route, navigation }) => {

    const { titulo } = route.params;
    const { nota } = route.params;

    Component.state = {
        Titulo: JSON.stringify(titulo),
        Nota: JSON.stringify(nota)
    }

    return (
        <View>

            <TextInput style={styles.Titulo} placeholder={'Título'}
                onChangeText={(value) => {
                    // this.setState({ Titulo: value });
                }}
            > {JSON.stringify(titulo)} </TextInput>

            <TextInput style={styles.Nota} multiline={true}
                onChangeText={(value) => {
                    // this.setState({ Nota: value });
                }}
            > {JSON.stringify(nota)} </TextInput>

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

/*export default class App extends Component {

    state = {
        Titulo: '',
        Nota: ''
    }

    criarNota = async () => {

        if (this.state.Titulo == '' || this.state.Nota == '') {
            alert('Preencha todos os campos!');
        }
        else {
            alert('Título: ' + this.state.Titulo + ' | Nota: ' + this.state.Nota);
        }
    }

    resetarNota = async () => {

        this.setState({ Titulo: '' });
        this.setState({ Nota: '' });
    }

    deletarNota = async () => {

        this.setState({ Titulo: '' });
        this.setState({ Nota: '' });
    }

    render() {
        return (<View>

            <TextInput style={styles.Titulo} placeholder={'Título'}
                onChangeText={(value) => {
                    this.setState({ Titulo: value });
                }}
            />
            <TextInput style={styles.Nota} multiline={true}
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

            <View>
                <Icon style={styles.floatingDeletar} name={'trash'} size={60} color={'#ed5135'}
                    onPress={() => {
                        this.deletarNota();
                    }}
                />
            </View>

        </View>);
    }
}*/

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

export default EditarNota;