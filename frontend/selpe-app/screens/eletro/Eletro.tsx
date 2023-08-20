import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { eletroStyle } from './style';
import { EletroList } from '../../components/eletrolist/EletroList';
import { DeleteButton } from '../../components/deleteButton/DeleteButton';
import { AddButton } from '../../components/addButton/AddButton';
import { api } from '../../services/Api';
import axios from 'axios';

export function Eletro() {
  const [eletroList, setEletroList] = useState<Array<EletroListInterface>>([]);
  const [registerOpen, setRegisterOpen] = useState<boolean>(false);

  useEffect(() => {
    eletroListRequest();
  }, []);

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

  function closeKeyboard() {
    Keyboard.dismiss();
  }

  function openRegister() {
    setRegisterOpen(!registerOpen);
  }

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <View style={eletroStyle.container}>
        <View style={eletroStyle.titleDiv}>
          <Text style={eletroStyle.principalTitle}>Eletrodomesticos</Text>
        </View>

        <View style={eletroStyle.buttons}>
          <AddButton name={''} createFunc={openRegister} />
          <DeleteButton />
        </View>
        {!registerOpen && (
          <TouchableWithoutFeedback onPress={closeKeyboard}>
            <View style={eletroStyle.registerScreen}>
              <Text style={eletroStyle.registerTitle}>Cadastro</Text>
              <TextInput style={eletroStyle.registerInput} placeholder="Eletrodomestico" />
              <TextInput style={eletroStyle.registerInput} placeholder="Kwh" />
              <TouchableOpacity style={eletroStyle.registerButton}>
                <Text style={eletroStyle.registerButtonText}>Cadastrar</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        )}
        <View style={eletroStyle.list}>
          <EletroList />
        </View>
      </View>
    </SafeAreaView>
  );
}
