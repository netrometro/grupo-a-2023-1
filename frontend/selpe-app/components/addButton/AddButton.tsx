import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { addStyle } from './Style';
import { Ionicons } from '@expo/vector-icons';

interface ButtonInterface {
  name: string;
  createFunc(): void;
}

export const AddButton = () => {
  return (
    <TouchableOpacity style={addStyle.container}>
      <Ionicons name="md-add-outline" size={28} color="#2980B9" />
    </TouchableOpacity>
  );
};
