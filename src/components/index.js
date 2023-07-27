import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PerfilButton from './PerfilButton';

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
    navigation.navigate('PerfilScreen', { novoPerfil: perfil });
  };

  return (
    <View>
      <Text style={styles.titleText}>Bem-Vindo!</Text>
      <Text style={styles.subtitleText}>Selecione o perfil:</Text>

      {/* Botão para criar um novo perfil */}
      <TouchableOpacity style={styles.button} onPress={handleNovoPerfilPress}>
        <FontAwesome name="plus" size={20} color="white" style={styles.icon} />
        <Text style={styles.buttonText}>Novo Perfil</Text>
      </TouchableOpacity>

      {/* Botões correspondentes aos perfis cadastrados */}
      {perfis.map((perfil, index) => (
        <PerfilButton key={index} perfil={perfil} onPress={handlePerfilPress} />
      ))}
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
    fontSize: 24,
    textAlign: 'center',
    marginTop: 30,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1E3799',
    borderRadius: 25,
    paddingVertical: 10,
    marginTop: 10,
    marginHorizontal: 30,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
  icon: {
    marginRight: 10,
  },
});
