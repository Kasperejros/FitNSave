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