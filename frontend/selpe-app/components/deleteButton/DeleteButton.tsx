import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { deleteStyle } from './Style';

interface ButtonInterface {
  name: string;
  deleteFunc(): void;
}

export const DeleteButton = () => {
  return (
    <TouchableOpacity style={deleteStyle.container}>
      <Text style={deleteStyle.text}>Deletar</Text>
    </TouchableOpacity>
  );
};
