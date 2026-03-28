import React, { useEffect, useState } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import styles from '../styles/cookingTipsStyles'
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
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.screenInner}>
                    <View style={styles.tipCard}>
                        <View style={styles.cardBody}>
                            <View style={styles.tipImageFrame}>
                                <Image
                                    style={styles.tipImage}
                                    source={tips[currentIndex].image}
                                />
                            </View>
                            <Text style={styles.tipTitle}>
                                {tips[currentIndex].title}
                            </Text>
                            <Text style={styles.tipDescription}>
                                {tips[currentIndex].description}
                            </Text>
                            <Text style={styles.tipCounter}>
                                {infoIndex}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.actions}>
                        <TouchableOpacity
                            style={[styles.button, styles.buttonPrev]}
                            onPress={() => { setCurrentIndex(currentIndex - 1 === -1 ? 9 : currentIndex - 1) }}
                        >
                            <Text style={styles.buttonLabel}>Anterior</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.button, styles.buttonNext]}
                            onPress={() => { setCurrentIndex((prev) => (prev + 1) % tips.length) }}
                        >
                            <Text style={styles.buttonLabel}>Siguiente</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default CookingTipsScreen