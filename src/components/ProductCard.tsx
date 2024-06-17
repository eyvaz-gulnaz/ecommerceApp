import { Image, ImageProps, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { IProduct, RootStackParamList } from '../types/types';



interface IProductCard {
    item: IProduct;
    handleLiked: (item: IProduct) => void
}

export function ProductCard({ item, handleLiked }: IProductCard) {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>()

    return (
        <TouchableOpacity onPress={() => { navigation.navigate("productDetails", { item }) }} style={styles.container}>
            <Image style={styles.img} source={{ uri: item.image }} />
            <View style={styles.content}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>{item.price}</Text>
            </View>
            <TouchableOpacity onPress={() => handleLiked(item)} style={styles.fav}>
                {
                    item?.isLiked ? (<AntDesign name={'heart'} size={20} color={'#e55b5b'} />)
                        : (<AntDesign name={'hearto'} size={20} color={'#e55b5b'} />)
                }

            </TouchableOpacity>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        position: 'relative'
    },
    img: {
        width: '90%',
        height: 256,
        borderRadius: 20,
        marginVertical: 10,
        marginLeft: 10
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: '#444'
    },
    price: {
        fontSize: 18,
        fontWeight: '600',
        color: "#9c9c9c"
    },
    content: {
        marginLeft: 10
    },
    fav: {
        width: 34,
        height: 34,
        borderRadius: 17,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 20,
        right: 20
    }
})