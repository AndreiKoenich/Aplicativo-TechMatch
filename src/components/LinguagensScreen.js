import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const linguagens = [
  'C',
  'C++',
  'C#',
  'CSS',
  'Go',
  'HTML',
  'Java',
  'JavaScript',
  'Kotlin',
  'PHP',
  'Python',
  'R',
  'Ruby',
  'Rust',
  'SQL',
  'Swift',
  'TypeScript',
];

export default function LinguagensScreen() {
  const navigation = useNavigation();
  const [selectedLinguagens, setSelectedLinguagens] = useState([]);

  const handleLinguagemPress = (linguagem) => {
    // Verifica se a linguagem já está selecionada e remove, ou adiciona à lista de selecionadas
    const updatedLinguagens = selectedLinguagens.includes(linguagem)
      ? selectedLinguagens.filter((lang) => lang !== linguagem)
      : [...selectedLinguagens, linguagem];

    setSelectedLinguagens(updatedLinguagens);
  };

  const handleConcluirPress = () => {
    // Navegue para a tela de Questionario e envie as linguagens selecionadas como parâmetro
    navigation.navigate('Questionario', { linguagens: selectedLinguagens });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Quais linguagens de programação você conhece?</Text>
      <ScrollView style={styles.scrollContainer}>
        {linguagens.map((linguagem) => (
          <TouchableOpacity
            key={linguagem}
            style={[
              styles.linguagemItem,
              {
                backgroundColor: selectedLinguagens.includes(linguagem) ? '#1E3799' : '#ffffff',
              },
            ]}
            onPress={() => handleLinguagemPress(linguagem)}
          >
            <Text
              style={[
                styles.linguagemText,
                {
                  color: selectedLinguagens.includes(linguagem) ? '#ffffff' : '#000000',
                },
              ]}
            >
              {linguagem}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.concluirButton} onPress={handleConcluirPress}>
        <Text style={styles.concluirButtonText}>Concluir</Text>
      </TouchableOpacity>
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
    flex: 1,
    marginTop: 20,
  },
  linguagemItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  linguagemText: {
    fontSize: 16,
    textAlign: 'center',
  },
  concluirButton: {
    backgroundColor: '#1E3799',
    borderRadius: 5,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  concluirButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});