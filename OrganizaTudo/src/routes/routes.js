import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import {
    View
} from 'react-native';

const Stack = createStackNavigator();

import Login from '../paginas/Login';
import Inicio from '../paginas/Inicio';

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
                    }} />

                <Stack.Screen name="Inicio" component={Inicio} options={{
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        alignSelf: 'center'
                    },
                    headerShown: true,
                    title: 'SUA ORGANIZAÇÃO:',
                    headerLeft: () => (
                        <View />
                    ), headerRight: () => (
                        <View />
                    )
                }} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}