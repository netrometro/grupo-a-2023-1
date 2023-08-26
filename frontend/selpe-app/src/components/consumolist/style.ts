import { StyleSheet } from 'react-native';

export const listStyle = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#2980B9',
    color: '#FFEAA7',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    borderRadius: 12,
    marginTop: 14
  },
  iconsView: {
    flexDirection: 'row',
    gap: 10,
    alignContent: 'center',
    justifyContent: 'center'
  },
  itemsText: {
    color: '#FFEAA7'
  }
});
