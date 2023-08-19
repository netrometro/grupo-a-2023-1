import { View, Text } from 'react-native';
import React from 'react';
import { deleteStyle } from './Style';

interface ButtonInterface {
  name: string;
  deleteFunc(): void;
}

export const DeleteButton = () => {
  return (
    <View style={deleteStyle.container}>
      <Text style={deleteStyle.text}>Deletar</Text>
    </View>
  );
};
