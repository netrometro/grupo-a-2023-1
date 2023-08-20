import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { OptionProps } from './OptionProps';

export default function Option({ icon, name, createfunc }: OptionProps) {
  return (
    <TouchableOpacity onPress={createfunc}>
      <View style={styles.container}>
        {icon}
        <Text style={styles.text}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
}
