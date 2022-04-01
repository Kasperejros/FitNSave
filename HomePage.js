import React from 'react';
import { StyleSheet, Text, Button, View, Alert } from 'react-native';

export const HomePage = ({ navigation }) => {
  return (
    <View>
    <Button
      title="Go to Tracker"
      onPress={() =>
        navigation.navigate('Tracker', { distance: 1000, price: 5.70 })

      }
    />
    <Button
      title="Preferences"
      onPress={() =>
        navigation.navigate('Preferences', {styles: styles})
      }
    />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'red',
    padding: 10,
  },
});