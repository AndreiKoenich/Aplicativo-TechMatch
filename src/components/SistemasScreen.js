import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SistemasScreen({ route }) {
  const sistemas = ['Android', 'Linux', 'macOS', 'UNIX', 'Windows'];
  const navigation = useNavigation();
  const [sistemasSelecionados, setSistemasSelecionados] = useState([]); // Novo estado para armazenar os sistemas selecionados

  const handleSistemaPress = (sistema) => {
    // Verificar se o sistema já está selecionado ou não e atualizar o estado
    if (sistemasSelecionados.includes(sistema)) {
      setSistemasSelecionados(sistemasSelecionados.filter((s) => s !== sistema));
    } else {
      setSistemasSelecionados([...sistemasSelecionados, sistema]);
    }
  };

  const handleContinuarPress = () => {
    // Navegar de volta para o Questionario enviando os sistemas selecionados como parâmetro
    route.params.setSistemas(sistemasSelecionados);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Quais sistemas operacionais você conhece?</Text>
      <ScrollView style={styles.scrollContainer}>
        {sistemas.map((sistema) => (
          <TouchableOpacity
            key={sistema}
            style={[
              styles.sistemaItem,
              sistemasSelecionados.includes(sistema) && styles.sistemaSelecionado, // Estilizar o sistema selecionado
            ]}
            onPress={() => handleSistemaPress(sistema)}
          >
            <Text
              style={[
                styles.sistemaText,
                sistemasSelecionados.includes(sistema) && styles.sistemaTextSelecionado, // Estilizar o texto do sistema selecionado
              ]}
            >
              {sistema}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.continuarButton} onPress={handleContinuarPress}>
        <Text style={styles.continuarButtonText}>Continuar</Text>
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
  sistemaItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  sistemaSelecionado: {
    backgroundColor: '#1E3799', // Cor de fundo quando selecionado
  },
  sistemaText: {
    fontSize: 16,
  },
  sistemaTextSelecionado: {
    color: '#ffffff', // Cor do texto quando selecionado
  },
  continuarButton: {
    backgroundColor: '#1E3799',
    borderRadius: 5,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  continuarButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});