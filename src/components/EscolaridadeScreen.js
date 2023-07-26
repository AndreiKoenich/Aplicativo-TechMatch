import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function EscolaridadeScreen() {
  const escolaridades = ['Ensino Médio', 'Graduação', 'Pós-Graduação', 'Mestrado', 'Doutorado'];
  const navigation = useNavigation();

  const handleEscolaridadePress = (escolaridade) => {
    // Realize qualquer lógica necessária com a escolaridade selecionada
    console.log('Escolaridade selecionada:', escolaridade);

    // Navegue para a tela de Cadastro e envie a escolaridade como parâmetro
    navigation.navigate('Cadastro', { escolaridade: escolaridade });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Escolha sua escolaridade:</Text>
      {escolaridades.map((escolaridade) => (
        <TouchableOpacity
          key={escolaridade}
          style={styles.escolaridadeItem}
          onPress={() => handleEscolaridadePress(escolaridade)}
        >
          <Text style={styles.escolaridadeText}>{escolaridade}</Text>
        </TouchableOpacity>
      ))}
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
  escolaridadeItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  escolaridadeText: {
    fontSize: 16,
  },
});
