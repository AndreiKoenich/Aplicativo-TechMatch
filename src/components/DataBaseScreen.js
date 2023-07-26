import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function DataBaseScreen() {
  const [experienciaBancoDados, setExperienciaBancoDados] = useState('');
  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    // Envia a experiência com gerenciamento de banco de dados selecionada de volta para a tela do Questionario
    route.params?.setExperienciaBancoDados(experienciaBancoDados);
  }, [experienciaBancoDados, route.params]);

  const handleExperienciaPress = (experiencia) => {
    // Define a experiência com gerenciamento de banco de dados selecionada
    setExperienciaBancoDados(experiencia);

    // Navega de volta para a tela do Questionario após a seleção
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Você tem experiência com gerenciamento de banco de dados?</Text>
      <TouchableOpacity
        style={[
          styles.experienciaItem,
          experienciaBancoDados === 'Possuo' && styles.experienciaItemSelecionado,
        ]}
        onPress={() => handleExperienciaPress('Possuo')}
      >
        <Text
          style={[
            styles.experienciaText,
            experienciaBancoDados === 'Possuo' && styles.experienciaTextSelecionado,
          ]}
        >
          Possuo
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.experienciaItem,
          experienciaBancoDados === 'Não possuo' && styles.experienciaItemSelecionado,
        ]}
        onPress={() => handleExperienciaPress('Não possuo')}
      >
        <Text
          style={[
            styles.experienciaText,
            experienciaBancoDados === 'Não possuo' && styles.experienciaTextSelecionado,
          ]}
        >
          Não possuo
        </Text>
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
  experienciaItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  experienciaItemSelecionado: {
    backgroundColor: '#1E90FF',
  },
  experienciaText: {
    fontSize: 16,
    color: '#000000', // Cor do texto preto por padrão
  },
  experienciaTextSelecionado: {
    color: '#ffffff', // Cor do texto branco quando a opção está selecionada
  },
});