import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View, Alert } from 'react-native';

export default function App() {
  console.log('dupa')
  return (
    <View style={styles.container}>
      <Text>FIT</Text>
      <Text>'N'</Text>
      <Text>SAVE</Text>
      <Button
        onPress={() => Alert.alert('START')}
        title="Start"
      />
      <Button
      onPress={() => Alert.alert('CONFIG')}
      title="Preferences"
      />
      <StatusBar style="auto" />
    </View>
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
