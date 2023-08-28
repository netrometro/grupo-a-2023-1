import { StyleSheet } from 'react-native';

export const infoStyle = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#FFEAA7',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 12,
    borderRadius: 50,
    marginTop: 14,
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3
  },
  text: {
    color: '#2980B9',
    fontWeight: '500'
  }
});
