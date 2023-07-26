import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ResultadosScreen({ route }) {
  // Extrair os dados recebidos dos parâmetros da rota
  const dados = route.params;

  // Imprimir os dados no console
  console.log('Dados recebidos:', dados);

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
