// components/navigation/Navigation.tsx
import React from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Dashboard from '../components/screens/Dashboard';
import Cart from '../components/navigation/Cart';
import Profile from '../components/navigation/Profile';

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false, // hide labels for futuristic look
        tabBarStyle: styles.tabBar,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: 'home' | 'shopping-cart' | 'person' = 'home';
          if (route.name === 'Dashboard') iconName = 'home';
          else if (route.name === 'Cart') iconName = 'shopping-cart';
          else if (route.name === 'Profile') iconName = 'person';

          // Animated scale for active tab
          const scale = focused ? 1.4 : 1.0;

          return (
            <Animated.View style={{ transform: [{ scale }], alignItems: 'center' }}>
              <MaterialIcons name={iconName} size={28} color={focused ? '#0ff' : '#888'} />
              {focused && <View style={styles.glowEffect} />}
            </Animated.View>
          );
        },
      })}
    >
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#162447',
    shadowColor: '#0ff',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 10,
  },
  glowEffect: {
    position: 'absolute',
    bottom: -6,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#0ff',
    shadowColor: '#0ff',
    shadowOpacity: 0.9,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 0 },
  },
});
