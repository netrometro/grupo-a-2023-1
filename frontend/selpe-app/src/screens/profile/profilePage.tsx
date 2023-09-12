import { View, Text, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';
import TopBar from '../../components/top-bar/TopBar';
import { styles } from './styles';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { api } from '../../services/Api';
import Separator from '../../components/separator/separator';
import Option from '../../components/option/option';
import { useState, useEffect, useReducer, Profiler } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StackType } from '../../routes/stackRoutes';
import { DeleteButton } from '../../components/deleteButton/DeleteButton';
import { useScreenGuard } from '../../hooks/useScreenGuard';

export default function ProfilePage() {
  useScreenGuard('ProfilePage');
  const navigation = useNavigation<StackType>();
  const route = useRoute();
  const [adressId, setAdressId] = useState<number>(0);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [cep, setCep] = useState<string>('');
  const [bairro, setBairro] = useState<string>('');
  const [logradouro, setLogradouro] = useState<string>('');
  const [localidade, setLocalidade] = useState<string>('');
  const [numero, setNumero] = useState<number>(0);
  const [uf, setUf] = useState<string>('');
  const [editing, setEditing] = useState<boolean>(false);
  const [editingAdress, setEditingAdress] = useState<boolean>(false);
  const [adress, setAdress] = useState<boolean>(false);
  const [userAdress, setUserAdress] = useState<boolean>(false);

  const userId = Object(route.params).id;

  const getInfo = async () => {
    const user = await api.get(`/api/user/${userId}`);
    if (user) {
      setName(user.data.name);
      setEmail(user.data.email);
    }
  };

  const sendInfo = async () => {
    setEditing(false);
    const data = {
      name,
      email
    };
    const user = await api.put(`/api/user/${userId}`, data);
    console.log(user);
  };

  const logout = () => {
    navigation.navigate('Register');
  };

  useEffect(() => {
    getInfo();
    getuserAdress();
  }, []);

  // useEffect(() => {
  //   getuserAdress();
  // }, [userAdress]);

  useEffect(() => {
    getAdress();
  }, [cep]);

  const adressOpen = () => {
    setAdress(!adress);
  };
  const edit = () => {
    setEditing(!editing);
  };

  const handleChangeNumero = (value: string) => {
    setNumero(Number(value));
  };

  const getAdress = async () => {
    if (cep.length == 8) {
      const adressData = await api.get(`api/endereco/${cep}`);
      const { bairro, localidade, logradouro, uf } = adressData.data;
      setBairro(bairro);
      setLogradouro(logradouro);
      setLocalidade(localidade);
      setUf(uf);
    }
  };

  const sendAdress = async () => {
    const adressData = {
      cep,
      bairro,
      logradouro,
      localidade,
      uf,
      numero
    };
    const sentAdress = await api.post('api/endereco', adressData);
    const enderecoId = sentAdress.data.id;
    setAdressId(enderecoId);
    await api.put(`api/user/endereco/${userId}/${enderecoId}`).then(() => {
      setUserAdress(true);
    });
  };

  const getuserAdress = async () => {
    const userAdress = await api.get(`api/user/endereco/${userId}`);
    if (userAdress.data !== null) {
      setUserAdress(true);
      setAdressId(userAdress.data.id);
      setCep(userAdress.data.cep);
      setBairro(userAdress.data.bairro);
      setLogradouro(userAdress.data.logradouro);
      setLocalidade(userAdress.data.localidade);
      setUf(userAdress.data.uf);
      setNumero(userAdress.data.numero);
    }
  };

  const editAdress = () => {
    setEditingAdress(true);
    setUserAdress(false);
  };

  const updateAdress = async () => {
    const adressData = {
      cep,
      bairro,
      logradouro,
      localidade,
      uf,
      numero
    };
    const newAdress = await api
      .put(`api/endereco/${adressId}`, adressData)
      .then(() => getuserAdress());
  };

  return (
    <SafeAreaView style={styles.container}>
      {!adress && (
        <View>
          <View style={styles.topBar}>
            <TouchableOpacity>
              <Ionicons name="arrow-back" size={24} color="#BDBDBD" />
            </TouchableOpacity>
            <TopBar color="#FFEAA7"></TopBar>
            <TouchableOpacity onPress={edit}>
              <MaterialIcons name="edit" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          </View>
          <View>
            <View style={styles.account}>
              <View style={styles.username}>
                <MaterialIcons name="account-circle" size={60} color="#2980B9" />
                {editing ? (
                  <View style={{ flexDirection: 'row' }}>
                    <TextInput
                      value={name}
                      onChangeText={setName}
                      style={styles.textInput}
                    ></TextInput>
                    <TouchableOpacity onPress={sendInfo} style={styles.editingBtn}>
                      <Text style={styles.textBtn}>Salvar</Text>
                    </TouchableOpacity>
                  </View>
                ) : (
                  <Text numberOfLines={2} style={styles.text}>
                    {name}
                  </Text>
                )}
              </View>
              <View style={styles.email}>
                <MaterialIcons name="email" size={21} color="#2980B9" />
                {editing ? (
                  <TextInput
                    value={email}
                    onChangeText={setEmail}
                    style={styles.textInputEmail}
                  ></TextInput>
                ) : (
                  <Text numberOfLines={1} style={styles.textEmail}>
                    {email}
                  </Text>
                )}
              </View>
            </View>
            <Separator />
            <View id="options">
              <Option
                createfunc={() => {}}
                icon={<MaterialIcons name="history" size={22} color="#2980B9" />}
                name="Histórico"
              ></Option>
              <Separator />
              {userAdress ? (
                <Option
                  createfunc={adressOpen}
                  icon={<Ionicons name="create" size={22} color="#2980B9" />}
                  name="Visualizar endereço"
                ></Option>
              ) : (
                <Option
                  createfunc={adressOpen}
                  icon={<Ionicons name="create" size={22} color="#2980B9" />}
                  name="Cadastrar endereço"
                ></Option>
              )}
              <Separator />
              <Option
                createfunc={() => {}}
                icon={<MaterialIcons name="settings" size={22} color="#2980B9" />}
                name="Configurações"
              ></Option>
              <Separator />
              <Option
                createfunc={logout}
                icon={<MaterialIcons name="logout" size={22} color="#2980B9" />}
                name="Sair"
              ></Option>
            </View>
            <Separator />
          </View>
        </View>
      )}
      {adress && (
        <View style={{ marginTop: 30, flex: 1 }}>
          <View style={styles.backBtn}>
            <DeleteButton
              name={<Ionicons name="arrow-back-circle-outline" size={28} color="white" />}
              deleteFunc={adressOpen}
            ></DeleteButton>
          </View>
          {userAdress ? (
            <View style={styles.adressContainer}>
              <Text style={styles.adressTitle}>Visualizar Endereço</Text>
              <View style={styles.littleInputArea}>
                <Text style={styles.littleInput}>{cep}</Text>
                <Text style={styles.littleInput}>{bairro}</Text>
              </View>
              <Text style={styles.adressInput}>{logradouro}</Text>
              <Text style={styles.adressInput}>{localidade}</Text>
              <View style={styles.littleInputArea}>
                <Text style={styles.littleInput}>{numero}</Text>
                <Text style={styles.littleInput}>{'oi' + uf}</Text>
              </View>
              <TouchableOpacity style={styles.adressBtn} onPress={editAdress}>
                <Text style={{ color: 'white' }}>Editar</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.adressContainer}>
              <Text style={styles.adressTitle}>Adicionar Endereço</Text>
              <View style={styles.littleInputArea}>
                <TextInput
                  style={styles.littleInput}
                  placeholder="CEP"
                  onChangeText={setCep}
                  value={cep}
                ></TextInput>
                <TextInput
                  style={styles.littleInput}
                  placeholder="Bairro"
                  onChangeText={setBairro}
                  value={bairro}
                ></TextInput>
              </View>
              <TextInput
                style={styles.adressInput}
                placeholder="Logradouro"
                onChangeText={setLogradouro}
                value={logradouro}
              ></TextInput>
              <TextInput
                style={styles.adressInput}
                placeholder="Cidade"
                onChangeText={setLocalidade}
                value={localidade}
              ></TextInput>
              <View style={styles.littleInputArea}>
                <TextInput
                  style={styles.littleInput}
                  placeholder="Numero"
                  onChangeText={(e) => handleChangeNumero(e)}
                  keyboardType="numeric"
                  value={numero.toString()}
                ></TextInput>
                <TextInput
                  style={styles.littleInput}
                  placeholder="UF"
                  onChangeText={setUf}
                  keyboardType="numeric"
                  value={uf}
                ></TextInput>
              </View>
              {editingAdress ? (
                <TouchableOpacity style={styles.adressBtn} onPress={updateAdress}>
                  <Text style={{ color: 'white' }}>Salvar</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity style={styles.adressBtn} onPress={sendAdress}>
                  <Text style={{ color: 'white' }}>Salvar</Text>
                </TouchableOpacity>
              )}
            </View>
          )}
        </View>
      )}
    </SafeAreaView>
  );
}
