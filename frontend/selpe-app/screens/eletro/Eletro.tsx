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
  const [eletroName, setEletroName] = useState<string>('');
  const [eletroKwh, setEletroKwh] = useState<number>(0);

  useEffect(() => {
    eletroListRequest();
  }, []);

  const handleChangeName = (value: string) => {
    setEletroName(value);
  };

  const handleChangeKwh = (value: string) => {
    setEletroKwh(parseInt(value));
  };

  const eletroListRequest = async () => {
    await api
      .get('api/eletro')
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setEletroList(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const data: EletroListInterface = {
    nome: eletroName,
    kwh: eletroKwh
  };

  const eletroListCreate = async () => {
    await api
      .post('api/eletro', data)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        console.log('cadastrou');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const eletroListDelete = async () => {
    await api
      .delete('api/eletro')
      .then((res) => {
        console.log(res);
        console.log(res.data);
        console.log('deletou');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const eletroListPut = async (id: number) => {
    await api
      .post(`api/eletro/${id}`, data)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        console.log('cadastrou');
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
          <DeleteButton name="Deletar" deleteFunc={eletroListDelete} />
        </View>
        {registerOpen && (
          <TouchableWithoutFeedback>
            <View style={eletroStyle.registerScreen}>
              <Text style={eletroStyle.registerTitle}>Cadastro</Text>
              <TextInput
                style={eletroStyle.registerInput}
                placeholder="Eletrodomestico"
                onChangeText={(e) => handleChangeName(e)}
              />
              <TextInput
                style={eletroStyle.registerInput}
                placeholder="Kwh"
                onChangeText={(e) => handleChangeKwh(e)}
              />
              <TouchableOpacity style={eletroStyle.registerButton} onPress={eletroListCreate}>
                <Text style={eletroStyle.registerButtonText}>Cadastrar</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        )}
        <View style={eletroStyle.list}>
          {eletroList &&
            eletroList.map((item) => (
              <EletroList
                name={item.nome}
                kwh={item.kwh}
                editFunc={function (): void {
                  throw new Error('Function not implemented.');
                }}
                deleteFunc={function (): void {
                  throw new Error('Function not implemented.');
                }}
              />
            ))}
        </View>
      </View>
    </SafeAreaView>
  );
}
