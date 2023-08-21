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
      <Text>{name}</Text>
      <Text>{kwh}</Text>
      <View style={listStyle.iconsView}>
        <FontAwesome5 name="pen" size={20} color="#2980B9" onPress={editFunc} />
        <Feather name="x" size={28} color="#EB4D4B" onPress={deleteFunc} />
      </View>
    </View>
  );
};
