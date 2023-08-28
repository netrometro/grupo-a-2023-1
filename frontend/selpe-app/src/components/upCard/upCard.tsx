import { View, Text } from 'react-native';
import React from 'react';
import { upCardStyle } from './style';

export const UpCard = (children: any) => {
  return <View style={upCardStyle.container}>{children}</View>;
};
