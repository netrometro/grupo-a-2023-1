import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E17055',
    padding: 20,
    margin: 20,
    width: '80%',
    alignSelf: 'center',
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
    maxWidth: 200
  },
  text: {
    color: '#FFEAA7',
    textAlign: 'center',
    justifyContent: 'center'
  },
  textContainer: {
    justifyContent: 'center',
    height: '90%'
  }
});
