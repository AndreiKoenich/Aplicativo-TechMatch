import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Cadastro({ route }) {
  const navigation = useNavigation();
  const [escolaridade, setEscolaridade] = useState('');

  // Verifica se há escolaridade selecionada da tela EscolaridadeScreen
  React.useEffect(() => {
    if (route.params?.escolaridade) {
      setEscolaridade(route.params.escolaridade);
    }
  }, [route.params]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Cadastro</Text>
      </View>

      <Text style={styles.sectionText}>Quem é você?</Text>
      <TextInput style={styles.input} placeholder="Nome" />
      <TextInput style={styles.input} placeholder="E-mail" />

      {/* Mostra a escolaridade selecionada ou o campo de seleção */}
      <TouchableOpacity style={styles.input} onPress={() => navigation.navigate('EscolaridadeScreen')}>
        <Text style={styles.placeholderText}>{escolaridade || 'Escolaridade'}</Text>
      </TouchableOpacity>

      <TextInput style={styles.input} placeholder="Estado" />
      <TextInput style={styles.input} placeholder="Cidade" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingTop: 40,
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
  sectionText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginTop: 10,
    fontSize: 16,
  },
  placeholderText: {
    color: '#888',
    fontSize: 16,
  },
});
