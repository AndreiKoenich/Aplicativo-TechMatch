import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { encontrarVagaAdequada } from './AlgoritmoCorrespondencia';

export default function ResultadosScreen({ route, navigation }) {
  // Extrair os dados recebidos dos parâmetros da rota
  const dados = route.params;

  // Chamar o algoritmo de correspondência passando os dados recebidos
  const vagaRecomendada = encontrarVagaAdequada(dados);

  // Imprimir a vaga recomendada no console para verificar
  console.log('Vaga recomendada:', vagaRecomendada);

  const handleVoltarPerfil = () => {
    navigation.navigate('PerfilScreen', { novoPerfil: dados });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Resultados</Text>
      </View>

      {/* Aqui você pode exibir a vaga recomendada na tela com a formatação desejada */}
      {vagaRecomendada ? (
        <View style={styles.resultadosContainer}>
          <Text style={styles.subtitulo}>Vaga:</Text>
          <Text style={styles.vagaText}>{vagaRecomendada.nome}</Text>

          <Text style={styles.subtitulo}>Média Salarial:</Text>
          <Text style={styles.salarioText}>R$ {vagaRecomendada.salario_medio}</Text>

          <Text style={styles.subtitulo}>Descrição:</Text>
          <Text style={styles.descricaoText}>{vagaRecomendada.descricao}</Text>

          {/* Botão para voltar para a PerfilScreen */}
          <TouchableOpacity style={[styles.button, styles.concluirButton]} onPress={handleVoltarPerfil}>
            <Text style={styles.buttonText}>Concluir</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Text style={styles.semVagaText}>Não há nenhuma vaga recomendada para o seu perfil.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 20, // Adicionamos um espaçamento superior para afastar o conteúdo da parte superior
  },
  header: {
    backgroundColor: 'blue',
    width: '100%',
    paddingVertical: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  },
  resultadosContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
    alignItems: 'flex-start',
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  vagaText: {
    fontSize: 16,
    marginBottom: 10,
  },
  salarioText: {
    fontSize: 16,
    marginBottom: 10,
  },
  descricaoText: {
    fontSize: 16,
    textAlign: 'justify',
  },
  semVagaText: {
    fontSize: 18,
    marginTop: 20,
    color: 'red',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 50,
    marginTop: 30,
    backgroundColor: '#1E3799',
    alignSelf: 'center',
  },
  concluirButton: {
    backgroundColor: '#1E3799',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
});