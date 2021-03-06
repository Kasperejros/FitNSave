import React from 'react';
import { StyleSheet, Text, Button, View, Alert } from 'react-native';
import Travel from './location';
export const HomePage = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Go to Tracker"
        onPress={() =>
          navigation.navigate('Tracker', { distance: 1000, price: 6.70 })
        }
      />
      <Button
        title="Testuj dżipiesa"
        onPress={() => {
          try {
            const t = new Travel();
            t.startTravel();
            setTimeout(() => {
              console.log(t.traveledDistance)
            }, 1000);
          } catch (e) {
            console.error(e);
          }
        }}
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