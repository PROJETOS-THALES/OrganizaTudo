import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { View } from 'react-native';

const Stack = createStackNavigator();

import Login from '../paginas/Login';
import CriarConta from '../paginas/CriarConta';
import RecuperarSenha from '../paginas/RecuperarSenha';
import Inicio from './TabRoutes';
import CriarNota from '../paginas/CriarNota';
import EditarNota from '../paginas/EditarNota';

export default function Routes({ navigation }) {
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
                            <View />
                        )
                    }}
                />

                <Stack.Screen name="CriarNota" component={CriarNota}
                    options={{
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            alignSelf: 'center'
                        },
                        headerShown: true,
                        title: 'CRIAR NOTA',
                        headerRight: () => (
                            <View />
                        )
                    }}
                />

                <Stack.Screen name="EditarNota" component={EditarNota}
                    options={{
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            alignSelf: 'center'
                        },
                        headerShown: true,
                        title: 'EDITAR NOTA',
                        headerRight: () => (
                            <View />
                        )
                    }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}