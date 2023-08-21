import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { eletroStyle } from './style';
import { EletroList } from '../../components/eletrolist/EletroList';
import { DeleteButton } from '../../components/deleteButton/DeleteButton';
import { AddButton } from '../../components/addButton/AddButton';
import { api } from '../../services/Api';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import axios from 'axios';
import { InfoListCard } from '../../components/infoListCard/InfoListCard';

export function Eletro() {
  const [eletroList, setEletroList] = useState<Array<EletroListInterface>>([]);
  const [registerOpen, setRegisterOpen] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isId, setIsId] = useState<number>(0);
  const [eletroName, setEletroName] = useState<string>('');
  const [eletroKwh, setEletroKwh] = useState<number>(0);
  const [eletroListEdit, setEletroListEdit] = useState<EletroListInterface>();
  const [reloadEffect, setReloadEffect] = useState<number>(0);

  useEffect(() => {
    eletroListRequest();
    setEletroName(eletroListEdit?.nome != null ? eletroListEdit?.nome : '');
    setEletroKwh(eletroListEdit?.kwh != null ? eletroListEdit?.kwh : 0);
  }, [reloadEffect]);

  const handleChangeName = (value: string) => {
    // pega os valores do input de nome
    setEletroName(value);
  };

  const handleChangeKwh = (value: string) => {
    //pega os valores do input de kwh
    setEletroKwh(parseInt(value));
  };

  const data: EletroListInterface = {
    // data dos inputs
    nome: eletroName,
    kwh: eletroKwh
  };

  const eletroListRequest = async () => {
    //lista todos os eletros
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

  const eletroListRequestById = async (id: number) => {
    // lista apenas um eletro
    await api
      .get(`api/eletro/${id}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        reloadPag();
        setEletroListEdit(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const eletroListCreate = async () => {
    // post do eletro
    await api
      .post('api/eletro', data)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        reloadPag();
        console.log('cadastrou');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const eletroListPut = async (id: number) => {
    // Put do eletro
    await api
      .put(`api/eletro/${id}`, data)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        console.log('editou');
        reloadPag();
        setRegisterOpen(!registerOpen);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const eletroListDelete = async () => {
    // delete de todos os eletros
    await api
      .delete('api/eletro')
      .then((res) => {
        console.log(res);
        console.log(res.data);
        reloadPag();
        console.log('deletou');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const eletroListDeleteById = async (id: number) => {
    // delete de um eletro
    await api
      .delete(`api/eletro/${id}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        console.log('deletou');
        reloadPag();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  function closeKeyboard() {
    // fecha o teclado
    Keyboard.dismiss();
  }

  function openRegister() {
    // abre o form de cadastro
    setIsEdit(false);
    setRegisterOpen(!registerOpen);
    setEletroName('');
    setEletroKwh(0);
  }

  function editRegister(id: number) {
    // abre o form de editar o eletro
    setIsEdit(true);
    setRegisterOpen(!registerOpen);
    if (id !== undefined) {
      setIsId(id);
      eletroListRequestById(id);
    }
  }

  function reloadPag() {
    // atualiza os dados
    setReloadEffect((prev) => prev + 1);
  }

  return (
    <SafeAreaView style={eletroStyle.container}>
      <StatusBar barStyle="dark-content" />

      <View style={eletroStyle.titleDiv}>
        {!registerOpen && (
          <Text style={eletroStyle.principalTitle}>
            Eletrodomesticos <FontAwesome name="plug" size={24} color="#F1C40F" />
          </Text>
        )}
      </View>

      <View style={eletroStyle.buttons}>
        {!registerOpen && (
          <>
            <AddButton
              name={<Ionicons name="information-outline" size={24} color="#2980B9" />}
              createFunc={() => {}}
            />
            <AddButton
              name={<Ionicons name="md-add-outline" size={28} color="#2980B9" />}
              createFunc={openRegister}
            />
          </>
        )}

        <DeleteButton
          name={
            registerOpen === false ? (
              <Feather name="trash" size={24} color="white" />
            ) : (
              <Ionicons name="arrow-back-circle-outline" size={32} color="white" />
            )
          }
          deleteFunc={registerOpen === false ? eletroListDelete : openRegister}
        />
      </View>

      <View style={eletroStyle.infoCard}>
        <InfoListCard />
      </View>

      {registerOpen && (
        <TouchableWithoutFeedback>
          <View style={eletroStyle.registerScreen}>
            <Text style={eletroStyle.registerTitle}>{isEdit == false ? 'Cadastro' : 'Editar'}</Text>
            <TextInput
              style={eletroStyle.registerInput}
              placeholder="Eletrodomestico"
              onChangeText={(e) => handleChangeName(e)}
              value={eletroName}
            />
            <TextInput
              style={eletroStyle.registerInput}
              placeholder="Kwh"
              onChangeText={(e) => handleChangeKwh(e)}
              value={eletroKwh.toString()}
            />
            <TouchableOpacity
              style={eletroStyle.registerButton}
              onPress={isEdit === false ? eletroListCreate : () => eletroListPut(isId)}
            >
              <Text style={eletroStyle.registerButtonText}>
                {isEdit == false ? 'Cadastrar' : 'Editar'}
              </Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      )}

      <View style={eletroStyle.list}>
        <ScrollView>
          {eletroList &&
            eletroList.map((item) => (
              <EletroList
                name={item.nome}
                kwh={item.kwh}
                editFunc={() => editRegister(item.id !== undefined ? item.id : 0)}
                deleteFunc={() => eletroListDeleteById(item.id !== undefined ? item.id : 0)}
              />
            ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
