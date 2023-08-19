import { View, Text, SafeAreaView, StatusBar } from 'react-native';
import React from 'react';
import { eletroStyle } from './style';
import { EletroList } from '../../components/eletrolist/EletroList';
import { DeleteButton } from '../../components/deleteButton/DeleteButton';
import { AddButton } from '../../components/addButton/AddButton';

export function Eletro() {
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <View style={eletroStyle.container}>
        <View>
          <Text>Eletrodomesticos</Text>
        </View>
        <View>
          <AddButton />
          <DeleteButton />
        </View>
        <View style={eletroStyle.list}>
          <EletroList />
        </View>
      </View>
    </SafeAreaView>
  );
}
