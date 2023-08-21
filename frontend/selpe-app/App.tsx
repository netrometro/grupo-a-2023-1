import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ViewBase } from 'react-native';
import Routes from './src/routes/routes';
import { StackComponent } from './routes/stack';
import { TabComponent } from './routes/tab';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Routes /> */}
      <TabComponent/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
