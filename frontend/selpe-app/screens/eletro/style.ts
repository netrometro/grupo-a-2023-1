import { StyleSheet } from 'react-native';

export const eletroStyle = StyleSheet.create({
  container: {
    backgroundColor: '#2980B9',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10
  },
  titleDiv: {
    flex: 1,
    alignContent: 'center',
    marginTop: 80
  },
  principalTitle: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  list: {
    flex: 5,
    width: '90%'
  },

  buttons: {
    flex: 1,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
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
    marginTop: 20,
    fontWeight: 'bold'
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
    color: '#000',
    borderRadius: 20
  }
});
