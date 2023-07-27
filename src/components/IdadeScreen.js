import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function IdadeScreen() {
  const idades = Array.from({ length: 50 }, (_, index) => index + 16); // Gera um array com idades de 16 a 65 anos
  const navigation = useNavigation();
  const route = useRoute();
  const idadeAnterior = route.params?.idade;
  
  const handleIdadePress = (idade) => {
    // Verifica se a idade selecionada é "65 anos ou mais" para evitar duplicação de "anos"
    const novaIdade = idadeAnterior ? (idade === '65 anos ou mais' ? idade : idade) : idade;

    // Chama a função de retorno fornecida por meio dos parâmetros da rota com a nova idade selecionada
    route.params?.onIdadeSelecionada(novaIdade);

    // Retorna à tela anterior (Cadastro)
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Escolha sua idade:</Text>
      <ScrollView style={styles.scrollContainer}>
        {idades.map((idade) => (
          <TouchableOpacity
            key={idade}
            style={styles.idadeItem}
            onPress={() => handleIdadePress(idade === 65 ? '65 anos ou mais' : `${idade}`)}
          >
            <Text style={styles.idadeText}>
              {idade === 65 ? '65 anos ou mais' : `${idade} anos`}
            </Text>
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
  idadeItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  idadeText: {
    fontSize: 16,
  },
});