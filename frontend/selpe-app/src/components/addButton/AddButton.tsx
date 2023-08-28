import { TouchableOpacity } from 'react-native';
import React from 'react';
import { addStyle } from './Style';

interface ButtonInterface {
  name: React.ReactNode;
  createFunc(): void;
  background: string;
}

export const AddButton = ({ name, createFunc, background }: ButtonInterface) => {
  return (
    <TouchableOpacity
      style={[addStyle.container, { backgroundColor: background }]}
      onPress={createFunc}
    >
      {name}
    </TouchableOpacity>
  );
};
