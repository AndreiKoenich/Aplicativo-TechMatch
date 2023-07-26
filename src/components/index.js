import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function TelaInicial() {
  const navigation = useNavigation();

  const handleNovoPerfilPress = () => {
    navigation.navigate('Cadastro');
  };

  return (
    <View>
      <Text style={styles.titleText}>Bem-Vindo!</Text>
      <Text style={styles.subtitleText}>Selecione o perfil:</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={handleNovoPerfilPress}
      >
        <FontAwesome name="plus" size={20} color="white" style={styles.icon} />
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
      marginTop: 300,
      marginHorizontal: 30,
    },
    buttonText: {
      fontSize: 18,
      color: 'white',
      marginLeft: 10,
    },
    icon: {
      marginRight: 10,
    },
  });