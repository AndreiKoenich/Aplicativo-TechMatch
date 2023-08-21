import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function MudarCadastro({ route, navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');

  const { perfilAtual } = route.params;

  useEffect(() => {
    if (perfilAtual) {
      setNome(perfilAtual.nome);
      setEmail(perfilAtual.email);
      setIdade(perfilAtual.idade.toString());
    }
  }, [perfilAtual]);

  const handleSalvar = async () => {
    try {
      const perfisData = await AsyncStorage.getItem('perfis');
      if (perfisData) {
        const perfis = JSON.parse(perfisData);
        const index = perfis.findIndex((perfil) => perfil.nome === perfilAtual.nome);
        if (index !== -1) {
          perfis[index] = { ...perfis[index], nome, email, idade: parseInt(idade) };
          await AsyncStorage.setItem('perfis', JSON.stringify(perfis));
          console.log('Dados de cadastro alterados com sucesso!');
          navigation.navigate('TelaInicial');
        }
      }
    } catch (error) {
      console.log('Erro ao alterar dados de cadastro:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.titleText}>Alterar dados</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Nome"
            value={nome}
            onChangeText={setNome}
          />

          <TextInput
            style={styles.input}
            placeholder="E-mail"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          <TextInput
            style={styles.input}
            placeholder="Idade"
            value={idade}
            onChangeText={setIdade}
            keyboardType="numeric"
          />
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSalvar}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  topContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 40,
    width: '100%',
  },
  bottomContainer: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: 40,
  },
  titleText: {
    fontSize: 32,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    width: '90%',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginTop: 10,
    fontSize: 16,
    color: '#000',
  },
  button: {
    backgroundColor: '#000',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '90%',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  }
});