import {
  Text,
  TouchableOpacity,
  View,
  TextInputChangeEventData,
  NativeSyntheticEvent
} from 'react-native';
import TopBar from '../../components/top-bar/TopBar';
import Input from '../../components/input/input';
import Button from '../../components/button/button';
import { styles } from './style';
import { useNavigation } from '@react-navigation/native';
import { StackType } from '../../routes/stackRoutes';
import { useState } from 'react';
import { api } from '../../services/Api';

export default function LoginPage() {
  const navigation = useNavigation<StackType>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [id, setId] = useState(0);

  const handleLogin = async () => {
    try {
      const data = {
        email,
        password
      };

      const response = await api.post('api/user/login', data);
      const idUser = response.data.id;
      setId(idUser);
      navigation.navigate('Profile', {
        id: idUser
      });
    } catch (error) {
      alert(error);
    }
  };

  function registerScreen() {
    navigation.navigate('Register');
  }
  return (
    <View>
      <View style={styles.topBar}>
        <TopBar color="#2980B9"></TopBar>
      </View>
      <View style={styles.form}>
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
        <Button createfunction={handleLogin} label="Login"></Button>
        <TouchableOpacity onPress={registerScreen}>
          <Text style={styles.text}>Não esta Cadastrado?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
