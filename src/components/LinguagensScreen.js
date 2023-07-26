import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LinguagensScreen({ route }) {
  const [linguagensSelecionadas, setLinguagensSelecionadas] = useState([]);
  const linguagensProgramacao = [
    'JavaScript',
    'Python',
    'Java',
    'C++',
    'C#',
    'TypeScript',
    'Ruby',
    'Swift',
    'PHP',
    'Go',
    'Kotlin',
    'Rust',
    'Dart',
    'Lua',
  ];
  const navigation = useNavigation();

  const handleLinguagemPress = (linguagem) => {
    // Verifica se a linguagem já está selecionada
    const isSelected = linguagensSelecionadas.includes(linguagem);

    if (isSelected) {
      // Se a linguagem já está selecionada, remove da lista de selecionadas
      const updatedLinguagens = linguagensSelecionadas.filter((item) => item !== linguagem);
      setLinguagensSelecionadas(updatedLinguagens);
    } else {
      // Se a linguagem não está selecionada, adiciona à lista de selecionadas
      setLinguagensSelecionadas([...linguagensSelecionadas, linguagem]);
    }
  };

  const handleSalvarPress = () => {
    // Navegue para a tela de Questionario e envie as linguagens selecionadas como parâmetro
    navigation.navigate('Questionario', { linguagens: linguagensSelecionadas });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Quais linguagens de programação você conhece?</Text>
      <ScrollView style={styles.scrollContainer}>
        {linguagensProgramacao.map((linguagem) => (
          <TouchableOpacity
            key={linguagem}
            style={[
              styles.linguagemItem,
              linguagensSelecionadas.includes(linguagem) && styles.linguagemItemSelecionado,
            ]}
            onPress={() => handleLinguagemPress(linguagem)}
          >
            <Text
              style={[
                styles.linguagemText,
                linguagensSelecionadas.includes(linguagem) && styles.linguagemTextSelecionado,
              ]}
            >
              {linguagem}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.salvarButton} onPress={handleSalvarPress}>
        <Text style={styles.salvarButtonText}>Salvar</Text>
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
  linguagemItemSelecionado: {
    backgroundColor: '#1E90FF',
  },
  linguagemText: {
    fontSize: 16,
    color: '#000000', // Cor do texto preto por padrão
  },
  linguagemTextSelecionado: {
    color: '#ffffff', // Cor do texto branco quando a opção está selecionada
  },
  salvarButton: {
    backgroundColor: '#1E3799',
    borderRadius: 5,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  salvarButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
