import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function PerfilButton({ perfil, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={() => onPress(perfil)}>
      <Text style={styles.buttonText}>{perfil.nome}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
});