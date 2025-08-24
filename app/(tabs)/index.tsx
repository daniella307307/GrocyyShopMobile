import { router } from 'expo-router';
import React from 'react';
import { View,Text,TouchableOpacity } from 'react-native';

function index() {
  return (
    <View>
      <Text>Index Screen</Text>
      <TouchableOpacity onPress={() => {router.replace('/components/GettingStarted')}}>
        <Text>Press Me</Text>
      </TouchableOpacity>
    </View>
  );
}

export default index;
