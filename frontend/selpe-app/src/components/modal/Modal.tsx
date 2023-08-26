import { Text, View, Modal, TouchableOpacity } from 'react-native';

import { useState } from 'react';
import { styles } from './style';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';

export default function ModalTips() {
  const [visible, setVisible] = useState(false);

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
        <BlurView intensity={0.1}>
          <View style={styles.container}>
            <View style={styles.title}>
              <Text style={styles.textTitle}>Dicas</Text>
              <TouchableOpacity
                onPress={() => {
                  setVisible(false);
                }}
              >
                <Ionicons name="close" size={24} color="#FFEAA7" />
              </TouchableOpacity>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.text}>Testando as dicas</Text>
            </View>
          </View>
        </BlurView>
      </Modal>
      <TouchableOpacity
        onPress={() => {
          setVisible(true);
        }}
      >
        <Ionicons name="notifications-outline" size={26} color="#E17055" />
      </TouchableOpacity>
    </View>
  );
}
