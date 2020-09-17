import React from 'react';
import { View, Text } from 'react-native';

// import { Container } from './styles';

const EditarNota = ({ route, navigation }) => {
    const { titulo } = route.params;
    return (
        <View>
            <Text>Nota: {JSON.stringify(titulo)}</Text>
        </View>);
}

export default EditarNota;