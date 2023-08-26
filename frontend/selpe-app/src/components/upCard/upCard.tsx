import { View, Text } from 'react-native';
import React from 'react';
import { upCardStyle } from './style';

export const upCard = (children: React.ReactNode) => {
  return <View style={upCardStyle.container}>{children}</View>;
};
