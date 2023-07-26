import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function IdadeScreen() {
  const idades = Array.from({ length: 50 }, (_, index) => index + 16); // Gera um array com idades de 16 a 65 anos
  const navigation = useNavigation();

  const handleIdadePress = (idade) => {
    // Navegue para a tela de Questionario e envie a idade como parâmetro
    navigation.navigate('Questionario', { idade: idade });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Escolha sua idade:</Text>
      <ScrollView style={styles.scrollContainer}>
        {idades.map((idade) => (
          <TouchableOpacity
            key={idade}
            style={styles.idadeItem}
            onPress={() => handleIdadePress(idade)}
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