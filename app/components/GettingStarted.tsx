import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import Swiper from 'react-native-swiper';
import { Platform } from 'react-native';

if (Platform.OS !== 'web') {
  if (typeof global.setImmediate === 'undefined') {
    // @ts-ignore
    global.setImmediate = ((fn: any, ...args: any[]) => setTimeout(fn, 0, ...args)) as any;
  }
}

const { width } = Dimensions.get('window');

const images = [
  require('@/assets/images/strawberry.jpeg'),
  require('@/assets/images/vegetables.jpeg'),
  require('@/assets/images/grapes.jpeg'),
  require('@/assets/images/apples.jpeg'),
];

export default function GettingStarted() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Slideshow of Grocery Items */}
      <View style={styles.swiperContainer}>
        <Swiper
          autoplay
          autoplayTimeout={1}
          showsPagination
          dotStyle={styles.dot}
          activeDotStyle={styles.activeDot}
        >
          {images.map((img, index) => (
            <Image key={index} source={img} style={styles.slideImage} />
          ))}
        </Swiper>
      </View>

      {/* Text Section */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>Welcome To Grocery Shop</Text>
        <Text style={styles.description}>
          Embark on a culinary journey with fresh ingredients brought right to your kitchen.
        </Text>
      </View>

      {/* Continue Button */}
      <TouchableOpacity style={styles.button} onPress={() => {router.replace('/components/signup/SignUp')}}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#162447',
    alignItems: 'center',
    paddingBottom: 40,
  },
  swiperContainer: {
    width: '100%',
    height: '50%',
    backgroundColor: '#fff',
    borderBottomRightRadius: 50,
    overflow: 'hidden',
  },
  slideImage: {
    width: width,
    height: '100%',
    resizeMode: 'contain',
  },
  dot: {
    backgroundColor: 'rgba(255,255,255,0.4)',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 3,
  },
  activeDot: {
    backgroundColor: '#162447',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 3,
  },
  textContainer: {
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 15,
    marginBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 12,
    textAlign: 'center',
    letterSpacing: 0.5,
    fontFamily: 'NunitoBold',
  },
  description: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.85)',
    textAlign: 'center',
    lineHeight: 22,
    fontFamily: 'NunitoRegular',
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    elevation: 4,
    width: '90%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
  },
  buttonText: {
    color: '#162447',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
    fontFamily: 'NunitoBold',
  },
});
