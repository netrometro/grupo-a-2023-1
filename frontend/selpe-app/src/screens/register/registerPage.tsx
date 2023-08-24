import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  TextInputChangeEventData,
  NativeSyntheticEvent,
  SafeAreaView
} from 'react-native';
import TopBar from '../../components/top-bar/TopBar';
import { styles } from './style';
import Input from '../../components/input/input';
import Button from '../../components/button/button';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackType } from '../../routes/stackRoutes';
import { useState } from 'react';
import { api } from '../../services/Api';

export default function RegisterPage() {
  const navigation = useNavigation<StackType>();

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSaveUser = async () => {
    try {
      const data = {
        name,
        email,
        password
      };

      const response = await api.post('api/user/', data);
      alert('Cadastrado com sucesso!');
      navigation.navigate('Login');
    } catch (error) {
      alert(error);
    }
  };

  function loginScreen() {
    navigation.navigate('Login');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <AntDesign name="close" size={22} color="#BDBDBD"></AntDesign>
        <TopBar color="#FFEAA7"></TopBar>
        <TouchableOpacity onPress={loginScreen}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.form}>
        <Input
          createfunction={(e: NativeSyntheticEvent<TextInputChangeEventData>) =>
            setName(e.nativeEvent.text)
          }
          placeholder="Nome"
          security={false}
        ></Input>
        <Input
          createfunction={(e: NativeSyntheticEvent<TextInputChangeEventData>) =>
            setEmail(e.nativeEvent.text)
          }
          placeholder="Email"
          security={false}
        ></Input>
        <Input
          createfunction={(e: NativeSyntheticEvent<TextInputChangeEventData>) =>
            setPassword(e.nativeEvent.text)
          }
          placeholder="Senha"
          security={true}
        ></Input>
      </View>
      <View style={styles.btn}>
        <Button label="Cadastrar" createfunction={handleSaveUser}></Button>
      </View>
    </SafeAreaView>
  );
}
