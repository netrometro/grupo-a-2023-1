import { View, Text, Button } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../routes/stack';
import { TabTypes } from '../../routes/tab';

export const Home = () => {
  const navigation = useNavigation<TabTypes>();
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="outra tela"
        onPress={() => {
          navigation.navigate('Eletro');
        }}
      />
    </View>
  );
};
