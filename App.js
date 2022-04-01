import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, Button, View, Alert } from 'react-native';
import { HomePage } from './HomePage';
import Tracker from './Tracker';
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
        <Stack.Screen name="Tracker" component={Tracker} distance={1000} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'red'
  },
});
