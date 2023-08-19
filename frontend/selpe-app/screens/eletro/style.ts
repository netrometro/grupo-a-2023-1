import { StyleSheet } from 'react-native';

export const eletroStyle = StyleSheet.create({
  container: {
    backgroundColor: '#2980B9',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10
  },
  titleDiv: {},
  principalTitle: {
    color: '#fff',
    fontSize: 30
  },
  list: {
    width: '90%'
  },
  buttons: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 10
  }
});
