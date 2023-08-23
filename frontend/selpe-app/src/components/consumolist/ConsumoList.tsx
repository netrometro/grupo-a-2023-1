import { View, Text } from 'react-native';
import React from 'react';
import { listStyle } from './style';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

interface ConsumoListProps {
  date: Date;
  kwh: number;
  dinheiro: number;
  editFunc(): void;
  deleteFunc(): void;
}

export const ConsumoList = ({ date, kwh, dinheiro, editFunc, deleteFunc }: ConsumoListProps) => {
  return (
    <View style={listStyle.container}>
      <Text>{String(date)}</Text>
      <Text>{kwh}</Text>
      <Text>{dinheiro}</Text>
      <View style={listStyle.iconsView}>
        <FontAwesome5 name="pen" size={20} color="#2980B9" onPress={editFunc} />
        <Feather name="x" size={28} color="#EB4D4B" onPress={deleteFunc} />
      </View>
    </View>
  );
};
