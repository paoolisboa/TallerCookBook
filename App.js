import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RecipeListScreen from "./src/screens/RecipeListScreen"
import AddRecipeScreen from "./src/screens/AddRecipeScreen"
import CookingTipsScreen from "./src/screens/CookingTipsScreen"

const Tab = createBottomTabNavigator();

function App() {
  //const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
     
      <Tab.Navigator
        screenOptions={({route}) => ({

          // Focus: destaca la pantalla activa
          tabBarIcon: ({focused, color, size}) => {
              let iconName;
              if(route.name === "Menu"){
                iconName = focused ? 'restaurante' : 'restaurante-outline'
              } else if (route.name === 'Details'){
                iconName = focused ? 'details' : 'details-outline'
              }
              return <Icon name = {iconName} size = {size} color = {color}/>
          },
          tabBarActiveTinColor : '#24af42',
          tabBarInactiveTinColor : 'gray'
        })}
      >
        <Tab.Screen
          name="Recetas"
          component={RecipeListScreen}
          options={{title: 'Recetas'}}
        />
       
        <Tab.Screen
          name="NuevaReceta"
          component={AddRecipeScreen}
          options={{title: 'Nueva Receta'}}
        />

        <Tab.Screen
          name="Tips"
          component={CookingTipsScreen}
          options={{title: 'Tips Culinarios'}}
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
