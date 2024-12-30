import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/HomeScreen';
import { PerfilScreen } from '../screens/perfil/PerfilScreen';
import IARecipesScreen from '../screens/chatBot/chatbotMainScren';

export type HomeStackParamList = {
  Home: undefined;
  Perfil: undefined;
  Chatbot: undefined;
};

const Stack = createStackNavigator<HomeStackParamList>();

export const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Perfil" component={PerfilScreen} />
      <Stack.Screen name="Chatbot" component={IARecipesScreen} />
    </Stack.Navigator>
  );
};
