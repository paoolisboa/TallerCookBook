import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  safeArea: {
      flex: 1,
      backgroundColor: '#F9F9F9',
  },
  screenInner: {
      flex: 1,
      paddingHorizontal: 16,
      paddingTop: 12,
      paddingBottom: 12,
  },
  tipCard: {
      height: '83%',
      minHeight: 0,
      backgroundColor: '#FFFFFF',
      borderRadius: 16,
      padding: 16,
      elevation: 6,
      shadowColor: '#153d6b',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.35,
      shadowRadius: 10,
  },
  cardBody: {
      flex: 1,
      minHeight: 0,
      alignItems: 'center',
      paddingBottom: 8,
  },
  tipTitle: {
      fontFamily: 'Poppins-Bold',
      fontSize: 36,
      color: '#E67E22',
      textAlign: 'center',
      marginTop: 16,
      marginBottom: 10,
  },
  tipDescription: {
      fontFamily: 'Poppins-Regular',
      fontSize: 15,
      color: '#2C3E50',
      textAlign: 'center',
      lineHeight: 22,
      marginBottom: 12,
  },
  tipCounter: {
      fontFamily: 'Poppins-Regular',
      fontSize: 13,
      color: '#7F8C8D',
  },
  container: {
      flex: 1,
  },
  actions: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      width: '100%',
      marginTop: 16,
      flexShrink: 0,
      gap: 10,
  },
  button: {
      flex: 1,
      minWidth: '45%',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 14,
      paddingHorizontal: 12,
      borderRadius: 8,
  },
  buttonPrev: {
      backgroundColor: '#2C3E50',
  },
  buttonNext: {
      backgroundColor: '#E67E22',
  },
  buttonLabel: {
      color: '#FFFFFF',
      fontFamily: 'Poppins-Bold',
      fontSize: 16,
  },
  tipImageFrame: {
      width: 330,
      height: 280,
      borderRadius: 16,
      overflow: 'hidden',
      alignSelf: 'center',
      backgroundColor: '#ECECEC',
  },
  tipImage: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
  },
});

export default styles