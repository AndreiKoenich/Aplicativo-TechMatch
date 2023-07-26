import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function EmergentesScreen({ route }) {
  const [tecnologiasSelecionadas, setTecnologiasSelecionadas] = useState([]);
  const tecnologiasEmergentes = [
    'Aprendizado de Máquina',
    'Big Data',
    'Blockchain',
    'Computação em Nuvem',
    'Edge Computing',
    'Inteligência Artificial',
    'Internet das Coisas',
    'Internet das Coisas Industrial',
    'No-code/Low-code',
    'Realidade Estendida',
  ];
  const navigation = useNavigation();

  const handleTecnologiaPress = (tecnologia) => {
    // Verifica se a tecnologia já está selecionada
    const isSelected = tecnologiasSelecionadas.includes(tecnologia);

    if (isSelected) {
      // Se a tecnologia já está selecionada, remove da lista de selecionadas
      const updatedTecnologias = tecnologiasSelecionadas.filter((item) => item !== tecnologia);
      setTecnologiasSelecionadas(updatedTecnologias);
    } else {
      // Se a tecnologia não está selecionada, adiciona à lista de selecionadas
      setTecnologiasSelecionadas([...tecnologiasSelecionadas, tecnologia]);
    }
  };

  const handleSalvarPress = () => {
    // Navegue para a tela de Questionario e envie as tecnologias selecionadas como parâmetro
    navigation.navigate('Questionario', { tecnologiasEmergentes: tecnologiasSelecionadas });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Quais tecnologias emergentes você conhece?</Text>
      <ScrollView style={styles.scrollContainer}>
        {tecnologiasEmergentes.map((tecnologia) => (
          <TouchableOpacity
            key={tecnologia}
            style={[
              styles.tecnologiaItem,
              tecnologiasSelecionadas.includes(tecnologia) && styles.tecnologiaItemSelecionado,
            ]}
            onPress={() => handleTecnologiaPress(tecnologia)}
          >
            <Text
              style={[
                styles.tecnologiaText,
                tecnologiasSelecionadas.includes(tecnologia) && styles.tecnologiaTextSelecionado,
              ]}
            >
              {tecnologia}
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
  tecnologiaItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  tecnologiaItemSelecionado: {
    backgroundColor: '#1E90FF',
  },
  tecnologiaText: {
    fontSize: 16,
    color: '#000000', // Cor do texto preto por padrão
  },
  tecnologiaTextSelecionado: {
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