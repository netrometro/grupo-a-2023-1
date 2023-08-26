import { View, Text } from 'react-native';
import React from 'react';
import { infoStyle } from './Style';

export const InfoListCard = () => {
  return (
    <View style={infoStyle.container}>
      <Text style={infoStyle.text}>Editar</Text>
      <Text style={infoStyle.text}>Eletrodomestico</Text>
      <Text style={infoStyle.text}>Kwh</Text>
      <Text style={infoStyle.text}>Deletar</Text>
    </View>
  );
};
