import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function PerfilScreen({ route, navigation }) {
  const { novoPerfil } = route.params;
  const nomeUsuario = novoPerfil.nome.split(' ')[0];

  const handleExcluirPerfil = () => {
    Alert.alert(
      'Excluir Perfil',
      'Deseja excluir o perfil?',
      [
        { text: 'Não', style: 'cancel' },
        { text: 'Sim', onPress: excluirPerfilConfirmado },
      ],
    );
  };

  const excluirPerfilConfirmado = async () => {
    try {
      // Obter os perfis do AsyncStorage
      const perfisData = await AsyncStorage.getItem('perfis');
      if (perfisData) {
        const perfis = JSON.parse(perfisData);
        // Excluir o perfil da lista de perfis
        const novosPerfis = perfis.filter((perfil) => perfil.nome !== novoPerfil.nome);
        // Salvar a nova lista de perfis no AsyncStorage
        await AsyncStorage.setItem('perfis', JSON.stringify(novosPerfis));
        console.log('Perfil excluído com sucesso!');
        // Redirecionar para a tela inicial
        navigation.popToTop();
      }
    } catch (error) {
      console.log('Erro ao excluir o perfil:', error);
    }
  };

  const handleRealizarTeste = () => {
    navigation.navigate('Questionario');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Bem-vindo, {nomeUsuario}!</Text>
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

      {/* Botões */}
      <TouchableOpacity
        style={[styles.button, styles.realizarTesteButton]}
        onPress={handleRealizarTeste}
      >
        <Text style={styles.buttonText}>Realizar teste</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.verUltimoResultadoButton]}>
        <Text style={styles.buttonText}>Ver último resultado</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.excluirPerfilButton]} onPress={handleExcluirPerfil}>
        <Text style={styles.excluirIcon}>X</Text>
        <Text style={styles.buttonText}>Excluir perfil</Text>
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
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    paddingVertical: 10,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    marginLeft: 10,
  },
  realizarTesteButton: {
    backgroundColor: '#1E3799',
  },
  verUltimoResultadoButton: {
    backgroundColor: '#1E3799',
  },
  excluirPerfilButton: {
    backgroundColor: '#FF5733',
  },
  excluirIcon: {
    fontSize: 18,
    color: 'white',
    marginRight: 10,
  },
});