import { View, Text, SafeAreaView, StatusBar } from 'react-native';
import React from 'react';
import { eletroStyle } from './style';
import { EletroList } from '../../components/eletrolist/EletroList';

export function Eletro() {
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <View style={eletroStyle.container}>
        <View>
          <Text>Eletrodomesticos</Text>
        </View>
        <View>
          <Text>Adicionar</Text>
          <Text>Deletar tudo</Text>
        </View>
        <View>
          <EletroList />
        </View>
      </View>
    </SafeAreaView>
  );
}
