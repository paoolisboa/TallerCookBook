import React, { useEffect, useState } from 'react'
import {View, Text, FlatList, TouchableOpacity, StatusBar, Image, ActivityIndicator} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {RECIPES} from '../data/recipesInitialData'
import styles from '../styles/RecipeListStyles';

const RecipeListScreen = ({navigation, route}) => {
    //Initial states
    const [recipes, setRecipes] = useState([])
    const [loading,setLoading] = useState(true)

    //Data loading effects
    useEffect(()=>{
        setLoading(true)
        const timer = setTimeout(()=>{
            setRecipes(RECIPES);
            setLoading(false)
        },1500)//setTimeout closed

        //Clean up, timer reset when the component dismount
        return ()=> clearTimeout(timer)
    },[])//useEffect closed

    //Hook useEffect to new recipe
    useEffect(()=>{
        if(route.params?.newRecipe){
            setRecipes(prev=>[route.params.newRecipe,...prev])
        }//if
    },[route.params?.newRecipe])//useEffect closed

    //Function to Card rendering
    const renderRecipeItem = ({item})=>{
        return(
            <TouchableOpacity
                style={styles.card}
                onPress={()=>navigation.navigate('Details',{recipes:item})}
            >
                <Image source = {item.image} style={styles.recipeImage}/>
                <View style={styles.infoContainer}>
                    <View style={styles.timeWrapper}>
                        <Icon name='clock-outline' size={14} color='#4ECDC4'/>
                        <Text style={styles.timeText}>{item.prepTime}</Text>
                    </View>
                    <Text style = {styles.recipeCategory}>{item.category}</Text>
                    <Text style = {styles.recipeName}>{item.name}</Text>
                </View>
            </TouchableOpacity>
        )
    }//rederRecipeItem

    return(
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle='dark-content' backgroundColor='#F9F9F9'/>
            <View style={styles.container}>
                <Text style={styles.headerTitle}>CookBook</Text>
                {loading ? (
                    <View style={styles.loaderContainer}>
                        <ActivityIndicator size='large' color='#E67E22'/>
                        <Text style={styles.loadingText}>Cargando...</Text>
                    </View>
                ):(
                    <FlatList
                        data={recipes}
                        keyExtractor={(item)=>item.id}
                        renderItem={renderRecipeItem}
                        numColumns={2}
                        columnWrapperStyle={styles.row}
                        showsVerticalScrollIndicator={true}
                    />
                )}


            </View>
        </SafeAreaView>

    )//return
}//RecipeListScreen

export default RecipeListScreen