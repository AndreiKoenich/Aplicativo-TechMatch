import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PerfilScreen({ route }) {
  const { novoPerfil } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Perfil do Usuário</Text>
      <View style={styles.itemContainer}>
        <Text style={styles.label}>Nome:</Text>
        <Text style={styles.value}>{novoPerfil.nome}</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.label}>E-mail:</Text>
        <Text style={styles.value}>{novoPerfil.email}</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.label}>Idade:</Text>
        <Text style={styles.value}>{novoPerfil.idade}</Text>
      </View>
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
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
  value: {
    fontSize: 18,
  },
});