import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaInicial from './src/components';
import Cadastro from './src/components/Cadastro';
import Questionario from './src/components/Questionario';
import ResultadosScreen from './src/components/Resultado/ResultadosScreen';
import PerfilScreen from './src/components/Perfil/PerfilScreen';
import PerguntaMultiplaEscolhaScreen from './src/components/Questionario/PerguntaMultiplaEscolhaScreen';
import PerguntaUnicaEscolhaScreen from './src/components/Questionario/PerguntaUnicaEscolhaScreen';
import { LogBox } from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);

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
        <Stack.Screen name="Questionario" component={Questionario} />
        <Stack.Screen name="PerguntaUnicaEscolhaScreen" component={PerguntaUnicaEscolhaScreen} />
        <Stack.Screen name="PerguntaMultiplaEscolhaScreen" component={PerguntaMultiplaEscolhaScreen} />
        <Stack.Screen name="ResultadosScreen" component={ResultadosScreen} />
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