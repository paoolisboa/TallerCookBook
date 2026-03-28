import React, {useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from '../styles/recipeDetailStyles'


function RecipeDetailsScreen ({route}){

    const {recipes}=route.params
    
    const [activeTab, setActiveTab] = useState('ingredients')
    const [displayData,setDisplayData] = useState([])

    useEffect(()=>{
        if(activeTab==='ingredients'){
            setDisplayData(recipes.ingredients)
        } else {
            setDisplayData(recipes.steps)
        }
    },[activeTab])

    return(
        <SafeAreaView style={styles.safeArea}>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.container} >
                <Image source={recipes.image} style={styles.image}/>
                <View style={styles.contentWrapped}>
                   <Text style={styles.recipeName}>{recipes.name}</Text>
                   <Text style={styles.categoryText}>{recipes.category}</Text>
                   <View style={styles.infoRow}>
                        <View style={styles.infoBadge}>
                            <Icon name='clock-outline' size={18} color='#4ECDC4'/>
                            <Text style={styles.infoText}>{recipes.prepTime}   </Text>
                         </View>
                        <View style={styles.infoBadge}>
                            <Icon name='gauge' size={18} color='#4ECDC4' />
                            <Text style={styles.infoText}>{recipes.difficulty}</Text>
                         </View>
                   </View>
                   <View style={styles.tabContainer}>
                        <TouchableOpacity
                            style={[styles.tabButton, activeTab==='ingredients' && styles.activeTab]}
                            onPress={()=>setActiveTab('ingredients')}
                        >
                            <Text style={[styles.tabText, activeTab === 'ingredients' && styles.activeTabText]}>
                                Ingredientes
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.tabButton, activeTab==='steps' && styles.activeTab]}
                            onPress={()=>setActiveTab('steps')}
                        >
                            <Text style={[styles.tabText, activeTab === 'steps' && styles.activeTabText]}>
                                Preparación
                            </Text>
                        </TouchableOpacity>
                   </View>
                   <View style={styles.dynamicContent}>
                        {displayData.map((item,index)=>(
                            <View key={index} style={styles.listItem}>
                                <Icon
                                    name={activeTab === 'ingredients' ? "check-circle-outline" : "numeric-" + (index + 1) + "-circle"}
                                    size={22}
                                    color='#4ECDC4'
                                />
                                <Text style={styles.itemText}>{item}</Text>
                            </View>
                        ))}
                   </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default RecipeDetailsScreen