import { View, Text, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';
import TopBar from '../../components/top-bar/TopBar';
import { styles } from './styles';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { api } from '../../services/Api';
import Separator from '../../components/separator/separator';
import Option from '../../components/option/option';
import { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StackType } from '../../routes/stackRoutes';

export default function ProfilePage() {
  const navigation = useNavigation<StackType>();
  const route = useRoute();
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [editing, setEditing] = useState<boolean>(false);

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
  }, []);

  const edit = () => {
    setEditing(!editing);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="#BDBDBD" />
        </TouchableOpacity>
        <TopBar color="#FFEAA7"></TopBar>
        <TouchableOpacity onPress={edit}>
          <MaterialIcons name="edit" size={24} color="#BDBDBD" />
        </TouchableOpacity>
      </View>
      <View style={styles.account}>
        <View style={styles.username}>
          <MaterialIcons name="account-circle" size={60} color="#2980B9" />
          {editing ? (
            <View style={{ flexDirection: 'row' }}>
              <TextInput value={name} onChangeText={setName} style={styles.textInput}></TextInput>
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
    </SafeAreaView>
  );
}
