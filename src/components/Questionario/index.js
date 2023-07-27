import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import EscolaridadeScreen from '../EscolaridadeScreen';
import LinguagensScreen from '../LinguagensScreen';
import SistemasScreen from '../SistemasScreen';
import TempoExperienciaScreen from '../TempoExperiencaScreen';
import FrameworkScreen from '../FrameworkScreen';
import EmergentesScreen from '../EmergentesScreen';
import DataBaseScreen from '../DataBaseScreen';
import MetodologiaScreen from '../MetodologiaScreen';
import RedesScreen from '../RedesScreen';
import CommerceScreen from '../CommerceScreen';
import AplicativoScreen from '../AplicativoScreen';
import LegadosScreen from '../LegadosScreen';
import ResultadosScreen from '../ResultadosScreen';


export default function Questionario({ route }) {
  const navigation = useNavigation();
  const [escolaridade, setEscolaridade] = useState('');
  const [linguagens, setLinguagens] = useState([]);
  const [sistemas, setSistemas] = useState('');
  const [tempoExperiencia, setTempoExperiencia] = useState('');
  const [frameworks, setFrameworks] = useState([]);
  const [tecnologiasEmergentes, setTecnologiasEmergentes] = useState([]);
  const [experienciaBancoDados, setExperienciaBancoDados] = useState(''); 
  const [experienciaMetodologia, setExperienciaMetodologia] = useState(''); 
  const [experienciaRedes, setExperienciaRedes] = useState(''); 
  const [experienciaCommerce, setExperienciaCommerce] = useState(''); 
  const [experienciaAplicativo, setExperienciaAplicativo] = useState(''); 
  const [experienciaLegados, setExperienciaLegados] = useState(''); 
  const [dados, setDados] = useState({});

  const handleEscolaridadePress = () => {
    navigation.navigate('EscolaridadeScreen');
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

  const handleTecnologiasEmergentesPress = () => {
    navigation.navigate('EmergentesScreen', { tecnologiasEmergentes, setTecnologiasEmergentes });
  };

  const handleDataBasePress = () => {
    navigation.navigate('DataBaseScreen', { experienciaBancoDados, setExperienciaBancoDados });
  };

  const handleMetodologiaPress = () => {
    navigation.navigate('MetodologiaScreen', { experienciaMetodologia, setExperienciaMetodologia });
  };

  const handleRedesPress = () => {
    navigation.navigate('RedesScreen', { experienciaMetodologia, setExperienciaRedes });
  };

  const handleCommercePress = () => {
    navigation.navigate('CommerceScreen', { experienciaCommerce, setExperienciaCommerce });
  };

  const handleAplicativoPress = () => {
    navigation.navigate('AplicativoScreen', { experienciaAplicativo, setExperienciaAplicativo });
  };

  const handleLegadosPress = () => {
    navigation.navigate('LegadosScreen', { experienciaLegados, setExperienciaLegados });
  };

  const handleResultadosPress = () => {
    const dados = {
      escolaridade,
      linguagens,
      sistemas,
      tempoExperiencia,
      frameworks,
      tecnologiasEmergentes,
      experienciaBancoDados,
      experienciaMetodologia,
      experienciaRedes,
      experienciaCommerce,
      experienciaAplicativo,
      experienciaLegados,
    };
    setDados(dados);
    navigation.navigate('ResultadosScreen', dados);
  };
  
  const updateInformation = () => {
    const escolaridadeValue = route.params?.escolaridade;
    const linguagensValue = route.params?.linguagens;
    const sistemasValue = route.params?.sistemas;
    const tempoExperienciaValue = route.params?.tempoExperiencia;
    const frameworksValue = route.params?.frameworks;
    const tecnologiasEmergentesValue = route.params?.tecnologiasEmergentes;
    const experienciaBancoDadosValue = route.params?.experienciaBancoDados;
    const experienciaMetodologiaValue = route.params?.experienciaMetodologia;
    const experienciaRedesValue = route.params?.experienciaRedes;
    const experienciaCommerceValue = route.params?.experienciaCommerce;
    const experienciaAplicativoValue = route.params?.experienciaAplicativo;
    const experienciaLegadosValue = route.params?.experienciaLegados;

    if (escolaridadeValue) {
      setEscolaridade(escolaridadeValue);
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

    if (tecnologiasEmergentesValue) {
        setTecnologiasEmergentes(tecnologiasEmergentesValue);
      }

    if (experienciaBancoDadosValue) {
        setExperienciaBancoDados(experienciaBancoDadosValue);
      }

      if (experienciaMetodologiaValue) {
        setExperienciaMetodologia(experienciaMetodologiaValue);
      }

      if (experienciaRedesValue) {
        setExperienciaRedes(experienciaRedesValue);
      }

      if (experienciaCommerceValue) {
        setExperienciaRedes(experienciaCommerceValue);
      }

      if (experienciaAplicativoValue) {
        setExperienciaRedes(experienciaAplicativoValue);
      }

      if (experienciaLegadosValue) {
        setExperienciaRedes(experienciaLegadosValue);
      }
  };

  useEffect(() => {
    updateInformation();
  }, [route.params]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Conte-nos sobre você!</Text>
      </View>

      <View style={styles.perguntaContainer}>
        <Text style={styles.pergunta}>Qual o seu grau de formação?</Text>
        <TouchableOpacity style={styles.input} onPress={handleEscolaridadePress}>
          <Text style={[styles.inputText, { color: escolaridade ? 'black' : '#888' }]}>
            {escolaridade ? escolaridade : 'Pressione para escolher...'}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.perguntaContainer}>
        <Text style={styles.pergunta}>Quais linguagens de programação você conhece?</Text>
        <TouchableOpacity style={styles.input} onPress={handleLinguagensPress}>
          <Text style={[styles.inputText, { color: linguagens.length > 0 ? 'black' : '#888' }]}>
            {linguagens.length > 0 ? linguagens.join(', ') : 'Pressione para escolher...'}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.perguntaContainer}>
        <Text style={styles.pergunta}>Quais sistemas operacionais você conhece?</Text>
        <TouchableOpacity style={styles.input} onPress={handleSistemasPress}>
          <Text style={[styles.inputText, { color: sistemas ? 'black' : '#888' }]}>
            {sistemas.length > 0 ? sistemas.join(', ') : 'Pressione para escolher...'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Nova pergunta sobre o tempo de experiência */}
      <View style={styles.perguntaContainer}>
        <Text style={styles.pergunta}>Quanto tempo de experiência com programação você possui?</Text>
        <TouchableOpacity style={styles.input} onPress={handleTempoExperienciaPress}>
          <Text style={[styles.inputText, { color: tempoExperiencia ? 'black' : '#888' }]}>
            {tempoExperiencia ? tempoExperiencia : 'Pressione para escolher...'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Nova pergunta sobre os frameworks e bibliotecas */}
      <View style={styles.perguntaContainer}>
        <Text style={styles.pergunta}>Quais frameworks e bibliotecas você conhece?</Text>
        <TouchableOpacity style={styles.input} onPress={handleFrameworksPress}>
          <Text style={[styles.inputText, { color: frameworks.length > 0 ? 'black' : '#888' }]}>
            {frameworks.length > 0 ? frameworks.join(', ') : 'Pressione para escolher...'}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.perguntaContainer}>
        <Text style={styles.pergunta}>Quais tecnologias emergentes você conhece?</Text>
        <TouchableOpacity style={styles.input} onPress={handleTecnologiasEmergentesPress}>
          <Text style={[styles.inputText, { color: tecnologiasEmergentes.length > 0 ? 'black' : '#888' }]}>
            {tecnologiasEmergentes.length > 0 ? tecnologiasEmergentes.join(', ') : 'Pressione para escolher...'}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.perguntaContainer}>
        <Text style={styles.pergunta}>Você possui experiência com gerenciamento de banco de dados?</Text>
        <TouchableOpacity style={styles.input} onPress={handleDataBasePress}>
          <Text style={[styles.inputText, { color: experienciaBancoDados ? 'black' : '#888' }]}>
            {experienciaBancoDados ? experienciaBancoDados : 'Pressione para escolher...'}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.perguntaContainer}>
        <Text style={styles.pergunta}>Você já participou de projetos de desenvolvimento ágil ou metodologias similares?</Text>
        <TouchableOpacity style={styles.input} onPress={handleMetodologiaPress}>
          <Text style={[styles.inputText, { color: experienciaMetodologia ? 'black' : '#888' }]}>
            {experienciaMetodologia ? experienciaMetodologia : 'Pressione para escolher...'}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.perguntaContainer}>
        <Text style={styles.pergunta}>Você possui conhecimento sobre redes de computadores e protocolos de comunicação?</Text>
        <TouchableOpacity style={styles.input} onPress={handleRedesPress}>
          <Text style={[styles.inputText, { color: experienciaRedes ? 'black' : '#888' }]}>
            {experienciaRedes ? experienciaRedes : 'Pressione para escolher...'}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.perguntaContainer}>
        <Text style={styles.pergunta}>Você possui experiência com projetos de e-commerce ou sistemas de pagamento online?</Text>
        <TouchableOpacity style={styles.input} onPress={handleCommercePress}>
          <Text style={[styles.inputText, { color: experienciaCommerce ? 'black' : '#888' }]}>
            {experienciaCommerce ? experienciaCommerce : 'Pressione para escolher...'}
          </Text>
        </TouchableOpacity>
      </View>


      <View style={styles.perguntaContainer}>
        <Text style={styles.pergunta}>Você possui experiência com desenvolvimento de aplicativos para dispositivos móveis?</Text>
        <TouchableOpacity style={styles.input} onPress={handleAplicativoPress}>
          <Text style={[styles.inputText, { color: experienciaAplicativo ? 'black' : '#888' }]}>
            {experienciaAplicativo ? experienciaAplicativo : 'Pressione para escolher...'}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.perguntaContainer}>
        <Text style={styles.pergunta}>Você já atuou em projetos de migração de sistemas legados para tecnologias modernas?</Text>
        <TouchableOpacity style={styles.input} onPress={handleLegadosPress}>
          <Text style={[styles.inputText, { color: experienciaLegados ? 'black' : '#888' }]}>
            {experienciaLegados ? experienciaLegados : 'Pressione para escolher...'}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.verificarButton} onPress={handleResultadosPress}>
          <Text style={styles.verificarButtonText}>Verificar Resultados</Text>
        </TouchableOpacity>
      </View>

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

  verificarButton: {
    backgroundColor: '#1E3799',
    borderRadius: 5,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  verificarButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});