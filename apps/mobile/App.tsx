import { ClerkProvider } from '@clerk/clerk-expo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import { useFonts } from 'expo-font';

// Mock screens
const SignInScreen = () => (
  <View style={styles.screen}>
    <Text style={styles.text}>Sign In Screen</Text>
  </View>
);

const DashboardScreen = () => (
  <View style={styles.screen}>
    <Text style={styles.text}>Dashboard Screen</Text>
  </View>
);

const CreateBombScreen = () => (
  <View style={styles.screen}>
    <Text style={styles.text}>Create Bomb Screen</Text>
  </View>
);

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
    'Inter-Medium': require('./assets/fonts/Inter-Medium.ttf'),
    'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.center}>
        <Text>Loading...</Text>
      </View>
    );
  }

  const clerkPublishableKey = Constants.expoConfig?.extra?.CLERK_PUBLISHABLE_KEY || 'pk_test';

  return (
    <ClerkProvider publishableKey={clerkPublishableKey}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SignIn">
          <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Dashboard" component={DashboardScreen} />
          <Stack.Screen name="CreateBomb" component={CreateBombScreen} options={{ title: 'Create Bomb' }} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 18,
    fontFamily: 'Inter-Medium',
  },
}); 