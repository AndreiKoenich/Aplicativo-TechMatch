import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ResultadosScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.resultadosText}>Resultados</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultadosText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
