import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#74B9FF',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10
  },

  topBar: {
    width: '100%',
    marginTop: 15,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingRight: 15,
    paddingLeft: 15
  },

  modal: {
    flex: 1,
    margin: 38,
    justifyContent: 'center',
    alignItems: 'center',
    width: 400,
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
  }
});
