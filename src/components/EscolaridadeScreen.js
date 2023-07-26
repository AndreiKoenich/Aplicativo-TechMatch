import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function EscolaridadeScreen() {
  const escolaridades = ['Ensino Médio', 'Graduação', 'Mestrado', 'Doutorado'];
  const navigation = useNavigation();

  const handleEscolaridadePress = (escolaridade) => {
    // Navegue para a tela de Questionario e envie a escolaridade como parâmetro
    navigation.navigate('Questionario', { escolaridade: escolaridade });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Qual seu grau de formação?</Text>
      <ScrollView style={styles.scrollContainer}>
        {escolaridades.map((escolaridade) => (
          <TouchableOpacity
            key={escolaridade}
            style={styles.escolaridadeItem}
            onPress={() => handleEscolaridadePress(escolaridade)}
          >
            <Text style={styles.escolaridadeText}>{escolaridade}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  scrollContainer: {
    flex: 1, // Ocupa todo o espaço disponível para permitir a rolagem
    marginTop: 20,
  },
  escolaridadeItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  escolaridadeText: {
    fontSize: 16,
  },
});
