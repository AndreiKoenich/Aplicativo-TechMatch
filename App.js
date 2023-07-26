import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack'; // Importe o HeaderBackButton
import TelaInicial from './src/components';
import Cadastro from './src/components/Cadastro';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="TelaInicial"
        screenOptions={{
          headerShown: false // Esconda o cabeçalho de navegação padrão em todas as telas
        }}
      >
        <Stack.Screen name="TelaInicial" component={TelaInicial} />
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{
            headerShown: true, // Mostrar cabeçalho de navegação apenas na tela de Cadastro
            headerTitle: '', // Remova o texto "Cadastro" do cabeçalho
            headerLeft: () => null, // Remova o botão de voltar do cabeçalho
          }}
        />
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
