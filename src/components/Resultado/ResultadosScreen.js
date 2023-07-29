import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Dimensions, ScrollView } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { FontAwesome } from '@expo/vector-icons';
import { encontrarVagaAdequada } from '../AlgoritmoCorrespondencia';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ResultadosScreen({ route, navigation }) {
  // Extrair os dados recebidos dos parâmetros da rota
  const [activeSlide, setActiveSlide] = useState(0);
  const dados = route.params.dados;

  // Chamar o algoritmo de correspondência passando os dados recebidos
  const vagaRecomendada = encontrarVagaAdequada(dados);
  const vagasRecomendadas = [vagaRecomendada, vagaRecomendada, vagaRecomendada]

  const chartConfig = {
    backgroundColor: "#e26a00",
    backgroundGradientFrom: "#fb8c00",
    backgroundGradientTo: "#ffa726",
    decimalPlaces: 0, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16
    },
    propsForDots: {
      r: "6",
      strokeWidth: "2",
      stroke: "#ffa726"
    }
  }

  const buildData = () => {
    const data = [
      {
        name: "Opcao A",
        salario: '6000',
        descricao: 'Desenvolvedor Web é responsável por criar e manter aplicações web, utilizando tecnologias como HTML, CSS, JavaScript e frameworks como React ou Angular. Além disso, trabalha com bancos de dados, serviços web e integração com APIs. É fundamental ter conhecimentos em programação e design para criar interfaces amigáveis e responsivas.',
        url: 'roadmapURL',
        pontos: 60,
        color: "#ae2c29",
        legendFontColor: "#7F7F7F",
        legendFontSize: 16
      },
      {
        name: "Opcao B",
        salario: '7000',
        descricao: 'Desenvolvedor Mobile desenvolve aplicativos para dispositivos móveis, como smartphones e tablets. Utiliza linguagens como JavaScript, Kotlin ou Swift, e frameworks como React Native ou Android SDK. O profissional deve ter conhecimento em desenvolvimento de interfaces e experiência do usuário para criar aplicativos atraentes e funcionais.',
        url: 'roadmapURL',
        pontos: 25,
        color: "#332625",
        legendFontColor: "#7F7F7F",
        legendFontSize: 16
      },
      {
        name: "Opcao C",
        salario: '8000',
        descricao: 'Engenheiro de Dados é responsável por projetar e manter a infraestrutura de dados da empresa. Utiliza tecnologias como Hadoop, Spark, bancos de dados NoSQL e SQL. O profissional deve ter habilidades em análise e modelagem de dados, além de conhecimentos em processamento e análise de grandes volumes de dados.',
        url: 'roadmapURL',
        pontos: 16,
        color: "#bcafb6",
        legendFontColor: "#7F7F7F",
        legendFontSize: 16
      }
    ];
    return data
  };

  const updateResultado = async () => {
    try {
      // Obter os perfis do AsyncStorage
      const perfisData = await AsyncStorage.getItem('perfis');
      const perfis = JSON.parse(perfisData);
      const novosPerfis = perfis.map( (perfil) => {
        if (perfil.nome === route.params.perfilAtual.nome) {
          let perfilAtualizado = perfil
          perfilAtualizado.resultado = vagaRecomendada.nome
          return perfilAtualizado
        }
        return perfil
      });
  
        await AsyncStorage.setItem('perfis', JSON.stringify(novosPerfis));
  
      } catch (error) {
        console.log('Erro ao atualizar resultado do perfil:', error);
      }
  };

  _renderItem = ({item, index}) => {
    return (
      <View style={styles.resultadosContainer} elevation={10}>
        <View style={styles.cardTextPadding}>
          <Text style={styles.subtitulo}>Vaga:</Text>
          <Text style={styles.vagaText}>{item.name}</Text>

          <Text style={styles.subtitulo}>Média Salarial:</Text>
          <Text style={styles.salarioText}>R$ {item.salario}</Text>

          <Text style={styles.subtitulo}>Descrição:</Text>
          <Text style={styles.descricaoText}>{item.descricao}</Text>
        </View>
        <TouchableOpacity style={[styles.button]} onPress={handleVoltarPerfil}>
          <Text style={styles.buttonText}>Ir para roadmap</Text>
        </TouchableOpacity>
      </View>
    );
}

  const handleVoltarPerfil = () => {
    updateResultado()
    route.params.setResultado(vagaRecomendada.nome)
    navigation.goBack()
    navigation.goBack()
  };

  return (
    <View style={styles.container}>
      <View style = {{height: StatusBar.currentHeight, backgroundColor: '#FFF'}} />
      <View style={styles.header}>
        <Text style={styles.headerText}>Suas aptidões</Text>
      </View>

      <PieChart
        data={buildData()}
        width={Dimensions.get('window').width - 20}
        height={250}
        chartConfig={chartConfig}
        accessor={"pontos"}
        backgroundColor={"transparent"}
        paddingLeft={"15"}
        center={[10, 0]}
      />
      <View>
        <Carousel
          ref={(c) => { this._carousel = c; }}
          data={buildData()}
          renderItem={this._renderItem}
          sliderWidth={Dimensions.get('window').width}
          itemWidth={Dimensions.get('window').width - 80}
          onSnapToItem={(index) => setActiveSlide(index) }
        />
        <Pagination
          dotsLength={buildData().length}
          activeDotIndex={activeSlide}
          containerStyle={{  }}
          dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 5,
              marginHorizontal: 8,
              backgroundColor: 'rgba(100, 100, 100, 0.92)'
          }}
          inactiveDotStyle={{
              // Define styles for inactive dots here
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 20, // Adicionamos um espaçamento superior para afastar o conteúdo da parte superior
  },
  headerText: {
    fontSize: 32,
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 16
  },
  resultadosContainer: {
    backgroundColor: 'white',
    maxWidth: Dimensions.get('window').width,
    borderRadius: 25,
    marginTop: 10,
    paddingTop: 10,
    alignItems: 'flex-start',
  },
  cardTextPadding: {
    paddingHorizontal: 10,
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
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    paddingVertical: 15,
    marginTop: 30,
    backgroundColor: '#000',
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
});