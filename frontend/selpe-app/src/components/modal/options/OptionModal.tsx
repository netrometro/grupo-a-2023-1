import { View, Modal, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { styles } from './style';
import { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { api } from '../../../services/Api';

export default function OptionModal({ id }: optionProps) {
  const [visible, setVisible] = useState<boolean>(false);

  const info = async () => {
    const data = {
      report: true
    };
    const report = await api.put(`api/dicas/${id}`, data).then((res) => {
      console.log(res);
      alert('Reportado com sucesso, essa informação será analizada');
    });
  };

  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          setVisible(false);
        }}
      >
        <SafeAreaView style={styles.modal}>
          <View style={styles.container}>
            <View style={styles.close}>
              <TouchableOpacity
                onPress={() => {
                  setVisible(false);
                }}
              >
                <MaterialIcons name="close" size={20} color="#E17055" />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                style={styles.report}
                onPress={() => {
                  info();
                }}
              >
                <MaterialIcons name="report-problem" size={20} color="#E17055" />
                <Text style={styles.text}>Reportar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </Modal>
      <TouchableOpacity
        onPress={() => {
          setVisible(true);
        }}
      >
        <Feather name="more-vertical" size={24} color="#FFEAA7" />
      </TouchableOpacity>
    </View>
  );
}
