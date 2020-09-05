import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import {
    View,
    Text
} from 'react-native';

const Stack = createStackNavigator();

import Login from '../paginas/Login';
import CriarConta from '../paginas/CriarConta';
import RecuperarSenha from '../paginas/RecuperarSenha';
import Inicio from './TabRoutes';

export default function Routes() {
    return (
        <NavigationContainer>
            <StatusBar barStyle='light-content' backgroundColor='#35C0ED' />
            <Stack.Navigator

                screenOptions={
                    {
                        headerStyle: {
                            backgroundColor: '#35C0ED'
                        },
                        headerTintColor: '#FFF'
                    }
                }>

                <Stack.Screen name="Login" component={Login}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen name="CriarConta" component={CriarConta}
                    options={{
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            alignSelf: 'center'
                        },
                        headerShown: true,
                        title: 'CRIAR CONTA',
                        headerRight: () => (
                            <View />
                        )
                    }}
                />

                <Stack.Screen name="RecuperarSenha" component={RecuperarSenha}
                    options={{
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            alignSelf: 'center'
                        },
                        headerShown: true,
                        title: 'RECUPERAR SENHA',
                        headerRight: () => (
                            <View />
                        )
                    }}
                />

                <Stack.Screen name="Inicio" component={Inicio}
                    options={{
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            alignSelf: 'center'
                        },
                        headerShown: true,
                        title: 'SUA ORGANIZAÇÃO',
                        headerLeft: () => (
                            <View />
                        ), headerRight: () => (
                            <View>
                                <Text
                                    style={{
                                        margin: 25,
                                        color: '#FFF',
                                        fontSize: 17,
                                    }}
                                    onPress={() => {
                                        alert('Sair')
                                    }}
                                >Sair</Text>
                            </View>
                        )
                    }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}