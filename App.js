import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaInicial from './src/components';
import Cadastro from './src/components/Cadastro';
import EscolaridadeScreen from './src/components/EscolaridadeScreen'; 
import EstadoScreen from './src/components/EstadoScreen'; 

const Stack = createStackNavigator();

export default function App() {
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
        <Stack.Screen
          name="EscolaridadeScreen"
          component={EscolaridadeScreen} // Passa o componente EscolaridadeScreen como componente da Screen
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