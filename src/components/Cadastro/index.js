import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

export default function ProfileScreen() {
  const escolaridades = ['Ensino Médio', 'Graduação', 'Pós-Graduação', 'Mestrado', 'Doutorado'];

  return (
    <View style={styles.container}>
      {/* Parte Superior */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Cadastro</Text>
      </View>

      {/* Quem é você */}
      <Text style={styles.sectionText}>Quem é você?</Text>

      {/* Campo Nome */}
      <TextInput style={styles.input} placeholder="Nome" />

      {/* Campo E-mail */}
      <TextInput style={styles.input} placeholder="E-mail" />

      {/* Campo Escolaridade */}
      <TextInput style={styles.input} placeholder="Escolaridade" />

      {/* Campo Estado */}
      <TextInput style={styles.input} placeholder="Estado" />

      {/* Campo Cidade */}
      <TextInput style={styles.input} placeholder="Cidade" />
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