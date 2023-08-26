import { StyleSheet } from 'react-native';

export const consumoStyle = StyleSheet.create({
  container: {
    backgroundColor: '#74B9FF',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10
  },
  titleDiv: {
    flex: 2,
    flexDirection: 'column',
    alignContent: 'center'
  },
  principalTitle: {
    color: '#FFEAA7',
    fontSize: 30,
    fontWeight: 'bold'
  },

  buttons: {
    flex: 2,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    gap: 10
  },
  infoCard: {
    flex: 1,
    width: '90%'
  },
  list: {
    flex: 7,
    width: '90%'
  },

  registerScreen: {
    backgroundColor: '#FFEAA7',
    width: '100%',
    height: '100%',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    alignItems: 'center',
    shadowColor: '#171717',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.2,
    shadowRadius: 3
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
    borderRadius: 50,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center'
  },
  registerButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16
  },

  registerInput: {
    backgroundColor: '#2980B9',
    width: '90%',
    padding: 20,
    margin: 20,
    color: '#FFEAA7',
    borderRadius: 20
  },

  modal: {
    // flex: 1,
    margin: 38,
    justifyContent: 'center',
    alignItems: 'center',
    width: 298,
    height: 145,
    flexShrink: 0,
    borderRadius: 28,
    backgroundColor: '#FFEAA7',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },

  modalTitle: {
    color: '#2980B9',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: 30
  },

  modalBody: {
    color: '#2980B9',
    textAlign: 'center',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '600'
  },

  meusConsumos: {
    color: '#FFEAA7',
    marginBottom: 38,
    textAlign: 'center',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '600'
  }
});
