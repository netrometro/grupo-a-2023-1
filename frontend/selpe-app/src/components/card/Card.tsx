import { View, Text } from 'react-native';
import React from 'react';

interface CardInterface {
  label: string;
  content: string;
  width: number | string;
}

export const Card = ({ label, content }: CardInterface) => {
  return (
    <View>
      <Text>{label}</Text>
      <View>
        <Text>{content}</Text>
      </View>
    </View>
  );
};
