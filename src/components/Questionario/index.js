import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {PERGUNTASDATA} from './PerguntasData'

export default function Questionario({ route }) {
  const navigation = useNavigation();
  const [respostas, setRespostas] = useState({});

  const handleUnicaEscolhaPress = (pergunta) => {
    navigation.navigate('PerguntaUnicaEscolhaScreen', {
      titulo: pergunta.titulo,
      opcoesResposta: pergunta.respostas,
      key: pergunta.key,
      respostas: respostas,
      setRespostas: setRespostas
    })
  };

  const handleMultiplaEscolhaPress = (pergunta) => {
    console.log(JSON.stringify(pergunta))
    navigation.navigate('PerguntaMultiplaEscolhaScreen', {
      titulo: pergunta.titulo,
      selectedItems: respostas[pergunta.key] ?? [], 
      opcoesResposta: pergunta.respostas,
      key: pergunta.key,
      respostas: respostas,
      setRespostas: setRespostas
    }
    )
  };

  const handleResultadosPress = () => {
    navigation.navigate('ResultadosScreen', {
      dados: respostas, 
      setResultado: route.params?.setResultado, 
      perfilAtual: route.params?.perfilAtual
    });
  };

  return (
    <View>
      <View style = {{height: StatusBar.currentHeight, backgroundColor: '#FFF'}} />
      <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.headerText}>Conte-nos sobre você!</Text>

      {
        PERGUNTASDATA.map(pergunta => (
        pergunta.isMultipleChoice 
        ? <View style={styles.perguntaContainer} key = {pergunta.key}>
            <Text style={styles.pergunta}>{pergunta.titulo}</Text>
            <TouchableOpacity style={styles.input} onPress={() => {handleMultiplaEscolhaPress(pergunta)}}>
              <Text style={[styles.inputText, { color: respostas[pergunta.key]?.length ?? 0 > 0 ? 'black' : '#888' }]}>
                {respostas[pergunta.key]?.length ?? 0 > 0 ? respostas[pergunta.key].join(', ') : 'Pressione para escolher...'}
              </Text>
            </TouchableOpacity>
          </View>
        : <View style={styles.perguntaContainer} key = {pergunta.key}>
            <Text style={styles.pergunta}>{pergunta.titulo}</Text>
            <TouchableOpacity style={styles.input} onPress={() => {handleUnicaEscolhaPress(pergunta)}}>
              <Text style={[styles.inputText, { color: respostas[pergunta.key]?.length ?? 0 > 0 ? 'black' : '#888' }]}>
                {respostas[pergunta.key]?.length ?? 0 > 0 ? respostas[pergunta.key] : 'Pressione para escolher...'}
              </Text>
            </TouchableOpacity>
          </View>
        ))
      }

      <TouchableOpacity
        style={[
          styles.input,
          styles.verificarButton
        ]}
        onPress={ handleResultadosPress }
      >
        <Text style={styles.verificarButtonText}>
        Verificar Resultados
        </Text>
      </TouchableOpacity>

    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 80,
  },
  headerText: {
    fontSize: 32,
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 16
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
  verificarButton: {
    backgroundColor: '#000',
    marginTop: 32,
    alignItems: 'center',
    marginBottom: 32,
  },
  verificarButtonText: {
    color: '#FFF',
    fontSize: 16,
  },
});