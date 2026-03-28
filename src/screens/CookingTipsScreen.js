import React from 'react'
import {Text, TextInput, View, TouchableOpacity} from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'



const CookingTipsScreen = () => {

 return(
    <SafeAreaProvider>
        <SafeAreaView>
            <View>
                <Text>
                I am bold
                </Text>
            </View>
        </SafeAreaView>
    </SafeAreaProvider>
    )
}

export default CookingTipsScreen