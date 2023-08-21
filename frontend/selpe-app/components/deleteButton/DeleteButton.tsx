import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { deleteStyle } from './Style';

interface ButtonInterface {
  name: React.ReactNode;
  deleteFunc(): void;
}

export function DeleteButton({ name, deleteFunc }: ButtonInterface) {
  return (
    <TouchableOpacity style={deleteStyle.container} onPress={deleteFunc}>
      <Text style={deleteStyle.text}>{name}</Text>
    </TouchableOpacity>
  );
}
