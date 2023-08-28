import { StyleSheet } from 'react-native';

export const cardStyle = StyleSheet.create({
  container: {
    width: '80%'
  },
  label: {
    marginLeft: 11,
    color: '#2980B9',
    fontWeight: '600',
    fontSize: 16
  },
  contentView: {
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
  content: {
    color: '#FFEAA7'
  }
});
