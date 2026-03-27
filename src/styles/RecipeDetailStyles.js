import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F9F9F9'
  },
  container: {
    flex: 1,
  },
  image:{
    width: '100%',
    height:300,
    resizeMode: 'cover',
  },
  contentWrapped:{
    padding:20,
    marginTop:-30,
    backgroundColor: '#F9F9F9',
    borderRadius:30
  },
  recipeName:{
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: '#E67E22',
    marginBottom:15,
  },
  categoryText:{
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color:'#E67E22',
    marginBottom:15,
  },
  infoRow:{
    flexDirection: 'row',
    marginBottom: 20,
  },
  infoBadge:{
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius:12,
    elevation: 2
  },
  infoText:{
    fontFamily: 'Poppins-Regular',
    marginLeft: 5,
    fontSize: 13,
    color: '#34495E'
  },
  tabContainer:{
    flexDirection: 'row',
    backgroundColor: '#ECECEC',
    borderRadius: 45,
    padding: 4,
    marginBotton: 30,
    height:55,
    marginEnd:10,
  },
  tabButton:{
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius:45,
    height:45
  },
  activeTab:{
    backgroundColor:'#E67E22'
  },
  tabText:{
    fontFamily: 'Poppins-Bold',
    color: '#7F8C8D'
  },
  activeTabText:{
    color:'#FFFFFF'
  },
  listItem:{
    flexDirection:'row',
    marginBottom:10,
    alignItems: 'flex-start',
    marginStart:10,
  },
  itemText:{
    fontFamily: 'Poppins-Regular',
    fontSize:15,
    color:'#2C3E50',
    marginLeft:10,
    flex:1,
  },
  dynamicContent:{
    marginTop:20,
  }
});

export default styles