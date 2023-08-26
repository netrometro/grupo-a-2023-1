import { View, Text } from 'react-native';
import React from 'react';
import { cardStyle } from './Style';

interface CardInterface {
  label: string;
  content: string;
  width?: number;
}

export const Card = ({ label, content, width }: CardInterface) => {
  return (
    <View style={cardStyle.container}>
      <Text style={cardStyle.label}>{label}</Text>
      <View style={[cardStyle.contentView, { width: width }]}>
        <Text style={cardStyle.content}>{content}</Text>
      </View>
    </View>
  );
};
