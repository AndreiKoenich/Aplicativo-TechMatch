import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function PerfilScreen({ route, navigation }) {
  const [nome, setNome] = useState('');
  const [resultado, setResultado] = useState('');
  const { perfilAtual, vagaRecomendada } = route.params;

  if(perfilAtual && perfilAtual.nome != nome) {
    setNome(perfilAtual.nome.split(' ')[0])
    if(perfilAtual.resultado) {
      setResultado(perfilAtual.resultado)
    }
  }

  if(vagaRecomendada && vagaRecomendada.nome != resultado) {
    setResultado(vagaRecomendada.nome)
  }

  const handleExcluirPerfil = () => {
    Alert.alert(
      'Excluir Perfil',
      'Deseja excluir o perfil de ' + perfilAtual.nome + '?',
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
        const novosPerfis = perfis.filter((perfil) => perfil.nome !== perfilAtual.nome);
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
    navigation.navigate('Questionario', { perfilAtual: perfilAtual, setResultado: setResultado });
  };

  const handleVerResultado = async () => {
    try {
      const perfisData = await AsyncStorage.getItem('perfis');
      const perfis = JSON.parse(perfisData);
      const dadosPerfilAtual = perfis.find(perfil => perfil.name === perfilAtual.name)
      if (dadosPerfilAtual, dadosPerfilAtual.resultado) {
        navigation.navigate('ResultadosScreen', {
          dados: dadosPerfilAtual.resultado, 
          setResultado: setResultado, 
          perfilAtual: perfilAtual
        });
      }
    } catch (error) {
      console.log('Erro ao atualizar resultado do perfil:', error);
    }
  };

  return (
    <View style={styles.container}>
        <Text style={styles.headerText}>Bem-vindo, {nome}!</Text>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={[styles.button, styles.actionButton]}
            onPress={handleRealizarTeste}
          >
            <Text style={styles.buttonText}>Realizar teste</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.actionButton]} onPress={handleVerResultado}>
            <Text style={styles.buttonText}>Ver último resultado</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.actionButton]} onPress={navigation.goBack}>
            <Text style={styles.buttonText}>Alterar usuário</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.deleteButton]} onPress={handleExcluirPerfil}>
            <Text style={styles.excluirIcon}>X</Text>
            <Text style={styles.buttonText}>Excluir perfil</Text>
          </TouchableOpacity>
        </View>


      <View style={{marginLeft: 'auto', marginBottom: 32}}>
        <Image source={require('../../../assets/logo.png')} style={{width: 200, height: 100, resizeMode: 'contain'}}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  headerText: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 24,
  },
  buttonsContainer: {
    marginTop: 0
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
    borderRadius: 15,
    paddingVertical: 10,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    marginLeft: 10,
  },
  actionButton: {
    backgroundColor: '#000',
  },
  deleteButton: {
    marginTop: 50,
    backgroundColor: '#FF5733',
  },
  excluirIcon: {
    fontSize: 18,
    color: 'white',
    marginRight: 10,
  },
});