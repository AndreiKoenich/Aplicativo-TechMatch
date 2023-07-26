import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Questionario({ route }) {
  const navigation = useNavigation();
  const [escolaridade, setEscolaridade] = useState('');
  const [idade, setIdade] = useState('');

  const handleEscolaridadePress = () => {
    // Navegue para a tela de EscolaridadeScreen
    navigation.navigate('EscolaridadeScreen');
  };

  const handleIdadePress = () => {
    // Navegue para a tela de IdadeScreen
    navigation.navigate('IdadeScreen');
  };

  // Função para atualizar as informações de escolaridade e idade após retornar da tela correspondente
  const updateInformation = () => {
    const escolaridadeValue = route.params?.escolaridade;
    const idadeValue = route.params?.idade;
    if (escolaridadeValue) {
      setEscolaridade(escolaridadeValue);
    }
    if (idadeValue) {
      setIdade(idadeValue);
    }
  };

  // Chamando a função de atualização quando o componente é montado
  useEffect(() => {
    updateInformation();
  }, [route.params]);

  const formatIdade = (idadeValue) => {
    if (idadeValue === '65 anos ou mais') {
      return '65 anos ou mais';
    } else {
      return idadeValue.concat(' anos')
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Conte-nos sobre você!</Text>
      </View>

      <View style={styles.perguntaContainer}>
        <Text style={styles.pergunta}>Qual a sua idade?</Text>
        <TouchableOpacity style={styles.input} onPress={handleIdadePress}>
          <Text style={[styles.inputText, { color: idade ? 'black' : '#888' }]}>
            {idade ? formatIdade(idade) : 'Pressione para escolher'}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.perguntaContainer}>
        <Text style={styles.pergunta}>Qual a sua escolaridade?</Text>
        <TouchableOpacity style={styles.input} onPress={handleEscolaridadePress}>
          <Text style={[styles.inputText, { color: escolaridade ? 'black' : '#888' }]}>
            {escolaridade ? escolaridade : 'Pressione para escolher'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Continuar adicionando as demais perguntas */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 80, // Adicionando paddingBottom para que o conteúdo fique acima do teclado
  },
  header: {
    backgroundColor: '#1E3799',
    paddingVertical: 10,
    alignItems: 'center',
  },
  headerText: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  perguntaContainer: {
    marginTop: 20, // Espaço entre as perguntas
  },
  pergunta: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  inputText: {
    fontSize: 16,
  },
});