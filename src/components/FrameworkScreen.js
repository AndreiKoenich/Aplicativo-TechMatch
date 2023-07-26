import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function FrameworkScreen({ route }) {
  const frameworks = [
    'Node JS (JavaScript Framework)',
    'Express.js (JavaScript Framework)',
    'Django (Python Framework)',
    'Angular (JavaScript Framework)',
    'React JS  (JavaScript Library)',
    'React Native  (JavaScript Library)',
    'Spring Boot  (JavaScript Framework)',
    'Graph QL (JavaScript Library)',
    'Bootstrap (CSS Framework)',
    'Ruby on Rails  (Ruby Framework)',
    'Flask (Python Framework)',
    'jQuery  (JavaScript Library)',
    'Android SDK',
    'Symfony',
  ];

  const navigation = useNavigation();
  const [selectedFrameworks, setSelectedFrameworks] = useState(route.params?.frameworks || []);

  const handleFrameworkPress = (framework) => {
    // Verificar se o framework já está selecionado
    const isFrameworkSelected = selectedFrameworks.includes(framework);

    // Se já estiver selecionado, remova da lista de selecionados, caso contrário, adicione
    const updatedFrameworks = isFrameworkSelected
      ? selectedFrameworks.filter((item) => item !== framework)
      : [...selectedFrameworks, framework];

    // Atualize o estado dos frameworks selecionados
    setSelectedFrameworks(updatedFrameworks);
  };

  const handleSaveFrameworks = () => {
    // Navegue para a tela de Questionario e envie os frameworks selecionados como parâmetro
    navigation.navigate('Questionario', { frameworks: selectedFrameworks });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Quais frameworks e bibliotecas você conhece?</Text>
      <ScrollView style={styles.scrollContainer}>
        {frameworks.map((framework) => (
          <TouchableOpacity
            key={framework}
            style={[
              styles.frameworkItem,
              selectedFrameworks.includes(framework) ? styles.selectedFrameworkItem : null,
            ]}
            onPress={() => handleFrameworkPress(framework)}
          >
            <Text
              style={[
                styles.frameworkText,
                selectedFrameworks.includes(framework) ? styles.selectedFrameworkText : null,
              ]}
            >
              {framework}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.saveButton} onPress={handleSaveFrameworks}>
        <Text style={styles.saveButtonText}>Salvar</Text>
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
  frameworkItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  selectedFrameworkItem: {
    backgroundColor: '#1E3799',
    borderColor: '#1E3799',
  },
  frameworkText: {
    fontSize: 16,
  },
  selectedFrameworkText: {
    color: '#ffffff', // Altere a cor do texto selecionado para branco
  },
  saveButton: {
    backgroundColor: '#1E3799',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});