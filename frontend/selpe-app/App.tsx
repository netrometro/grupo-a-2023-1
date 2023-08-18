import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ViewBase } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>teste</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
