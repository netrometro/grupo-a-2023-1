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
  seeConsume(): void;
}

export const ConsumoList = ({
  date,
  kwh,
  dinheiro,
  editFunc,
  deleteFunc,
  seeConsume
}: ConsumoListProps) => {
  return (
    <View style={listStyle.container}>
      <View style={listStyle.iconsView}>
        <FontAwesome5 name="pen" size={20} color="#FFEAA7" onPress={editFunc} />
      </View>
      <Text style={listStyle.itemsText}>{String(date)}</Text>
      <Text style={listStyle.itemsText}>{kwh}</Text>
      <Text style={listStyle.itemsText}>{dinheiro}</Text>
      <View style={listStyle.iconsView}>
        <Feather name="eye" size={22} color="#FFEAA7" onPress={seeConsume} />
        <Feather name="x" size={28} color="#EB4D4B" onPress={deleteFunc} />
      </View>
    </View>
  );
};
