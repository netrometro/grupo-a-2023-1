import { Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function TopBar({ color }: TopBarProps) {
  return (
    <View>
      <Text style={{ fontWeight: 'bold', fontSize: 30, color: `${color}` }}>
        Selpe
        <MaterialCommunityIcons name="lightning-bolt-outline" size={34} color="yellow" />
      </Text>
    </View>
  );
}
