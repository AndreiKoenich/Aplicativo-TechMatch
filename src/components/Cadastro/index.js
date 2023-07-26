import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Cadastro({ route }) {
  const navigation = useNavigation();
  const [escolaridade, setEscolaridade] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [estado, setEstado] = useState('');
  const [cidade, setCidade] = useState('');
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  useEffect(() => {
    if (route.params?.escolaridade) {
      setEscolaridade(route.params.escolaridade);
    }
  }, [route.params]);

  useEffect(() => {
    if (nome && email && escolaridade && estado && cidade) {
      setIsButtonEnabled(true);
    } else {
      setIsButtonEnabled(false);
    }
  }, [nome, email, escolaridade, estado, cidade]);

  const handleCriarPerfilPress = () => {
    console.log('Perfil criado com os seguintes dados:');
    console.log('Nome:', nome);
    console.log('E-mail:', email);
    console.log('Escolaridade:', escolaridade);
    console.log('Estado:', estado);
    console.log('Cidade:', cidade);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Cadastro</Text>
      </View>

      <Text style={styles.sectionText}>Quem é você?</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={(text) => setNome(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      {/* Mostra a escolaridade selecionada ou o campo de seleção */}
      <TouchableOpacity style={[styles.input, escolaridade ? styles.selectedEscolaridade : null]} onPress={() => navigation.navigate('EscolaridadeScreen')}>
        <Text style={[styles.placeholderText, escolaridade ? styles.selectedText : null]}>
          {escolaridade || 'Escolaridade'}
        </Text>
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder="Estado"
        value={estado}
        onChangeText={(text) => setEstado(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Cidade"
        value={cidade}
        onChangeText={(text) => setCidade(text)}
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
  },
  placeholderText: {
    color: '#888',
    fontSize: 16,
  },
  selectedEscolaridade: {
    borderColor: 'black', // Cor da borda quando a escolaridade é selecionada
  },
  selectedText: {
    color: 'black', // Cor do texto quando a escolaridade é selecionada
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
    color: 'black', // Cor do texto do botão quando está habilitado
  },
  buttonDisabledText: {
    color: '#888', // Cor do texto do botão quando está desabilitado
  },
});
