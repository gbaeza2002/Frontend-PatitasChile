import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MascotasAdopcionMainScreen from './MascotasAdopcionMainScreen';
import FormularioAdopcionScreen from './FormularioAdopcionScreen';
import DetalleMascotaAdopcion from './DetalleMascotaAdopcion';

// Definición de los tipos de parámetros para el stack
export type MascotasAdopcionStackParamList = {
  MascotasAdopcionMain: undefined;
  FormularioAdopcion: undefined;
  DetalleMascotaAdopcion: { id: number }; // Solo `id`
};

const Stack = createStackNavigator<MascotasAdopcionStackParamList>();

export const MascotasAdopcionScreen: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MascotasAdopcionMain" component={MascotasAdopcionMainScreen} />
      <Stack.Screen name="FormularioAdopcion" component={FormularioAdopcionScreen} />
      <Stack.Screen name="DetalleMascotaAdopcion" component={DetalleMascotaAdopcion} />
    </Stack.Navigator>
  );
};

