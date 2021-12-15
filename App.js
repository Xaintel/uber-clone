
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
// redux nunca lo entendi XDD

export default function App() {
  return (
    <Provider store={}>
      <View style={styles.container}>
        <Text>Vamos hacer un clone de Uber!</Text>
      </View>
    </Provider>

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
