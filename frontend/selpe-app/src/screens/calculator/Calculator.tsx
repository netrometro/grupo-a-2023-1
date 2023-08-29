import {
  Text,
  Keyboard,
  ScrollView,
  StatusBar,
  TextInput,
  View,
  TouchableOpacity
} from 'react-native';
import { styles } from './style';
import { SafeAreaView } from 'react-native-safe-area-context';
import TopBar from '../../components/top-bar/TopBar';
import { api } from '../../services/Api';
import { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { EletroListInterface } from '../eletro/types';
import { EletroList } from '../../components/eletrolist/EletroList';

export default function Calculator() {
  const route = useRoute();
  const [eletroList, setEletroList] = useState<Array<EletroListInterface>>([]);
  const [registerOpen, setRegisterOpen] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isId, setIsId] = useState<number>(0);
  const [eletroName, setEletroName] = useState<string>('');
  const [eletroKwh, setEletroKwh] = useState<number>(0);
  const [eletroListEdit, setEletroListEdit] = useState<EletroListInterface>();
  const [reloadEffect, setReloadEffect] = useState<number>(0);
  const [numOfHours, setNumOfHours] = useState<number>(0);
  const [totalToPay, setTotalToPay] = useState<number>(0);
  const userId = Object(route.params).id;

  const tarifa: number = 0.706;

  useEffect(() => {
    eletroListRequest(userId);
    setEletroName(eletroListEdit?.nome != null ? eletroListEdit?.nome : '');
    setEletroKwh(eletroListEdit?.kwh != null ? eletroListEdit?.kwh : 0);
  }, [reloadEffect]);

  const data: EletroListInterface = {
    userId: userId,
    nome: eletroName,
    kwh: eletroKwh
  };

  const eletroListRequest = async (id: number) => {
    await api
      .get(`api/eletro/eletros/${id}`)
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

  function handleChooseNumOfHours(hours: string) {
    setNumOfHours(Number(hours));
  }

  function handleCalculateTotal() {
    setTotalToPay(0);
    setTotalToPay(totalToPay + tarifa * numOfHours * totalKWH);
  }

  const totalKWH = eletroList.reduce((acc, cur) => {
    return acc + cur.kwh;
  }, 0);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <TopBar color="#FFEAA7" />
      </View>
      <StatusBar barStyle="dark-content" />

      <View>
        <Text style={styles.principalTitle}>Tarifa em Pernambuco: {`R$${tarifa} por kWh`}</Text>
      </View>

      <View>
        <Text style={styles.principalTitle}>Total de kWh: {`${totalKWH}`}</Text>
      </View>

      <View>
        <Text style={styles.principalTitle}>Total a pagar: {`${totalToPay}`}</Text>
      </View>

      <TextInput
        style={styles.registerInput}
        placeholder="Horas de uso"
        onChangeText={(e) => handleChooseNumOfHours(e)}
      />

      <TouchableOpacity style={styles.registerButton} onPress={handleCalculateTotal}>
        <Text style={styles.registerButtonText}>Calcular</Text>
      </TouchableOpacity>

      <View style={styles.list}>
        <ScrollView>
          {eletroList &&
            eletroList.map((item) => (
              <EletroList
                name={item.nome}
                kwh={item.kwh}
                editFunc={() => editRegister(item.id !== undefined ? item.id : 0)}
                deleteFunc={() => {}}
              />
            ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
