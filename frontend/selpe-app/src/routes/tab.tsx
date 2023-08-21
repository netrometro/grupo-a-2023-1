import * as React from 'react';
import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { Home } from '../screens/home/Home';
import { Eletro } from '../screens/eletro/Eletro';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProfilePage from '../screens/profile/profilePage';
import { useRoute } from '@react-navigation/core';

const Tab = createBottomTabNavigator();

type StackNavigation = {
  Home: undefined;
  Eletro: undefined;
  Profile: undefined;
};

export type TabTypes = BottomTabNavigationProp<StackNavigation>;

export function TabComponent() {
  const routes = useRoute();
  const id = Object(routes.params).id;
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#F1C40F',
        headerShown: false
      }}
    >
      <Tab.Screen
        name="Eletro"
        component={Eletro}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cog-outline" color={color} size={size} />
          )
        }}
        initialParams={{ id: id }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home-lightbulb-outline" color={color} size={size} />
          )
        }}
        initialParams={{ id: id }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfilePage}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-box" color={color} size={size} />
          )
        }}
        initialParams={{ id: id }}
      />
    </Tab.Navigator>
  );
}
