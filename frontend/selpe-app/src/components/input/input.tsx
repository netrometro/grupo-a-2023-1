import { Text, TextInput, View } from 'react-native';
import { styles } from './style';
import { InputProps } from './inputProps';

export default function Input({ placeholder, createfunction, security }: InputProps) {
  return (
    <View style={styles.container}>
      <TextInput
        secureTextEntry={security}
        placeholder={placeholder}
        onChange={createfunction}
      ></TextInput>
    </View>
  );
}
