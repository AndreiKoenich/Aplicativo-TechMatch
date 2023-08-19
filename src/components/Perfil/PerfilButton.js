import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function PerfilButton({ perfil, onPress }) {
  const firstName = perfil.nome.split(' ')[0]; // Pega o primeiro nome
  return (
    <TouchableOpacity style={styles.button} onPress={() => onPress(perfil)}>
      <Text style={styles.buttonText}>{firstName}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    paddingVertical: 10,
    marginTop: 10,
    marginHorizontal: 30,
  },
  buttonText: {
    fontSize: 32,
    color: 'white',
  },
});
