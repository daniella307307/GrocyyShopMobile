// Cart.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Cart() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Your Cart is empty!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ebf0fc' },
  text: { fontSize: 20, fontFamily: 'NunitoBold', color: '#162447' },
});
