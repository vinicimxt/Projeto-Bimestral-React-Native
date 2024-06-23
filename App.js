import React from 'react';
import { StyleSheet, View } from 'react-native';
import Title from './src/components/Title';
import Form from './src/components/Form';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import LoginScreen from './src/screens/LoginScreen';  
import SobreNosScreen from './src/screens/SobreNosScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import RecoveryPassword from './src/screens/RecoveryPasswordScreen';
import OpinionScreen from './src/screens/OpinionScreen';
import MovieScreen from './src/screens/MovieScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>

        <Stack.Navigator>
          <Stack.Screen
            name='Home'
            component={HomeScreen} 
          />
          <Stack.Screen
            name='Detalhes'
            component={DetailsScreen} 
          />
          
          <Stack.Screen
            name='Login'
            component={LoginScreen} 
          />

        <Stack.Screen
            name='Sobre nos'
            component={SobreNosScreen} 
          />

        <Stack.Screen
            name='Cadastrar'
            component={RegisterScreen} 
          />

          <Stack.Screen
            name='Recuperar senha'
            component={RecoveryPassword} 
          />

          <Stack.Screen
            name='Deixe sua opinião'
            component={OpinionScreen} 
          />

          <Stack.Screen
            name='Movie'
            component={MovieScreen} 
          />

        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e5e5',
    paddingTop:80
  },
});
