import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function PerguntaUnicaEscolhaScreen({ route }) {
  const {titulo, opcoesResposta, key, respostas, setRespostas} = route.params;
  const navigation = useNavigation();

  const handlePress = (resposta) => {
    let respostasCopy = {...respostas}
    respostasCopy[key] = resposta
    setRespostas(respostasCopy)
    navigation.goBack()
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{titulo}</Text>
      <ScrollView style={styles.scrollContainer}>
        {opcoesResposta.map((resposta) => (
          <TouchableOpacity
            key={resposta}
            style={styles.respostaItem}
            onPress={() => handlePress(resposta)}
          >
            <Text style={styles.respostaText}>{resposta}</Text>
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
  respostaItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  respostaText: {
    fontSize: 16,
  },
});
