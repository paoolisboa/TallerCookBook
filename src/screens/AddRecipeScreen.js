import React, { useState } from 'react'
import { TextInput, Platform, Alert, KeyboardAvoidingView, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import styles from '../styles/addRecipeStyles'

function showAlert(message) {
    if (Platform.OS === 'web') {
        window.alert(message);
    } else {
        Alert.alert(message);
    }
}

function isFieldEmpty(value) {
    // .trim() remueve espacios en blanco
    if (value == null || String(value).trim() === '') {
        return true;
    }
    return false;
}

const AddRecipeScreen = () => {

    const [recipeName, setRecipeName] = useState('');
    const [category, setCategory] = useState('');
    const [preparationTime, setPreparationTime] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [ingredients, setIngredients] = useState('');

    const handleSave = () => {
        if (
            isFieldEmpty(recipeName) ||
            isFieldEmpty(category) ||
            isFieldEmpty(preparationTime) ||
            isFieldEmpty(difficulty) ||
            isFieldEmpty(ingredients)
        ) {
            showAlert('Por favor complete todos los campos');
            return;
        }
        showAlert('Se ha guardado la receta exitosamente');
    };

    const handleClean = () => {
        setRecipeName('');
        setCategory('');
        setPreparationTime('');
        setDifficulty('');
        setIngredients('');
    }

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.safeArea}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={styles.container}
                >
                    <ScrollView
                        style={styles.scroll}
                        contentContainerStyle={styles.scrollContent}
                        keyboardShouldPersistTaps="handled"
                        keyboardDismissMode={Platform.OS === 'ios' ? 'interactive' : 'on-drag'}
                        showsVerticalScrollIndicator={false}
                    >
                        <Text style={styles.titles}>Nombre</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={setRecipeName}
                            value={recipeName}
                            placeholder="Nombre de la receta"
                        />

                        <Text style={styles.titles}>Categoría</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={setCategory}
                            value={category}
                            placeholder="Postre, entrada, plato fuerte..."
                        />

                        <Text style={styles.titles}>Tiempo de preparación</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={setPreparationTime}
                            value={preparationTime}
                            placeholder="Tiempo en minutos"
                            keyboardType="numeric"
                        />

                        <Text style={styles.titles}>Dificultad</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={setDifficulty}
                            value={difficulty}
                            placeholder="Fácil, Medio o Difícil"
                        />

                        <Text style={styles.titles}>Ingredientes</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={setIngredients}
                            value={ingredients}
                            placeholder="Ingredientes"
                        />

                        <View style={styles.actions}>
                            <TouchableOpacity
                                onPress={handleSave}
                                style={styles.saveButton}
                            >
                                <Text style={styles.buttonText}>Guardar receta</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={handleClean}
                                style={styles.cleanButton}
                            >
                                <Text style={styles.buttonText}>Limpiar</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}



export default AddRecipeScreen;