import { Text, View, Modal, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { styles } from './style';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import OptionModal from './options/OptionModal';

export default function ModalTips({ title, description, id }: modalProps) {
  const [visible, setVisible] = useState<boolean>(false);

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
        <BlurView intensity={0.1} style={{ flex: 1, justifyContent: 'center' }}>
          <View style={styles.container}>
            <View style={styles.title}>
              <Text style={styles.textTitle}>{title}</Text>
              <OptionModal id={id}></OptionModal>
              <TouchableOpacity
                onPress={() => {
                  setVisible(false);
                }}
              >
                <Ionicons name="close" size={24} color="#FFEAA7" />
              </TouchableOpacity>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.text}>{description}</Text>
            </View>
          </View>
        </BlurView>
      </Modal>
      <TouchableOpacity
        style={{}}
        onPress={() => {
          setVisible(true);
        }}
      >
        <Ionicons name="notifications-outline" size={26} color="#E17055" />
      </TouchableOpacity>
    </View>
  );
}
