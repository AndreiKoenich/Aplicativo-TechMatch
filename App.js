import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaInicial from './src/components';
import RoteiroEstudosScreen from './src/components/RoteiroEstudosScreen'
import Cadastro from './src/components/Cadastro';
import MudarCadastro from './src/components/MudarCadastro';
import Questionario from './src/components/Questionario';
import ResultadosScreen from './src/components/Resultado/ResultadosScreen';
import PerfilScreen from './src/components/Perfil/PerfilScreen';
import PerguntaMultiplaEscolhaScreen from './src/components/Questionario/PerguntaMultiplaEscolhaScreen';
import PerguntaUnicaEscolhaScreen from './src/components/Questionario/PerguntaUnicaEscolhaScreen';
import { LogBox } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

export default function App() {
  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);

  useEffect(() => {
    clearAsyncStorage(); // Limpa o AsyncStorage ao iniciar o aplicativo
  }, []);

  const clearAsyncStorage = async () => {
    try {
      await AsyncStorage.clear();
      console.log('Dados do AsyncStorage limpos com sucesso!');
    } catch (error) {
      console.log('Erro ao limpar dados do AsyncStorage:', error);
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="TelaInicial"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="TelaInicial" component={TelaInicial} />
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{
            headerShown: true,
            headerTitle: '',
            headerLeft: () => null,
          }}
        />
        <Stack.Screen name="PerfilScreen" component={PerfilScreen} />
        <Stack.Screen name="MudarCadastro" component={MudarCadastro} />
        <Stack.Screen name="Questionario" component={Questionario} />
        <Stack.Screen name="PerguntaUnicaEscolhaScreen" component={PerguntaUnicaEscolhaScreen} />
        <Stack.Screen name="PerguntaMultiplaEscolhaScreen" component={PerguntaMultiplaEscolhaScreen} />
        <Stack.Screen name="ResultadosScreen" component={ResultadosScreen} />
        <Stack.Screen name="RoteiroEstudosScreen" component={RoteiroEstudosScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
