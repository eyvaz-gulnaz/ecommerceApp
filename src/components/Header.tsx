import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

interface IHeader {
    isCart?: boolean
}

export function Header({ isCart }: IHeader) {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack} style={styles.iconContainer}>
                {
                    isCart ? <Ionicons name={'chevron-back'} color={'#e96e6e'} size={24} />
                        : <Image source={require('../assets/app.png')} style={styles.appIcon} />
                }
            </TouchableOpacity>
            {isCart ? <Text style={styles.myCart}>My Cart</Text> : null}

            <Image source={require('../assets/ellipse.png')} style={styles.dp} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    iconContainer: {
        height: 44,
        width: 44,
        borderRadius: 22,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: 'center'
    },
    appIcon: {
        height: 28,
        width: 28
    },
    dp: {
        height: 44,
        width: 44,
        borderRadius: 22
    },
    myCart: {
        fontSize: 28,
        color: '#000'
    }
})