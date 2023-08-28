import { StyleSheet } from 'react-native';

export const listStyle = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#2980B9',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 12,
    borderRadius: 12,
    marginTop: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderWidth: 1,
    borderColor: '#FFEAA7'
  },

  text: {
    color: '#FFEAA7',
    fontWeight: '500'
  },
  textView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '40%'
  }
});
