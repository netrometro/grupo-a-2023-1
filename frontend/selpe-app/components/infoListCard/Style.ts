import { StyleSheet } from 'react-native';

export const infoStyle = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fad390',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    borderRadius: 50,
    marginTop: 14,
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3
  },
  iconsView: {
    flexDirection: 'row',
    gap: 10,
    alignContent: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#000',
    fontWeight: '700'
  }
});
