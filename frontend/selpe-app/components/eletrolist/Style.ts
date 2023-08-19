import { StyleSheet } from 'react-native';

export const listStyle = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    borderRadius: 12
  },
  iconsView: {
    flexDirection: 'row',
    gap: 10,
    alignContent: 'center',
    justifyContent: 'center'
  }
});
