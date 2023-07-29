import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { TextInput } from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [idadeSelecionada, setIdadeSelecionada] = useState(''); // Estado para armazenar a idade selecionada
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

  const handleCriarPerfilPress = async () => {
    console.log('Perfil criado com os seguintes dados:');
    console.log('Nome:', nome);
    console.log('E-mail:', email);
    console.log('Idade:', idadeSelecionada);

    // Criar um objeto com os dados do perfil
    const novoPerfil = {
      nome,
      email,
      idade: idadeSelecionada,
    };

    try {
      // Armazenar o perfil no AsyncStorage
      await savePerfil(novoPerfil);
      console.log('Perfil armazenado com sucesso!');
      navigation.navigate('TelaInicial'); // Redirecionar para a tela inicial após criar o perfil
    } catch (error) {
      console.log('Erro ao armazenar o perfil:', error);
    }
  };

  const handleIdadePress = () => {
    navigation.navigate('IdadeScreen', { idadeSelecionada, onIdadeSelecionada: setIdadeSelecionada });
  };

  const savePerfil = async (perfil) => {
    try {
      // Obter os perfis existentes do AsyncStorage
      const perfisData = await AsyncStorage.getItem('perfis');
      const perfisArray = perfisData ? JSON.parse(perfisData) : [];

      // Adicionar o novo perfil à lista de perfis
      perfisArray.push(perfil);

      // Salvar a lista atualizada de perfis no AsyncStorage
      await AsyncStorage.setItem('perfis', JSON.stringify(perfisArray));
    } catch (error) {
      throw new Error('Erro ao salvar perfil no AsyncStorage.');
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.sectionText}>Quem é você?</Text>
        
        <View style={styles.inputContainer}>
          <TextInput
            mode='outlined'
            label="Nome"
            activeOutlineColor='black'
            value={nome}
            onChangeText={(text) => setNome(text)}
          />

          <TextInput
            mode='outlined'
            keyboardType='number-pad'
            label="Idade"
            activeOutlineColor='black'
            value={idadeSelecionada}
            onChangeText={(text) => setIdadeSelecionada(text)}
          />

          <TextInput
            mode='outlined'
            label="E-mail"
            activeOutlineColor='black'
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
      </View>
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
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
  },
  inputContainer: {
    marginTop: 32
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
    fontSize: 32,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 16,
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
  textInputFilled: {
    borderColor: 'black', // Cor da borda quando o campo está preenchido
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
    marginBottom: 32,
  },
  buttonEnabled: {
    backgroundColor: '#000',
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