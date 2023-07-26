import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function MetodologiaScreen() {
  const [experienciaMetodologia, setExperienciaMetodologia] = useState('');
  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    route.params?.setExperienciaMetodologia(experienciaMetodologia);
  }, [experienciaMetodologia, route.params]);

  const handleExperienciaPress = (experiencia) => {
    setExperienciaMetodologia(experiencia);

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Você já participou de projetos de desenvolvimento ágil ou metodologias similares?</Text>
      <TouchableOpacity
        style={[
          styles.experienciaItem,
          experienciaMetodologia === 'Sim' && styles.experienciaItemSelecionado,
        ]}
        onPress={() => handleExperienciaPress('Sim')}
      >
        <Text
          style={[
            styles.experienciaText,
            experienciaMetodologia === 'Sim' && styles.experienciaTextSelecionado,
          ]}
        >
          Sim
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.experienciaItem,
          experienciaMetodologia === 'Não' && styles.experienciaItemSelecionado,
        ]}
        onPress={() => handleExperienciaPress('Não')}
      >
        <Text
          style={[
            styles.experienciaText,
            experienciaMetodologia === 'Não' && styles.experienciaTextSelecionado,
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