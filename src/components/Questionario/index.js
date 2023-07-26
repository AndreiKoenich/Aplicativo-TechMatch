import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import EscolaridadeScreen from '../EscolaridadeScreen';
import IdadeScreen from '../IdadeScreen';
import LinguagensScreen from '../LinguagensScreen';
import SistemasScreen from '../SistemasScreen';
import TempoExperienciaScreen from '../TempoExperiencaScreen';
import FrameworkScreen from '../FrameworkScreen';

export default function Questionario({ route }) {
  const navigation = useNavigation();
  const [escolaridade, setEscolaridade] = useState('');
  const [idade, setIdade] = useState('');
  const [linguagens, setLinguagens] = useState([]);
  const [sistemas, setSistemas] = useState('');
  const [tempoExperiencia, setTempoExperiencia] = useState('');
  const [frameworks, setFrameworks] = useState([]);

  const handleEscolaridadePress = () => {
    navigation.navigate('EscolaridadeScreen');
  };

  const handleIdadePress = () => {
    navigation.navigate('IdadeScreen');
  };

  const handleLinguagensPress = () => {
    navigation.navigate('LinguagensScreen');
  };

  const handleSistemasPress = () => {
    navigation.navigate('SistemasScreen', { sistemas, setSistemas });
  };

  const handleTempoExperienciaPress = () => {
    navigation.navigate('TempoExperienciaScreen', { tempoExperiencia, setTempoExperiencia });
  };

  const handleFrameworksPress = () => {
    navigation.navigate('FrameworkScreen', { frameworks, setFrameworks });
  };

  const updateInformation = () => {
    const escolaridadeValue = route.params?.escolaridade;
    const idadeValue = route.params?.idade;
    const linguagensValue = route.params?.linguagens;
    const sistemasValue = route.params?.sistemas;
    const tempoExperienciaValue = route.params?.tempoExperiencia;
    const frameworksValue = route.params?.frameworks;

    if (escolaridadeValue) {
      setEscolaridade(escolaridadeValue);
    }
    if (idadeValue) {
      setIdade(idadeValue);
    }
    if (linguagensValue) {
      setLinguagens(linguagensValue);
    }
    if (sistemasValue) {
      setSistemas(sistemasValue);
    }
    if (tempoExperienciaValue) {
      setTempoExperiencia(tempoExperienciaValue);
    }
    if (frameworksValue) {
      setFrameworks(frameworksValue);
    }
  };

  useEffect(() => {
    updateInformation();
  }, [route.params]);

  const formatIdade = (idadeValue) => {
    if (idadeValue === '65 anos ou mais') {
      return '65 anos ou mais';
    } else {
      return idadeValue.concat(' anos');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Conte-nos sobre você!</Text>
      </View>

      <View style={styles.perguntaContainer}>
        <Text style={styles.pergunta}>Qual a sua idade?</Text>
        <TouchableOpacity style={styles.input} onPress={handleIdadePress}>
          <Text style={[styles.inputText, { color: idade ? 'black' : '#888' }]}>
            {idade ? formatIdade(idade) : 'Pressione para escolher'}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.perguntaContainer}>
        <Text style={styles.pergunta}>Qual o seu grau de formação?</Text>
        <TouchableOpacity style={styles.input} onPress={handleEscolaridadePress}>
          <Text style={[styles.inputText, { color: escolaridade ? 'black' : '#888' }]}>
            {escolaridade ? escolaridade : 'Pressione para escolher'}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.perguntaContainer}>
        <Text style={styles.pergunta}>Quais linguagens de programação você conhece?</Text>
        <TouchableOpacity style={styles.input} onPress={handleLinguagensPress}>
          <Text style={[styles.inputText, { color: linguagens.length > 0 ? 'black' : '#888' }]}>
            {linguagens.length > 0 ? linguagens.join(', ') : 'Pressione para escolher'}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.perguntaContainer}>
        <Text style={styles.pergunta}>Quais sistemas operacionais você conhece?</Text>
        <TouchableOpacity style={styles.input} onPress={handleSistemasPress}>
          <Text style={[styles.inputText, { color: sistemas ? 'black' : '#888' }]}>
            {sistemas.length > 0 ? sistemas.join(', ') : 'Pressione para escolher'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Nova pergunta sobre o tempo de experiência */}
      <View style={styles.perguntaContainer}>
        <Text style={styles.pergunta}>Quanto tempo de experiência você possui?</Text>
        <TouchableOpacity style={styles.input} onPress={handleTempoExperienciaPress}>
          <Text style={[styles.inputText, { color: tempoExperiencia ? 'black' : '#888' }]}>
            {tempoExperiencia ? tempoExperiencia : 'Pressione para escolher'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Nova pergunta sobre os frameworks e bibliotecas */}
      <View style={styles.perguntaContainer}>
        <Text style={styles.pergunta}>Quais frameworks e bibliotecas você conhece?</Text>
        <TouchableOpacity style={styles.input} onPress={handleFrameworksPress}>
          <Text style={[styles.inputText, { color: frameworks.length > 0 ? 'black' : '#888' }]}>
            {frameworks.length > 0 ? frameworks.join(', ') : 'Pressione para escolher'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Continuar adicionando as demais perguntas */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 80,
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
  perguntaContainer: {
    marginTop: 20,
  },
  pergunta: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  inputText: {
    fontSize: 16,
  },
});