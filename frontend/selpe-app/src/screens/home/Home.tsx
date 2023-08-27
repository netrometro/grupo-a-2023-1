import {
  View,
  Text,
  Button,
  ScrollView,
  Keyboard,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  StatusBar
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TabTypes } from '../../routes/tab';
import TopBar from '../../components/top-bar/TopBar';
import { AddButton } from '../../components/addButton/AddButton';
import { api } from '../../services/Api';
import { ConsumoList } from '../../components/consumolist/ConsumoList';
import { SafeAreaView } from 'react-native-safe-area-context';
import { consumoStyle } from './style';
import { useRoute } from '@react-navigation/native';
import { styles } from '../register/style';
import { Ionicons } from '@expo/vector-icons';
import ModalTips from '../../components/modal/Modal';
import { DeleteButton } from '../../components/deleteButton/DeleteButton';
import { Feather } from '@expo/vector-icons';
import { InfoListCard } from '../../components/infoListCard/InfoListCard';
// import DateTimePicker from '@react-native-community/datetimepicker';

export const Home = () => {
  const navigation = useNavigation<TabTypes>();
  const [consumoList, setConsumoList] = useState<Array<ConsumoListInterface>>([]);
  const [registerOpen, setRegisterOpen] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [date, setDate] = useState<Date>(new Date('2013-02-14T13:15:03-08:00'));
  const [kwh, setKwh] = useState<number>(0);
  const [dinheiro, setDinheiro] = useState<number>(0);
  const [consumoListEdit, setConsumoListEdit] = useState<ConsumoListInterface>();

  const [reloadEffect, setReloadEffect] = useState<number>(0);
  const [isId, setIsId] = useState<number>(0);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const randomNumber = (min: number, max: number) => {
    const ramdom = Math.random();

    const number = Math.floor(min + ramdom * (max - min));
    console.log('this:' + number);
    return number;
  };

  const tipId = randomNumber(1, 10);

  const getTips = async () => {
    const tip = await api.get(`/api/dicas/${tipId}`);
    if (tip) {
      console.log(tip);
      setTitle(tip.data.title);
      setDescription(tip.data.description);
    }
  };

  useEffect(() => {
    getTips();
  }, []);

  useEffect(() => {
    consumoListRequest(userId);
    setDinheiro(consumoListEdit?.dinheiro != null ? consumoListEdit?.dinheiro : 0);
    setKwh(consumoListEdit?.kwh != null ? consumoListEdit?.kwh : 0);
    setDate(
      consumoListEdit?.date != null ? consumoListEdit?.date : new Date('2013-02-14T13:15:03-08:00')
    );
  }, [reloadEffect]);

  const route = useRoute();
  const userId = Object(route.params).id;

  const consumoListRequest = async (id: number) => {
    await api
      .get(`api/consumo/consumos`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setConsumoList(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const consumoListRequestById = async (id: number) => {
    await api
      .get(`api/consumo/${id}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        reloadPag();
        setConsumoListEdit(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  function openRegister() {
    setIsEdit(false);
    setRegisterOpen(!registerOpen);
    setDate(new Date('2013-02-14T13:15:03-08:00'));
    setKwh(0);
    setDinheiro(0);
  }

  function editRegister(id: number) {
    // abre o form de editar o eletro
    setIsEdit(true);
    setRegisterOpen(!registerOpen);
    if (id !== undefined) {
      setIsId(id);
      consumoListRequestById(id);
    }
  }

  function reloadPag() {
    setReloadEffect((prev) => prev + 1);
  }

  const handleChangeDate = (value: string) => {
    setDate(new Date('2013-02-14T13:15:03-08:00'));
  };

  const handleChangeKwh = (value: string) => {
    setKwh(parseInt(value));
  };

  const handleChangeDinheiro = (value: string) => {
    setDinheiro(parseInt(value));
  };

  const data: ConsumoListInterface = {
    userId: userId,
    dinheiro: dinheiro,
    kwh: kwh,
    date: new Date('2013-02-14T13:15:03-08:00')
  };

  const consumoListCreate = async () => {
    await api
      .post('api/consumo', data)
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

  const consumoListPut = async (id: number) => {
    await api
      .put(`api/consumo/${id}`, data)
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

  const consumoListDelete = async () => {
    await api
      .delete('api/consumo')
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

  const consumoListDeleteById = async (id: number) => {
    await api
      .delete(`api/consumo/${id}`)
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

  return (
    <View style={consumoStyle.container}>
      <View style={consumoStyle.topBar}>
        <TopBar color="#FFEAA7" />
        <ModalTips title={title} description={description} id={tipId}></ModalTips>
      </View>
      <View style={consumoStyle.modal}>
        <Text style={consumoStyle.modalTitle}>Bem-vindo ao</Text>
        <Text style={consumoStyle.modalTitle}>Selpe</Text>
        <Text style={consumoStyle.modalBody}>Consuma sua energia de forma mais eficiente</Text>
      </View>

      <View>
        <Text style={consumoStyle.meusConsumos}>Meus Consumos</Text>
      </View>

      <View style={consumoStyle.buttons}>
        {!registerOpen && (
          <>
            <AddButton
              name={<Ionicons name="information-outline" size={24} color="#FFEAA7" />}
              createFunc={() => {}}
            />

            <AddButton
              name={<Ionicons name="md-add-outline" size={28} color="#FFEAA7" />}
              createFunc={openRegister}
            />
          </>
        )}

        <DeleteButton
          name={
            registerOpen === false ? (
              <Feather name="trash" size={24} color="#FFEAA7" />
            ) : (
              <Ionicons name="arrow-back-circle-outline" size={32} color="#FFEAA7" />
            )
          }
          deleteFunc={registerOpen === false ? consumoListDelete : openRegister}
        />
      </View>

      {/* <View style={consumoStyle.infoCard}>
          <InfoListCard />
        </View> */}

      {registerOpen && (
        <TouchableWithoutFeedback>
          <View style={consumoStyle.registerScreen}>
            <Text style={consumoStyle.registerTitle}>
              {isEdit == false ? 'Adicionar' : 'Editar'}
            </Text>

            <TextInput
              style={consumoStyle.registerInput}
              placeholder="Data: 2013-02-14T13:15:03-08:00"
              onChangeText={(e) => handleChangeDate(e)}
              // value={String(date)}
            />

            <TextInput
              style={consumoStyle.registerInput}
              placeholder="Dinheiro: 245.00"
              onChangeText={(e) => handleChangeDinheiro(e)}
              // value={dinheiro.toString()}
            />

            <TextInput
              style={consumoStyle.registerInput}
              placeholder="Kwh: 128"
              onChangeText={(e) => handleChangeKwh(e)}
              // value={kwh.toString()}
            />

            <TouchableOpacity
              style={consumoStyle.registerButton}
              onPress={isEdit === false ? consumoListCreate : () => consumoListPut(isId)}
            >
              <Text style={consumoStyle.registerButtonText}>
                {isEdit == false ? 'Cadastrar' : 'Editar'}
              </Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      )}
      <View style={consumoStyle.list}>
        <ScrollView>
          {consumoList &&
            consumoList.map((item) => (
              <ConsumoList
                date={item.date}
                kwh={item.kwh}
                dinheiro={item.dinheiro}
                editFunc={() => editRegister(item.id !== undefined ? item.id : 0)}
                deleteFunc={() => consumoListDeleteById(item.id !== undefined ? item.id : 0)}
              />
            ))}
        </ScrollView>
      </View>
    </View>
  );
};
