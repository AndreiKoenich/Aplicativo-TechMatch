import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function LegadosScreen() {
  const [experienciaLegados, setExperienciaLegados] = useState('');
  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    route.params?.setExperienciaLegados(experienciaLegados);
  }, [experienciaLegados, route.params]);

  const handleExperienciaPress = (experiencia) => {
    setExperienciaLegados(experiencia);

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Você já atuou em projetos de migração de sistemas legados para tecnologias modernas? </Text>
      <TouchableOpacity
        style={[
          styles.experienciaItem,
          experienciaLegados === 'Sim' && styles.experienciaItemSelecionado,
        ]}
        onPress={() => handleExperienciaPress('Sim')}
      >
        <Text
          style={[
            styles.experienciaText,
            experienciaLegados === 'Sim' && styles.experienciaTextSelecionado,
          ]}
        >
          Sim
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.experienciaItem,
          experienciaLegados === 'Não' && styles.experienciaItemSelecionado,
        ]}
        onPress={() => handleExperienciaPress('Não')}
      >
        <Text
          style={[
            styles.experienciaText,
            experienciaLegados === 'Não' && styles.experienciaTextSelecionado,
          ]}
        >
          Não
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