import { TouchableOpacity, View, Text } from 'react-native';
import { styles } from './style';

export default function Button({ label, createfunction }: ButtonProps) {
  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={createfunction}>
        <Text style={styles.text}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
}
