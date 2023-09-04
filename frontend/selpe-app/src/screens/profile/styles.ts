import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#74B9FF'
  },
  adressContainer: {
    backgroundColor: '#FFEAA7',
    width: '100%',
    height: '100%',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    alignItems: 'center',
    alignContent: 'center'
  },
  topBar: {
    width: '100%',
    height: 100,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 40,
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: 'row'
  },
  account: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
    paddingBottom: 13
  },
  username: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  email: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    paddingLeft: 5
  },
  text: {
    width: 240,
    marginLeft: 15,
    fontWeight: 'bold',
    fontSize: 23
  },
  textEmail: {
    fontSize: 12,
    color: 'black',
    paddingLeft: 10
  },
  textInputEmail: {
    fontSize: 12,
    color: 'grey',
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: '#BDBDBD'
  },
  textInput: {
    width: 240,
    marginLeft: 15,
    fontWeight: 'bold',
    fontSize: 23,
    borderWidth: 1,
    borderColor: '#BDBDBD'
  },
  textBtn: {
    color: 'white'
  },
  editingBtn: {
    backgroundColor: '#2980B9',
    alignSelf: 'center',
    marginLeft: 10,
    padding: 15,
    borderRadius: 15
  },
  backBtn: {
    padding: 15,
    alignSelf: 'flex-end'
  },
  adressTitle: {
    color: '#2980B9',
    fontSize: 30,
    marginTop: 20,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  adressInput: {
    backgroundColor: '#2980B9',
    width: '90%',
    padding: 10,
    margin: 20,
    color: '#FFEAA7',
    borderRadius: 15
  },
  littleInput: {
    backgroundColor: '#2980B9',
    width: '40%',
    color: '#FFEAA7',
    margin: 18,
    padding: 10,
    borderRadius: 15
  },
  littleInputArea: {
    flexDirection: 'row'
  },
  adressBtn: {
    backgroundColor: '#E17055',
    padding: 20,
    marginTop: 35,
    borderRadius: 50,
    width: '90%',
    alignItems: 'center'
  }
});
