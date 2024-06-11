import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Fontisto from 'react-native-vector-icons/Fontisto'
import { Header } from '../components/Header'
import { Category } from '../components/Category'
import { ProductCard } from '../components/ProductCard'

const categories: string[] = ['Trending Now', 'All', 'New', 'Men', 'Women']

export function HomeScreen() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
    return (
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#fdf0f3', '#fffbfc']} style={styles.container}>
            <Header />
            <Text style={styles.text}>Match Your Style</Text>
            <View style={styles.search}>
                <Fontisto name='search' size={26} style={styles.icon} />
                <TextInput placeholder='Search' style={styles.input} />
            </View>
            <FlatList
                showsHorizontalScrollIndicator={false}
                data={categories}
                renderItem={({ item }) => (<Category item={item} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />)} horizontal={true} keyExtractor={(item) => item} />
            <View>
                <ProductCard />
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    text: {
        color: '#000',
        fontSize: 28,
        marginTop: 25
    },
    icon: {
        marginHorizontal: 20
    },
    search: {
        height: 48,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 12,
        marginVertical: 20
    },
    input: {
        flex: 1,
        backgroundColor: '#fff',
    }
})