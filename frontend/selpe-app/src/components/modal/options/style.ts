import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'flex-end',
    paddingRight: 15,
    paddingTop: 25
  },
  container: {
    backgroundColor: '#FFEAA7',
    width: 120,
    height: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 20
  },
  close: {
    alignSelf: 'flex-end',
    paddingRight: 5,
    paddingTop: 5
  },
  report: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 5,
    paddingBottom: 8
  },
  text: {
    color: '#E17055',
    paddingLeft: 8
  }
});
