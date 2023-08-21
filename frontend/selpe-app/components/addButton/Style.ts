import { StyleSheet } from 'react-native';

export const addStyle = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: 50,
    height: 50,
    padding: 12,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3
  }
});
