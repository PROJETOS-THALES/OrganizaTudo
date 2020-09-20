import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Notas from '../paginas/Notas';
import Lembretes from '../paginas/Lembretes';
import Configurações from '../paginas/Configurações';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

export default function App() {
    return (

        <Tab.Navigator
            screenOptions={
                ({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Notas') {
                            iconName = focused ? 'sticky-note' : 'sticky-note';
                        } else if (route.name === 'Lembretes') {
                            iconName = focused ? 'check' : 'check';
                        } else if (route.name === 'Configurações') {
                            iconName = focused ? 'cog' : 'cog';
                        }

                        // You can return any component that you like here!
                        return <Icon name={iconName} size={size} color={color} />;
                    },
                })}
            tabBarOptions={{
                activeTintColor: '#35C0ED',
                inactiveTintColor: 'gray',
            }}
        >
            {/* <Tab.Screen name="Lembretes" component={Lembretes} /> */}
            <Tab.Screen name="Notas" component={Notas} />
            <Tab.Screen name="Configurações" component={Configurações} />
        </Tab.Navigator>
    );
}