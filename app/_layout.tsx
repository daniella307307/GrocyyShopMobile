import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    NunitoBold:require('../assets/fonts/Nunito-SemiBold.ttf'),
    NunitoRegular:require('../assets/fonts/Nunito-Regular.ttf'),
  });

  if (!loaded) return null;

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack initialRouteName='components/GettingStarted'>
        {/* Set GettingStarted as entry point */}
        <Stack.Screen name="GettingStarted" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
        <Stack.Screen name="components/GettingStarted" options={{ headerShown: false }}  />
        <Stack.Screen name="components/signup/SignUp" options={{ title: 'Register' , headerShown:false }}  />
        <Stack.Screen name="components/signup/SignIn" options={{ title: 'Login' , headerShown:false }}  />
        <Stack.Screen name="components/screens/Dashboard" options={{ headerShown: false }}  />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
