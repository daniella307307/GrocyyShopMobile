import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

// Import your screens
import Dashboard from './Dashboard';
import Cart from './Cart'; // You can create a placeholder screen
import Profile from './Profile'; // Placeholder screen

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            let iconName: keyof typeof MaterialIcons.glyphMap = 'home';
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
    </NavigationContainer>
  );
}
