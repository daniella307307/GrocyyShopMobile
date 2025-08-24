import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';

function SignUp() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <MaterialIcons name="arrow-back" size={24} color="#162447" />
      </TouchableOpacity>

      {/* Title & Description */}
      <Text style={styles.title}>Register Now!</Text>
      <Text style={styles.desc}>
        Sign up with your email and password to access our grocery privileges.
      </Text>

      {/* Input Fields */}
      <View style={styles.form}>
        <View style={styles.input}>
          <MaterialIcons name="person" size={24} color="#162447" />
          <TextInput
            placeholder="Full Name"
            placeholderTextColor="#999"
            style={styles.inputText}
          />
        </View>
        <View style={styles.input}>
          <MaterialIcons name="email" size={24} color="#162447" />
          <TextInput
            placeholder="Email Address"
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="#999"
            style={styles.inputText}
          />
        </View>
        <View style={styles.input}>
          <MaterialIcons name="lock" size={24} color="#162447" />
          <TextInput
            placeholder="Password"
            secureTextEntry
            placeholderTextColor="#999"
            style={styles.inputText}
          />
        </View>
        <View style={styles.input}>
          <MaterialIcons name="lock" size={24} color="#162447" />
          <TextInput
            placeholder="Confirm Password"
            secureTextEntry
            placeholderTextColor="#999"
            style={styles.inputText}
          />
        </View>

        {/* Sign Up Button */}
        <TouchableOpacity style={styles.button} onPress={() => router.replace('/components/navigation/Dashboard')}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        {/* Divider */}
        <View style={styles.dividerContainer}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>OR</Text>
          <View style={styles.divider} />
        </View>

        {/* Login Link */}
        <View style={styles.loginContainer}>
          <Text style={styles.altText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => router.replace('/components/signup/SignIn')}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </View>

        {/* Google Sign Up */}
        <TouchableOpacity style={styles.googleButton}>
          <Image
            source={require('@/assets/images/google.jpeg')}
            style={styles.googleIcon}
          />
          <Text style={styles.googleText}>Continue with Google</Text>
        </TouchableOpacity>

         {/* Apple Sign Up */}
        <TouchableOpacity style={styles.googleButton}>
          <Image
            source={require('@/assets/images/apple.jpeg')}
            style={styles.googleIcon}
          />
          <Text style={styles.googleText}>Continue with Apple</Text>
        </TouchableOpacity>
        {/* Terms */}
        <Text style={styles.termsText}>
          By signing up, you agree to our Terms & Conditions and Privacy Policy.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7faff',
    paddingHorizontal: 20,
  },
  backButton: {
    marginTop: 40,
    backgroundColor: '#ebf0fc',
    alignSelf: 'flex-start',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    color: '#162447',
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 8,
    fontFamily:"NunitoBold",
    marginLeft: 10,
  },
  desc: {
    color: 'rgba(22,36,71,0.7)',
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 30,
    marginLeft: 10,
  },
  form: {
    alignItems: 'center',
    width: '100%',
  },
  input: {
    backgroundColor: '#fff',
    width: '95%',
    height: 55,
    borderRadius: 30,
    paddingHorizontal: 15,
    marginBottom: 18,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 4,
    gap: 10,
    shadowOffset: { width: 0, height: 2 },
  },
  inputText: {
    fontSize: 16,
    flex: 1,
    fontFamily: 'NunitoRegular',
  },
  button: {
    backgroundColor: '#162447',
    width: '95%',
    height: 55,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 3 },
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
    fontFamily: 'NunitoBold',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 25,
    width: '90%',
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  dividerText: {
    marginHorizontal: 10,
    color: '#999',
    fontWeight: '600',
    fontFamily: 'NunitoBold',
  },
  loginContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  altText: {
    color: 'rgba(22,36,71,0.7)',
    fontSize: 16,
    fontFamily: 'NunitoRegular',
  },
  loginText: {
    color: '#162447',
    fontWeight: '700',
    fontSize: 16,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ebf0fc',
    padding: 12,
    borderRadius: 30,
    width: '95%',
    marginBottom: 20,
  },
  googleIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginRight: 10,
    borderRadius: 15,
  },
  googleText: {
    fontSize: 16,
    color: '#162447',
    fontFamily: 'NunitoRegular',
  },
  termsText: {
    fontSize: 12,
    color: '#999',
    textAlign: 'center',
    width: '90%',
    marginBottom: 30,
    fontFamily: 'NunitoRegular',
  },
});

export default SignUp;
