import { View, Text } from 'react-native';
import React from 'react';
import { listStyle } from './Style';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export const EletroList = () => {
  return (
    <View style={listStyle.container}>
      <Text>ELetrodomestico</Text>
      <Text>kwh</Text>
      <View style={listStyle.iconsView}>
        <FontAwesome5 name="pen" size={20} color="#2980B9" />
        <Feather name="x" size={28} color="#EB4D4B" />
      </View>
    </View>
  );
};
