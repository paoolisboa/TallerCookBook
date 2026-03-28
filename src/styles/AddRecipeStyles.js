import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  safeArea: {
      flex: 1,
      backgroundColor: '#F9F9F9'
  },
  container: {
      flex: 1,
  },
  scroll: {
      flex: 1,
  },
  scrollContent: {
      flexGrow: 1,
      padding: 24,
      paddingBottom: 32,
  },
  actions: {
      marginTop: 16,
      gap: 8,
  },
  saveButton: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#E67E22',
      paddingVertical: 12,
      paddingHorizontal: 16,
      borderRadius: 8,
  },
  saveButtonDisable: {
    backgroundColor: '#D1D5DB',
    opacity: 0.7,
  },
  cleanButton: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#2C3E50',
      paddingVertical: 12,
      paddingHorizontal: 16,
      borderRadius: 8,
  },
  buttonText: {
      color: '#FFFFFF',
      fontFamily: 'Poppins-Bold',
      fontSize: 16,
  },
  input: {
      height: 40,
      margin: 12,
      marginTop: 0,
      borderWidth: 0,
      borderBottomWidth: 1,
      padding: 10,
  },
  titles: {
      fontFamily: 'Poppins-Bold',
      fontSize: 24,
      color: '#2C3E50',
      marginLeft: 12
  },
});

export default styles