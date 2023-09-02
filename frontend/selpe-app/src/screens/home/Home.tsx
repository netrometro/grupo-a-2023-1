import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  StatusBar
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackType } from '../../routes/stackRoutes';
import TopBar from '../../components/top-bar/TopBar';
import { AddButton } from '../../components/addButton/AddButton';
import { api } from '../../services/Api';
import { ConsumoList } from '../../components/consumolist/ConsumoList';
import { SafeAreaView } from 'react-native-safe-area-context';
import { consumoStyle } from './style';
import { useRoute } from '@react-navigation/native';

import { Ionicons } from '@expo/vector-icons';
import ModalTips from '../../components/modal/Modal';
import { DeleteButton } from '../../components/deleteButton/DeleteButton';
import { Card } from '../../components/card/Card';
import moment from 'moment';
import { MaterialIcons } from '@expo/vector-icons';

export const Home = () => {
  const navigation = useNavigation<StackType>();
  const [consumoList, setConsumoList] = useState<Array<ConsumoListInterface>>([]);
  const [registerOpen, setRegisterOpen] = useState<boolean>(false);
  const [seeOpen, setSeeOpen] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [date, setDate] = useState<Date>(new Date('2013-02-14T13:15:03-08:00'));
  const [kwh, setKwh] = useState<number>(0);
  const [dinheiro, setDinheiro] = useState<number>(0);
  const [consumoListEdit, setConsumoListEdit] = useState<ConsumoListInterface>();
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const [reloadEffect, setReloadEffect] = useState<number>(0);
  const [isId, setIsId] = useState<number>(0);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [openModal, setOpenModal] = useState<boolean>(false);

  const randomNumber = (min: number, max: number) => {
    const ramdom = Math.random();

    const number = Math.floor(min + ramdom * (max - min));
    return number;
  };

  const tipId = randomNumber(1, 10);

  const getTips = async () => {
    const tip = await api.get(`/api/dicas/${tipId}`);
    if (tip) {
      setTitle(tip.data.title);
      setDescription(tip.data.description);
    }
  };

  const getInfo = async () => {
    const user = await api.get(`/api/user/${userId}`);
    if (user) {
      setName(user.data.name);
      setEmail(user.data.email);
    }
  };

  useEffect(() => {
    getTips();
    getInfo();
  }, []);

  useEffect(() => {
    consumoListRequest(userId);
    setDinheiro(consumoListEdit?.dinheiro != null ? consumoListEdit?.dinheiro : 0);
    setKwh(consumoListEdit?.kwh != null ? consumoListEdit?.kwh : 0);
    setDate(consumoListEdit?.date != null ? consumoListEdit?.date : new Date());
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
    setDate(new Date(Date.now()));
    setKwh(0);
    setDinheiro(0);
  }

  function editRegister(id: number) {
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
    setDate(new Date(value));
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
    date: new Date(date)
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

  const emailData: EmailInterface = {
    subject: 'Resumo do consumo do dia: ',
    from: 'selpeappmobile@gmail.com',
    to: 'jamueltonangelim@gmail.com',
    html: '<h1>segundo teste</h1>'
  };

  const sendEmail = async () => {
    await api
      .post(`api/email`, emailData)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        console.log('email enviado');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  function openVisual(id: number) {
    setSeeOpen(!seeOpen);
    consumoListRequestById(id);
  }

  function goToCalculator() {
    navigation.navigate('Calculator');
  }

  return (
    <SafeAreaView style={consumoStyle.container}>
      <View style={consumoStyle.topBar}>
        {!registerOpen && !seeOpen && (
          <>
            <TopBar color="#FFEAA7" />
            <ModalTips
              title={title}
              description={description}
              id={tipId}
              icon={<Ionicons name="notifications-outline" size={26} color="#E17055" />}
            ></ModalTips>
          </>
        )}
      </View>
      <StatusBar barStyle="dark-content" />
      <View style={consumoStyle.titleDiv}>
        <View style={consumoStyle.modal}>
          <Text style={consumoStyle.modalTitle}>Bem-vindo ao</Text>
          <Text style={consumoStyle.modalTitle}>Selpe</Text>
          <Text style={consumoStyle.modalBody}>Consuma sua energia de forma mais eficiente</Text>
        </View>

        <View>
          <Text style={consumoStyle.meusConsumos}>Meus Consumos</Text>
        </View>
      </View>

      <View style={consumoStyle.buttons}>
        {!registerOpen && !seeOpen && (
          <AddButton
            name={<Ionicons name="md-add-outline" size={28} color="#2980B9" />}
            createFunc={openRegister}
            background={'#FFEAA7'}
          />
        )}
        {registerOpen && (
          <DeleteButton
            name={<Ionicons name="arrow-back-circle-outline" size={32} color="#FFEAA7" />}
            deleteFunc={openRegister}
          />
        )}
        {seeOpen && (
          <DeleteButton
            name={<Ionicons name="arrow-back-circle-outline" size={32} color="#FFEAA7" />}
            deleteFunc={() => setSeeOpen(!seeOpen)}
          />
        )}
      </View>
      {registerOpen && (
        <TouchableWithoutFeedback style={consumoStyle.modals}>
          <View style={consumoStyle.registerScreen}>
            <Text style={consumoStyle.registerTitle}>
              {isEdit == false ? 'Adicionar' : 'Editar'}
            </Text>

            <TextInput
              style={consumoStyle.registerInput}
              placeholder={`Data: ${new Date(Date.now())}`}
              onChangeText={(e) => handleChangeDate(e)}
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

      {seeOpen && (
        <TouchableWithoutFeedback style={consumoStyle.modals}>
          <View style={consumoStyle.registerScreen}>
            {consumoListEdit && (
              <Text style={consumoStyle.registerTitle}>Consumo - {consumoListEdit.id}</Text>
            )}

            {consumoListEdit && (
              <View style={consumoStyle.seeCard}>
                <Card
                  label={'Data'}
                  name={moment(consumoListEdit?.date.toString()).format('DD/MM/YYYY')}
                  width={100}
                />
                <Card
                  label={'Maior consumo'}
                  name={consumoListEdit.consumos
                    ?.reduce((max, consumo) => Math.max(max, consumo.eletroId), 0)
                    .toString()}
                  kwh={`${consumoListEdit.consumos
                    ?.reduce((max, consumo) => Math.max(max, consumo.kwh), 0)
                    .toString()} kwh`}
                  cash={`R$ ${consumoListEdit.consumos
                    ?.reduce((max, consumo) => Math.max(max, consumo.dinheiro), 0)
                    .toString()}`}
                />
                <Card
                  label={'Menor consumo'}
                  name={consumoListEdit.consumos
                    ?.reduce((min, consumo) => Math.min(min, consumo.eletroId), Infinity)
                    .toString()}
                  kwh={`${consumoListEdit.consumos
                    ?.reduce((min, consumo) => Math.min(min, consumo.kwh), Infinity)
                    .toString()} kwh`}
                  cash={`R$ ${consumoListEdit.consumos
                    ?.reduce((min, consumo) => Math.min(min, consumo.dinheiro), Infinity)
                    .toString()}`}
                />
                <View style={consumoStyle.seeCardTotal}>
                  <Card label={'Total kwh'} name={consumoListEdit.kwh.toString()} width={100} />
                  <Card
                    label={'Total Gasto'}
                    name={consumoListEdit.dinheiro.toString()}
                    width={100}
                  />
                </View>
                <View style={consumoStyle.mailView}>
                  <ModalTips
                    title={'Deseja mandar o email'}
                    description={'Enviar consumo para email?'}
                    id={0}
                    icon={
                      <MaterialIcons
                        name="attach-email"
                        size={36}
                        color="#2980B9"
                        //onPress={sendEmail}
                      />
                    }
                  />
                </View>
              </View>
            )}
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
                seeConsume={() => openVisual(item.id !== undefined ? item.id : 0)}
              />
            ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
