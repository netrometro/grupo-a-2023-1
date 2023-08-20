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

  const eletroListRequestById = async (id: number) => {
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
        reloadPag();
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
        reloadPag();
        console.log('deletou');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const eletroListPut = async (id: number) => {
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

  const eletroListDeleteById = async (id: number) => {
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
    Keyboard.dismiss();
  }

  function openRegister() {
    setIsEdit(false);
    setRegisterOpen(!registerOpen);
    setEletroName('');
    setEletroKwh(0);
  }

  function editRegister(id: number) {
    setIsEdit(true);
    setRegisterOpen(!registerOpen);
    if (id !== undefined) {
      setIsId(id);
      eletroListRequestById(id);
    }
  }

  function reloadPag() {
    setReloadEffect((prev) => prev + 1);
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
              <Text style={eletroStyle.registerTitle}>
                {isEdit == false ? 'Cadastro' : 'Editar'}
              </Text>
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
          {eletroList &&
            eletroList.map((item) => (
              <EletroList
                name={item.nome}
                kwh={item.kwh}
                editFunc={() => editRegister(item.id !== undefined ? item.id : 0)}
                deleteFunc={() => eletroListDeleteById(item.id !== undefined ? item.id : 0)}
              />
            ))}
        </View>
      </View>
    </SafeAreaView>
  );
}
