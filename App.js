import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaInicial from './src/components';
import Cadastro from './src/components/Cadastro';
import Questionario from './src/components/Questionario';
import EscolaridadeScreen from './src/components/EscolaridadeScreen';
import IdadeScreen from './src/components/IdadeScreen';
import LinguagensScreen from './src/components/LinguagensScreen';
import SistemasScreen from './src/components/SistemasScreen';
import TempoExperienciaScreen from './src/components/TempoExperiencaScreen';
import FrameworkScreen from './src/components/FrameworkScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Questionario"
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
        <Stack.Screen name="Questionario" component={Questionario} />
        <Stack.Screen name="EscolaridadeScreen" component={EscolaridadeScreen} />
        <Stack.Screen name="IdadeScreen" component={IdadeScreen} />
        <Stack.Screen name="LinguagensScreen" component={LinguagensScreen} />
        <Stack.Screen name="SistemasScreen" component={SistemasScreen} />
        <Stack.Screen name="TempoExperienciaScreen" component={TempoExperienciaScreen} />
        <Stack.Screen name="FrameworkScreen" component={FrameworkScreen} />
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