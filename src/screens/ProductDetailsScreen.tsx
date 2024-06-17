// ProductDetailsScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { IProduct } from '../types/types';
import LinearGradient from 'react-native-linear-gradient';
import { Header } from '../components/Header';

type RootStackParamList = {
    productDetails: { item: IProduct };
};

type ProductDetailsRouteProp = RouteProp<RootStackParamList, 'productDetails'>;

export function ProductDetailsScreen() {
    const route = useRoute<ProductDetailsRouteProp>();
    const { item } = route.params;

    return (
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#fdf0f3', '#fffbfc']} style={styles.container}>
            <Header />
            <Image style={styles.image} source={{ uri: item.image }} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.price}>{item.price}</Text>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    image: {
        width: 300,
        height: 420

    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 20,
        color: '#888',
        marginTop: 8,
    },
});
