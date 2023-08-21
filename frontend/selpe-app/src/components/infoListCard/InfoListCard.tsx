import { View, Text } from 'react-native';
import React from 'react';
import { infoStyle } from './Style';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export const InfoListCard = () => {
  return (
    <View style={infoStyle.container}>
      <Text style={infoStyle.text}>Eletrodomestico</Text>
      <Text style={infoStyle.text}>Kwh</Text>
      <View style={infoStyle.iconsView}>
        <Text style={infoStyle.text}>Editar</Text>
        <Text style={infoStyle.text}>Deletar</Text>
      </View>
    </View>
  );
};
