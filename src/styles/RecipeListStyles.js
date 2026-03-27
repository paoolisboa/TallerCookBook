import { StyleSheet } from 'react-native';

const styles=StyleSheet.create({
    safeArea : {
        flex: 1,
        backgroundColor: '#F9F9F9'        
    },
    container: {
        flex: 1,
        paddingHorizontal: 15
    },
    headerTitle:{
        fontFamily: 'Poppins-Bold',
        fontSize: 24,
        color: '#2C3E50',
        marginVertical:20,
        textAlign: 'center'
    },
    row :{
        justifyContent: 'space-between',
        marginBottom: 15
    },
    card:{
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        width: '48%',
        overflow:'hidden',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: {width:0, height:2},
        shadowOpacity:0.1,
        shadowRadius:4,
    },
    recipeImage:{
        width: '100%',
        height: 150,
        resizeMode:'cover',
    },
    infoContainer:{
        padding:10,
    },
    timeWrapper:{
        flexDirection:'row',
        alignItems: 'center',
        marginTop:5,
    },
    timeText:{
        fontFamily: 'Poppins-Bold',
        fontSize:12,
        color: '#4ECDC4',
        marginLeft: 5
    },
    recipeName: {
        fontFamily: 'Poppins-Bold',
        fontSize: 14,
        color: '#2C3E50', // Text: Charcoal Black
        fontWeight: 'bold',
    },
    recipeCategory: {
        fontFamily: 'Poppins-Regular',
        fontSize: 12,
        color: '#2C3E50', // Text: Charcoal Black
        fontWeight: 'bold',
    },
    loader:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F9F9F9',
    },
    loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    },
    loadingText: {
        marginTop: 10,
        fontFamily: 'Poppins-Regular',
        color: '#7F8C8D',
        fontSize: 16,
    }
})

export default styles