import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { Home } from '../screens/home/Home';
import { Eletro } from '../screens/eletro/Eletro';

const Tab = createBottomTabNavigator();

type StackNavigation = {
  Home: undefined;
  Eletro: undefined;
};

export type TabTypes = BottomTabNavigationProp<StackNavigation>;

export function TabComponent() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Eletro" component={Eletro} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
