import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const opcoesTempoExperiencia = [
  'Nenhum',
  'Menos de um ano',
  '1 ano',
  '2 anos',
  '3 anos',
  '4 anos',
  '5 ou mais anos',
];

export default function TempoExperienciaScreen({ route }) {
  const [tempoExperienciaSelecionado, setTempoExperienciaSelecionado] = useState('');
  const navigation = useNavigation();

  const handleTempoExperienciaPress = (tempo) => {
    setTempoExperienciaSelecionado(tempo);
  };

  // Atualiza a resposta e retorna à tela anterior quando a opção for selecionada
  useEffect(() => {
    if (tempoExperienciaSelecionado) {
      route.params.setTempoExperiencia(tempoExperienciaSelecionado);
      navigation.goBack();
    }
  }, [tempoExperienciaSelecionado]);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Qual o seu tempo de experiência em programação?</Text>
      <ScrollView style={styles.scrollContainer}>
        {opcoesTempoExperiencia.map((opcao) => (
          <TouchableOpacity
            key={opcao}
            style={[styles.opcaoItem, tempoExperienciaSelecionado === opcao && styles.opcaoSelecionada]}
            onPress={() => handleTempoExperienciaPress(opcao)}
          >
            <Text style={styles.opcaoText}>{opcao}</Text>
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
    flex: 1,
    marginTop: 20,
  },
  opcaoItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  opcaoSelecionada: {
    backgroundColor: '#1E3799',
    borderColor: '#1E3799',
  },
  opcaoText: {
    fontSize: 16,
    color: '#000000',
  },
});
