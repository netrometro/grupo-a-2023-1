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
  },
  registerScreen: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    alignItems: 'center'
  },
  registerTitle: {
    color: '#2980B9',
    fontSize: 30,
    marginTop: 20
  },
  registerButton: {
    backgroundColor: '#2980B9',
    padding: 20,
    borderRadius: 50
  },
  registerButtonText: {
    color: '#fff'
  },

  registerInput: {
    backgroundColor: '#F6F6F6',
    width: '90%',
    padding: 20,
    margin: 20,
    color: '#E8E8E8',
    borderRadius: 20
  }
});
