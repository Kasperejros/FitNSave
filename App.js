import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, Button, View, Alert } from 'react-native';
import { HomePage, Tracker } from './HomePage'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{ title: 'HomePage' }}
        />
        <Stack.Screen name="Tracker" component={Tracker} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
