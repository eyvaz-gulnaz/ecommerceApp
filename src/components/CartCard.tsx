import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

export function CartCard() {
    return (
        <View style={styles.container}>
            <Image source={{ uri: "https://res.cloudinary.com/dlc5c1ycl/image/upload/v1710567612/cvafl35dv9wzisdsgtd6.png" }} style={styles.coverImage} />
            <View style={styles.cardContent}>
                <Text style={styles.title}>Jacket Jeans</Text>
                <Text style={styles.price}>$37.9</Text>
                <View style={styles.circleSizeContainer}>
                    <View style={styles.circle} />
                    <View style={styles.sizeCircle}>
                        <Text style={styles.sizeText}>L</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity>
                <FontAwesome6 name={'trash'} color={"#f68cb5"} size={22} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    coverImage: {
        height: 125,
        width: '25%',
        borderRadius: 20
    },
    title: {
        fontWeight: '500',
        fontSize: 20,
        color: '#444'
    },
    price: {
        color: '#797979',
        marginVertical: 10,
        fontSize: 18
    },
    cardContent: {
        marginHorizontal: 10
    },
    circle: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: '#7094c1'
    },
    circleSizeContainer: {
        flexDirection: 'row'
    },
    sizeCircle: {
        height: 32,
        width: 32,
        backgroundColor: "#fff",
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10
    },
    sizeText: {
        fontSize: 18,
        fontWeight: '500'
    }

})