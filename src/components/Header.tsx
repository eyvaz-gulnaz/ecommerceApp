import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Image source={require('../assets/app.png')} style={styles.appIcon} />
            </View>
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
    }
})