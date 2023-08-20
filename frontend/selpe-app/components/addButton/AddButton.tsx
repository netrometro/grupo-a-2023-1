import { TouchableOpacity } from 'react-native';
import React from 'react';
import { addStyle } from './Style';

interface ButtonInterface {
  name: React.ReactNode;
  createFunc(): void;
}

export const AddButton = ({ name, createFunc }: ButtonInterface) => {
  return (
    <TouchableOpacity style={addStyle.container} onPress={createFunc}>
      {name}
    </TouchableOpacity>
  );
};
