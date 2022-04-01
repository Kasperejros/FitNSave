import React from 'react';
import { StyleSheet, Text, Button, View, Alert } from 'react-native';

export const HomePage = ({ navigation }) => {
  return (
    <Button
      title="Go to Tracker"
      onPress={() =>
        navigation.navigate('Tracker')
      }
    />
  );
};

export const Tracker = ({ navigation, route }) => {
  return <Text>Route to tracker</Text>;
};