import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [idadeSelecionada, setIdadeSelecionada] = useState(null); // Estado para armazenar a idade selecionada
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    if (nome && email && idadeSelecionada) {
      setIsButtonEnabled(true);
    } else {
      setIsButtonEnabled(false);
    }
  }, [nome, email, idadeSelecionada]);

  useEffect(() => {
    // Atualizar a idade selecionada quando o parâmetro é recebido da tela IdadeScreen
    const idadeParam = route.params?.idadeSelecionada;
    if (idadeParam) {
      setIdadeSelecionada(idadeParam);
    }
  }, [route.params?.idadeSelecionada]);

  const handleCriarPerfilPress = () => {
    console.log('Perfil criado com os seguintes dados:');
    console.log('Nome:', nome);
    console.log('E-mail:', email);
    console.log('Idade:', idadeSelecionada);
  };

  const handleIdadePress = () => {
    navigation.navigate('IdadeScreen', { idadeSelecionada, onIdadeSelecionada: setIdadeSelecionada });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Cadastrar Perfil</Text>
      </View>

      <Text style={styles.sectionText}>Quem é você?</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={(text) => setNome(text)}
      />

      {/* Campo para selecionar a idade */}
      <TouchableOpacity style={[styles.input, idadeSelecionada ? styles.textInputSelected : null]} onPress={handleIdadePress}>
        <Text style={[styles.placeholderText, idadeSelecionada ? styles.placeholderTextSelected : null]}>
          {idadeSelecionada ? (idadeSelecionada === '65 anos ou mais' ? '65 anos ou mais' : `${idadeSelecionada} anos`) : 'Idade'}
        </Text>
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <TouchableOpacity
        style={[
          styles.input,
          styles.criarPerfilButton,
          isButtonEnabled ? styles.buttonEnabled : styles.buttonDisabled,
        ]}
        onPress={isButtonEnabled ? handleCriarPerfilPress : undefined}
        disabled={!isButtonEnabled}
      >
        <Text style={[styles.placeholderText, isButtonEnabled ? styles.buttonEnabledText : styles.buttonDisabledText]}>
          Criar Perfil
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
    color: '#000', // Cor do texto dos campos "Nome", "E-mail" e "Idade" antes da seleção
  },
  textInputSelected: {
    borderColor: '#ccc', // Cor da borda quando o campo está selecionado
  },
  placeholderText: {
    color: '#888',
    fontSize: 16,
  },
  placeholderTextSelected: {
    color: 'black', // Cor do texto quando o campo está selecionado
  },
  criarPerfilButton: {
    alignItems: 'center',
  },
  buttonEnabled: {
    backgroundColor: '#1E3799',
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
  buttonEnabledText: {
    color: 'white', // Cor do texto do botão quando está habilitado
  },
  buttonDisabledText: {
    color: '#888', // Cor do texto do botão quando está desabilitado
  },
});
