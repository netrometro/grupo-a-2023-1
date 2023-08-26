import { StyleSheet } from 'react-native';

export const deleteStyle = StyleSheet.create({
  container: {
    backgroundColor: '#E17055',
    padding: 12,
    borderRadius: 50,
    width: 100,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3
  },
  text: {
    color: '#fff',
    fontSize: 16
  }
});
