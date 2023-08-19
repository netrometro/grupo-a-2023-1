import { View, Text, SafeAreaView, StatusBar } from 'react-native';
import React, { useEffect, useState } from 'react';
import { eletroStyle } from './style';
import { EletroList } from '../../components/eletrolist/EletroList';
import { DeleteButton } from '../../components/deleteButton/DeleteButton';
import { AddButton } from '../../components/addButton/AddButton';
import { api } from '../../services/Api';
import axios from 'axios';

export function Eletro() {
  const [eletroList, setEletroList] = useState<Array<EletroListInterface>>([]);

  useEffect(() => {
    const eletroListRequest = async () => {
      await api
        .get('api/eletro')
        .then((res) => {
          console.log(res);
          console.log(res.data);
        })
        .catch((error) => {
          console.error(error);
        });
    };

    eletroListRequest();
  }, []);

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <View style={eletroStyle.container}>
        <View style={eletroStyle.titleDiv}>
          <Text style={eletroStyle.principalTitle}>Eletrodomesticos</Text>
        </View>
        <View style={eletroStyle.buttons}>
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
