// components/navigation/Navigation.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

// Import your screens
import Dashboard from '../screens/Dashboard';
import Cart from './Cart';
import Profile from './Profile';

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName: 'home' | 'shopping-cart' | 'person' = 'home';
          if (route.name === 'Dashboard') iconName = 'home';
          else if (route.name === 'Cart') iconName = 'shopping-cart';
          else if (route.name === 'Profile') iconName = 'person';
          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#162447',
        tabBarInactiveTintColor: '#999',
        tabBarStyle: { height: 60, paddingBottom: 5, paddingTop: 5 },
        tabBarLabelStyle: { fontSize: 12, fontFamily: 'NunitoRegular' },
      })}
    >
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
