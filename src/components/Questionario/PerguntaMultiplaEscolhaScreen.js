import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function PerguntaMultiplaEscolhaScreen({ route }) {
  const {titulo, selectedItems, respostas, setRespostas, opcoesResposta, key} = route.params;
  const [locallySelectedItems, setLocallySelectedItems] = useState([...selectedItems]);
  
  const navigation = useNavigation();

  const handleSelection = (selectedItem) => {
    const isSelected = locallySelectedItems.includes(selectedItem);

    if (isSelected) {
      const updatedItems = locallySelectedItems.filter((item) => item !== selectedItem);
      setLocallySelectedItems(updatedItems);
      let respostasCopy = {...respostas};
      respostasCopy[key] = updatedItems;
      setRespostas(respostasCopy);
    } else {
        setLocallySelectedItems([...locallySelectedItems, selectedItem]);  
        let respostasCopy = {...respostas};
        respostasCopy[key] = [...locallySelectedItems, selectedItem];
        setRespostas(respostasCopy);
    }
  };

  const handleSalvarPress = () => {
    navigation.goBack()
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{titulo}</Text>
      <ScrollView style={styles.scrollContainer}>
        {opcoesResposta.map((resposta) => (
          <TouchableOpacity
            key={resposta}
            style={[
              styles.respostaItem,
              locallySelectedItems.includes(resposta) && styles.respostaItemSelecionado,
            ]}
            onPress={() => handleSelection(resposta)}
          >
            <Text
              style={[
                styles.respostaText,
                locallySelectedItems.includes(resposta) && styles.respostaTextSelecionado,
              ]}
            >
              {resposta}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.salvarButton} onPress={handleSalvarPress}>
        <Text style={styles.salvarButtonText}>Confirmar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  scrollContainer: {
    flex: 1,
    marginTop: 20,
  },
  respostaItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  respostaItemSelecionado: {
    backgroundColor: '#FF0000',
  },
  respostaText: {
    fontSize: 16,
    color: '#000000', // Cor do texto preto por padrão
  },
  respostaTextSelecionado: {
    color: '#ffffff', // Cor do texto branco quando a opção está selecionada
  },
  salvarButton: {
    backgroundColor: '#000',
    marginTop: 32,
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 32,
  },
  salvarButtonText: {
    color: '#FFF',
    fontSize: 16,
  },
});
