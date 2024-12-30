// MascotasPerdidasScreen.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MascotasPerdidasMainScreen } from './MascotasPerdidasMainScreen';
import { ReportarMascotaPerdida } from './ReportarMascotasPerdidas';
import { DetalleMascotasPerdidas } from './DetalleMascotasPerdidas';

export type MascotasPerdidasStackParamList = {
  MascotasPerdidasMain: undefined;
  ReportarMascotaPerdida: undefined;
  DetalleMascotasPerdidas: {
    id: string;  // Asegúrate de que estás pasando el `id` correctamente
  };
};

const Stack = createStackNavigator<MascotasPerdidasStackParamList>();

export const MascotasPerdidasScreen = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MascotasPerdidasMain" component={MascotasPerdidasMainScreen} />
      <Stack.Screen name="ReportarMascotaPerdida" component={ReportarMascotaPerdida} />
      <Stack.Screen name="DetalleMascotasPerdidas" component={DetalleMascotasPerdidas} />
    </Stack.Navigator>
  );
};
