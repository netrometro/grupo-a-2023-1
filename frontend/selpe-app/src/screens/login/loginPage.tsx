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
import { useState, useContext, useEffect, useReducer } from 'react';
import { AuthContext } from '../../context/AuthContext';

export default function LoginPage() {
  const navigation = useNavigation<StackType>();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [id, setId] = useState<number>(0);
  const { onLogin, userId, authState } = useContext(AuthContext);

  const handleLogin = async () => {
    try {
      const response = await onLogin!(email, password);
      setId(Number(userId));
    } catch (error) {
      alert(error);
    }
  };

  if (authState?.authenticated && userId !== null) {
    navigation.navigate('Tab', {
      id: Number(userId)
    });
  }

  function registerScreen() {
    navigation.navigate('Register');
  }
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TopBar color="#FFEAA7"></TopBar>
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
