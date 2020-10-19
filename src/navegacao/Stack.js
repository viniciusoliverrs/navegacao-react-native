import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TelaA from '../views/TelaA';
import TelaB from '../views/TelaB';
import TelaC from '../views/TelaC';
import PassoStack from '../components/PassoStack';

const Stack = createStackNavigator();

export default props => (
    <Stack.Navigator initialRouteName="TelaA" screenOptions={{ headerShown: true }}>
        <Stack.Screen name="TelaA" options={{ title: "TelaA" }} >
            {props => (
                <PassoStack {...props} avancar="TelaB" >
                    <TelaA {...props} />
                </PassoStack>
            )}
        </Stack.Screen>
        <Stack.Screen name="TelaB" options={{ title: "TelaB" }}>
            {props => (
                <PassoStack {...props} avancar="TelaC" voltar>
                    <TelaB {...props} />
                </PassoStack>
            )}
        </Stack.Screen>
        <Stack.Screen name="TelaC" options={{ title: "TelaC" }}>
            {props => (
                <PassoStack {...props} avancar="TelaC" voltar>
                    <TelaC {...props} />
                </PassoStack>
            )}
        </Stack.Screen>
    </Stack.Navigator >
)
