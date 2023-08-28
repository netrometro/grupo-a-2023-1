import { View, Text } from 'react-native';
import React from 'react';
import { cardStyle } from './Style';

interface CardInterface {
  label: string;
  cash?: string;
  name?: string;
  kwh?: string;
  width?: number;
}

export const Card = ({ label, name, cash, kwh, width }: CardInterface) => {
  return (
    <View style={cardStyle.container}>
      <Text style={cardStyle.label}>{label}</Text>
      <View style={[cardStyle.contentView, { width: width }]}>
        <Text style={cardStyle.content}>{name}</Text>
        <Text style={cardStyle.content}>{cash}</Text>
        <Text style={cardStyle.content}>{kwh}</Text>
      </View>
    </View>
  );
};
