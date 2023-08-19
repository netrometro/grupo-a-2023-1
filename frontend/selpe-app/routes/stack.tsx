import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/home/Home';
import { Eletro } from '../screens/eletro/Eletro';

const Stack = createStackNavigator();

export function StackComponent() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Eletro" component={Eletro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
