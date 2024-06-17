import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { Header } from '../components/Header'
import { CartCard } from '../components/CartCard'


export function CartScreen() {
    return (
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#fdf0f3', '#fffbfc']} style={styles.container}>
            <View style={styles.header}>
                <Header isCart />
            </View>
            <FlatList
                data={[1, 2, 3]}
                renderItem={CartCard}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 100 }}
                ListFooterComponent={
                    <>
                        <View style={styles.priceContainer}>
                            <View style={styles.textAndPrice}>
                                <Text style={styles.text}>Total:</Text>
                                <Text style={styles.text}>$119.7</Text>
                            </View>
                            <View style={styles.textAndPrice}>
                                <Text style={styles.text}>Shipping:</Text>
                                <Text style={styles.text}>$0.0</Text>
                            </View>
                        </View>
                        <View style={styles.divider} />
                        <View style={styles.textAndPrice}>
                            <Text style={styles.text}>Grand Total:</Text>
                            <Text style={[styles.text, { color: "#000", fontWeight: '700' }]}>$119.7</Text>
                        </View>
                    </>
                }
            >

            </FlatList>
            <TouchableOpacity style={styles.checkoutContainer}>
                <Text style={styles.buttonText}>Checkout</Text>
            </TouchableOpacity>


        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15
    },
    header: {
        marginBottom: 20
    },
    priceContainer: {
        marginTop: 40
    },
    textAndPrice: {
        marginHorizontal: 20,
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text: {
        color: "#757575",
        fontSize: 18
    },
    divider: {
        borderWidth: 1,
        marginVertical: 10,
        borderColor: "#C0c0c0"
    },
    checkoutContainer: {
        backgroundColor: "#e96e6e",
        marginVertical: 10,
        borderRadius: 10,
        width: '100%'
    },
    buttonText: {
        fontSize: 25,
        color: '#fff',
        textAlign: 'center',
        padding: 10
    }
})