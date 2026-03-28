import React, { useEffect, useState } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import COOKING_TIPS from "./../data/cookingTipsData"

const CookingTipsScreen = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [tips] = useState(COOKING_TIPS);
    const [infoIndex, setInfoIndex] = useState('Tip 1 de 10');

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % tips.length);
        }, 5000);
        // Cleanup: clear interval when component unmounts 
        return () => clearInterval(intervalId);
    });

    useEffect(() => {
        setInfoIndex(`Tip ${currentIndex + 1} de 10`);
    }, [currentIndex]);

    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <View>
                    <Text>
                        {tips[currentIndex].title}
                    </Text>
                    <Text>
                        {tips[currentIndex].description}
                    </Text>
                    <Text>
                        {infoIndex}
                    </Text>
                    <View style={styles.actions}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => { setCurrentIndex(currentIndex - 1 === -1 ? 9 : currentIndex - 1) }}
                        >
                            <Text>Prev</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => { setCurrentIndex((prev) => (prev + 1) % tips.length) }}
                        >
                            <Text>Next</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    actions: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        width: '100%',   // ocupa todo el ancho
        padding: 3,      // simula gap interno
    },
    button: {
        width: '48%',
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
    },
});

export default CookingTipsScreen