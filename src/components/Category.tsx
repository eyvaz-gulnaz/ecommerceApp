import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

interface ICategory {
    item: string;
    selectedCategory: string | null;
    setSelectedCategory: (category: string) => void
}

export function Category({ item, selectedCategory, setSelectedCategory }: ICategory) {
    return (
        <TouchableOpacity onPress={() => setSelectedCategory(item)}>
            <Text style={[styles.categoryText, selectedCategory === item && { color: '#fff', backgroundColor: '#e96e6e' }]}>{item}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    categoryText: {
        fontSize: 16,
        fontWeight: '600',
        padding: 10,
        textAlign: 'center',
        color: '#938f8f',
        backgroundColor: '#dfdcdc',
        borderRadius: 16,
        paddingHorizontal: 20,
        marginHorizontal: 10,
        paddingVertical: 10
    }
})