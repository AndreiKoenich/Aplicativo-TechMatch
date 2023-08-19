import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PerfilButton from './Perfil/PerfilButton';

export default function TelaInicial() {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [perfis, setPerfis] = useState([]);

  useEffect(() => {
    // Carregar os perfis do AsyncStorage sempre que a tela for focada
    loadPerfis();
  }, [isFocused]);

  const loadPerfis = async () => {
    try {
      // Carregar os perfis do AsyncStorage
      const perfisData = await AsyncStorage.getItem('perfis');
      if (perfisData) {
        const perfisArray = JSON.parse(perfisData);
        setPerfis(perfisArray);
      }
    } catch (error) {
      console.log('Erro ao carregar os perfis:', error);
    }
  };

  const handleNovoPerfilPress = () => {
    navigation.navigate('Cadastro');
  };

  const handlePerfilPress = (perfil) => {
    navigation.navigate('PerfilScreen', { perfilAtual: perfil });
  };

  return (
    <View style={styles.flexBox}>

      <View>
        <Text style={styles.titleText}>Bem-Vindo!</Text>

        <Text style={styles.subtitleText}>Selecione o perfil:</Text>

        {/* Botões correspondentes aos perfis cadastrados */}
        <ScrollView style={styles.scrollContainer}>
          {perfis.map((perfil, index) => (
            <PerfilButton key={index} perfil={perfil} onPress={handlePerfilPress} />
          ))}
        </ScrollView>

      </View>

      {/* Botão para criar um novo perfil */}
      <TouchableOpacity style={styles.button} onPress={handleNovoPerfilPress}>
        <View style={styles.plusView}>
          <Text style={styles.buttonPluxText}>+</Text>
        </View>
        <Text style={styles.buttonText}>Novo Perfil</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
  },
  subtitleText: {
    fontSize: 32,
    textAlign: 'center',
    marginTop: 64,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    borderRadius: 25,
    paddingVertical: 10,
    marginBottom: 60,
    marginHorizontal: 30,
  },
  buttonText: {
    fontSize: 32,
    color: 'white',
    textAlign: 'center'
  },
  buttonPluxText: {
    fontSize: 32,
    color: 'white',
    textAlign: 'center',
    lineHeight: 33
  },
  icon: {
    marginRight: 10,
  },
  flexBox: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  scrollContainer: {
    flex: 1,
    marginTop: 16,
    minHeight: 330,
    maxHeight: 330,
  },
  plusView: {
    borderRadius: 100,
    backgroundColor: 'red',
    height: 30,
    width: 30,
    marginRight: 10,
  },
});
