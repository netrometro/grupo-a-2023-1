import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { Home } from '../screens/home/Home';
import { Eletro } from '../screens/eletro/Eletro';
import { Perfil } from '../screens/perfil/perfil';

const Tab = createBottomTabNavigator();

type StackNavigation = {
  Home: undefined;
  Eletro: undefined;
  Perfil: undefined;
};

export type TabTypes = BottomTabNavigationProp<StackNavigation>;

export function TabComponent() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Eletro" component={Eletro} />
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Perfil" component={Perfil} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
