// ProductDetailsScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { IProduct } from '../types/types';
import LinearGradient from 'react-native-linear-gradient';
import { Header } from '../components/Header';

type RootStackParamList = {
    productDetails: { item: IProduct };
};

type ProductDetailsRouteProp = RouteProp<RootStackParamList, 'productDetails'>;

const sizes = ['S', 'M', 'L', 'XL']
const colors = ['#91a1b0', '#b11d1d', '#1f44a3', '#9f632a', '#1d752b', '#000']

export function ProductDetailsScreen() {

    const route = useRoute<ProductDetailsRouteProp>();
    const { item } = route.params;

    const [selectedSize, setSelectedSize] = useState<string | null>(null)
    const [selectedColor, setSelectedColor] = useState<string | null>(null)


    return (
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#fdf0f3', '#fffbfc']} style={styles.container}>
            <View style={styles.header}>
                <Header />
            </View>
            <View style={styles.imageContainer}>
                <Image style={styles.coverImage} source={{ uri: item.image }} />
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={[styles.title, styles.price]}>{item.price}</Text>
                </View>
            </View>
            <Text style={[styles.title, styles.sizeHeader]}>Size</Text>
            <View style={styles.sizeContainer}>
                {sizes.map((size) => {
                    return (
                        <TouchableOpacity key={size} onPress={() => setSelectedSize(size)} style={styles.sizeValueContainer}>
                            <Text style={[styles.sizeValue, selectedSize === size && { color: '#e55b5b' }]}>{size}</Text>
                        </TouchableOpacity>
                    )
                })}
            </View>
            <Text style={[styles.title, styles.colorHeader]}>Color</Text>
            <View style={styles.colorContainer}>
                {colors.map((color) => {
                    return (
                        <TouchableOpacity key={color} onPress={() => setSelectedColor(color)} style={[styles.circleBorder, selectedColor === color && { borderRadius: 24, borderWidth: 2, borderColor: color }]}>
                            <View style={[styles.circle, { backgroundColor: color }]}></View>

                        </TouchableOpacity>
                    )
                })}
            </View>
            <View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Add to Cart</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        padding: 15
    },
    imageContainer: {
        width: '100%',
        height: 350,
    },
    coverImage: {
        resizeMode: "stretch",
        flex: 1
    },
    contentContainer: {
        padding: 20,
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 20,
        color: "#444",
        fontWeight: '500'
    },
    price: {
        fontSize: 20,
        color: '#4d4c4c',
    },
    sizeContainer: {
        flexDirection: 'row',
        marginHorizontal: 20,
    },
    sizeValueContainer: {
        height: 40,
        width: 40,
        borderRadius: 20,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5

    },
    sizeValue: {
        fontSize: 18,
        fontWeight: '700'

    },
    sizeHeader: {
        marginHorizontal: 20
    },
    colorHeader: {
        marginHorizontal: 20,
        marginTop: 10
    },
    colorContainer: {
        flexDirection: 'row',
        marginHorizontal: 20,
    },
    circleBorder: {
        height: 48,
        width: 48,
        marginHorizontal: 5,
        padding: 5
    },
    circle: {
        flex: 1,
        borderRadius: 18,
    },
    button: {
        backgroundColor: "#e96e6e",
        padding: 10,
        margin: 10,
        borderRadius: 20
    },
    buttonText: {
        fontSize: 24,
        fontWeight: "600",
        color: "#fff",
        textAlign: 'center'
    }

});
