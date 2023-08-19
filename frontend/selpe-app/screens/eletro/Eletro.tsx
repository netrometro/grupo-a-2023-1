import { View, Text, SafeAreaView, StatusBar } from 'react-native';
import React from 'react';

export const Eletro = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <View>
        <View>
          <Text>Eletrodomesticos</Text>
        </View>
        <View>
          <Text>Adicionar</Text>
          <Text>Deletar tudo</Text>
        </View>
        <View>
          <Text>listar</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
