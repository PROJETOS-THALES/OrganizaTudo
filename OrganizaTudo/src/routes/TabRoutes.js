import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Notas from '../paginas/Notas';
import Lembretes from '../paginas/Lembretes';
import Configurações from '../paginas/Configurações';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function App() {
    return (

        <Tab.Navigator >
            <Tab.Screen name="Notas" component={Notas} />
            <Tab.Screen name="Lembretes" component={Lembretes} />
            <Tab.Screen name="Configurações" component={Configurações} />
        </Tab.Navigator>
    );
}