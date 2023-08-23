import { View, Text, Button, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../../routes/stack';
import { TabTypes } from '../../routes/tab';
import TopBar from '../../components/top-bar/TopBar';
import { AddButton } from '../../components/addButton/AddButton';
import { api } from '../../services/Api';
import { ConsumoList } from '../../components/consumolist/ConsumoList';
import { SafeAreaView } from 'react-native-safe-area-context';
import { consumoStyle } from './style';

export const Home = () => {
  const navigation = useNavigation<TabTypes>();
  const [consumoList, setConsumoList] = useState<Array<ConsumoListInterface>>([]);
  const consumoListRequest = async (id: number) => {
    await api
      .get(`api/consumo/consumos/${id}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setConsumoList(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <SafeAreaView>
      <View>
        <TopBar></TopBar>
        <View>
          <Text>Bem-vindo ao Selpe</Text>
          <Text>Consuma sua energia de forma mais eficiente</Text>
        </View>
        <View>Meus Consumos</View>
        <AddButton name="+" createFunc={() => navigation.navigate('Home')}></AddButton>
        <View style={consumoStyle.list}>
          <ScrollView>
            {consumoList &&
              consumoList.map((item) => (
                <ConsumoList
                  date={item.date}
                  kwh={item.kwh}
                  dinheiro={item.dinheiro}
                  // editFunc={() => editRegister(item.id !== undefined ? item.id : 0)}
                  // deleteFunc={() => consumoListDeleteById(item.id !== undefined ? item.id : 0)}
                />
              ))}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};
