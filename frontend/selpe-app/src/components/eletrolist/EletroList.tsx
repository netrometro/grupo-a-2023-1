import { View, Text } from 'react-native';
import React from 'react';
import { listStyle } from './Style';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

interface EletroListProps {
  name: string;
  kwh: number;
  editFunc(): void;
  deleteFunc(): void;
}

export const EletroList = ({ name, kwh, editFunc, deleteFunc }: EletroListProps) => {
  return (
    <View style={listStyle.container}>
      <FontAwesome5 name="pen" size={16} color="#FFEAA7" onPress={editFunc} />
      <Text style={listStyle.text}>{name}</Text>
      <Text style={listStyle.text}>{kwh}</Text>
      <Feather name="x" size={28} color="#E17055" onPress={deleteFunc} />
    </View>
  );
};
