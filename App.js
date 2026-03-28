/* eslint-disable react/no-unstable-nested-components */
import React from 'react'
import { StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import RecipeListScreen from "./src/screens/RecipeListScreen"
import AddRecipeScreen from "./src/screens/AddRecipeScreen"
import CookingTipsScreen from "./src/screens/CookingTipsScreen"
import RecipeDetailScreen from "./src/screens/RecipeDetailScreen"

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const RecipesStack=()=>{
  return(
    <Stack.Navigator screenOptions={{headerTitleStyle:{fontFamily:'Poppins-Bold'}, headerTintColor:'#E67E22'}}>
      <Stack.Screen
        name="RecipeList"
        component={RecipeListScreen}
        options={{title: 'Mis Recetas'}}
      />
      <Stack.Screen
        name="Details"
        component={RecipeDetailScreen}
        options={{title: 'Detalle de Receta'}}
      />
    </Stack.Navigator>
  )
}

function App() {
  //const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#F9F9F9" />
      <Tab.Navigator
        screenOptions={({route}) => ({

          // Focus
          tabBarIcon: ({focused, color, size}) => {
              let iconName;
              if(route.name === "Recetas"){
                iconName = focused ? 'silverware-fork-knife' : 'silverware-fork-knife'
              } else if (route.name === 'NuevaReceta'){
                iconName = focused ? 'plus-box' : 'plus-box-outline'
              } else if (route.name === 'Tips'){
                iconName = focused? 'lightbulb-on' : 'lightbulb-on-outline'
              }
              return <Icon name = {iconName} size = {size} color = {color}/>
          },
          tabBarActiveTinColor : '#E67E22',
          headerShown: false,
          headerTitleStyle: { fontFamily: 'Poppins-Bold' },
          headerTintColor:'#E67E22',
          tabBarInactiveTinColor : '#1d1d1d',
        })}
      >
        <Tab.Screen
          name="Recetas"
          component={RecipesStack}
          options={{title: 'Recetas', headerShown:false}}
        />
       
        <Tab.Screen
          name="NuevaReceta"
          component={AddRecipeScreen}
          options={{title: 'Nueva Receta', headerShown: true}}
        />

        <Tab.Screen
          name="Tips"
          component={CookingTipsScreen}
          options={{title: 'Tips Culinarios', headerShown:true}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
