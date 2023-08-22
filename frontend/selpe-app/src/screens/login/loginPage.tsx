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
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [id, setId] = useState<number>(0);

  const handleLogin = async () => {
    const data = {
      email,
      password
    };
    let idUser: any;
    const response = await api
      .post('api/user/login', data)
      .then((res) => {
        idUser = res.data.id;
        setId(idUser);
        console.log(id);
        navigation.navigate('Home', {
          id: idUser
        });
      })
      .catch((error) => {
        alert(error);
      });
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
