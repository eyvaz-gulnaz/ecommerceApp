import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen } from './src/screens/HomeScreen'
import { ReorderScreen } from './src/screens/ReorderScreen'
import { CartScreen } from './src/screens/CartScreen'
import { AccountScreen } from './src/screens/AccountScreen'
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const Tab = createBottomTabNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#e96e6e"
      }}>
        <Tab.Screen name='home' component={HomeScreen} options={{ tabBarIcon: ({ color, size }) => { return <Entypo name='home' size={size} color={color} /> } }} />
        <Tab.Screen name='reorder' component={ReorderScreen} options={{ tabBarIcon: ({ color, size }) => { return <MaterialIcons name='reorder' size={size} color={color} /> } }} />
        <Tab.Screen name='cart' component={CartScreen} options={{ tabBarIcon: ({ color, size }) => { return <MaterialCommunityIcons name='cart' size={size} color={color} /> } }} />
        <Tab.Screen name='account' component={AccountScreen} options={{ tabBarIcon: ({ focused, color, size }) => { return <FontAwesome6 name='user' size={size} color={color} /> } }} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})