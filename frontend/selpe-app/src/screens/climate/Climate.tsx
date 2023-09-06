import { Text, StatusBar, View } from 'react-native';
import { styles } from './style';
import { SafeAreaView } from 'react-native-safe-area-context';
import TopBar from '../../components/top-bar/TopBar';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Climate() {
  const [reloadEffect, setReloadEffect] = useState<number>(0);
  const [date, setDate] = useState<string>('');
  const [text, setText] = useState<string>('');

  useEffect(() => {
    axios
      .get(
        'http://apiadvisor.climatempo.com.br/api/v1/anl/synoptic/locale/BR?token=530d00417367aef4db9531400e501061'
      )
      .then((response) => {
        const data = response.data;
        console.log(data);
        const myDate = `${data[0].date}`;
        const myText = `${data[0].text}`;
        setDate(`${myDate}`);
        setText(`${myText}`);
      });
  }, [reloadEffect]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <TopBar color="#FFEAA7" />
      </View>
      <StatusBar barStyle="dark-content" />

      <View style={styles.modal}>
        <Text style={styles.modalTitle}>📅 Data 📅</Text>
        <Text style={styles.modalBody}>{date}</Text>

        <Text style={styles.modalTitle}>⛈️ Previsão ⛈️</Text>
        <Text style={styles.modalBody}>{text}</Text>
      </View>
    </SafeAreaView>
  );
}
