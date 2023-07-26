import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function RedesScreen() {
  const [experienciaRedes, setExperienciaRedes] = useState('');
  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    route.params?.setExperienciaRedes(experienciaRedes);
  }, [experienciaRedes, route.params]);

  const handleRedesPress = (experiencia) => {
    setExperienciaRedes(experiencia);

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Você possui conhecimento sobre redes de computadores e protocolos de comunicação?</Text>
      <TouchableOpacity
        style={[
          styles.experienciaItem,
          experienciaRedes === 'Sim' && styles.experienciaItemSelecionado,
        ]}
        onPress={() => handleRedesPress('Sim')}
      >
        <Text
          style={[
            styles.experienciaText,
            experienciaRedes === 'Sim' && styles.experienciaTextSelecionado,
          ]}
        >
          Sim
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.experienciaItem,
          experienciaRedes === 'Não' && styles.experienciaItemSelecionado,
        ]}
        onPress={() => handleRedesPress('Não')}
      >
        <Text
          style={[
            styles.experienciaText,
            experienciaRedes === 'Não' && styles.experienciaTextSelecionado,
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