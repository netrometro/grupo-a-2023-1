import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { Home } from '../src/screens/home/Home';
import { Eletro } from '../src/screens/eletro/Eletro';

const Stack = createStackNavigator();

type StackNavigation = {
  Home: undefined;
  Eletro: undefined;
};

export type StackTypes = StackNavigationProp<StackNavigation>;

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
