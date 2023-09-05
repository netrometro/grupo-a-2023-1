import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E17055',
    padding: 40,
    margin: 20,
    width: '80%',
    flexDirection: 'column',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    elevation: 20,
    height: 180
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign: 'center'
  },
  textTitle: {
    color: '#FFEAA7',
    maxWidth: 200,
    fontSize: 18,
    fontWeight: 'bold'
  },
  text: {
    color: '#FFEAA7',
    textAlign: 'center',
    justifyContent: 'center'
  },
  textContainer: {
    justifyContent: 'center',
    height: '90%'
  },

  buttonView: {
    flexDirection: 'row',
    justifyContent: 'center'
  },

  confirmButton: {
    backgroundColor: '#FFEAA7',
    borderRadius: 20,
    padding: 10
  },

  buttonText: {
    color: '#E17055',

    fontSize: 16
  }
});
