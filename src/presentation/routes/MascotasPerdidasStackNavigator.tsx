import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MascotasPerdidasMainScreen } from '../screens/mascotasPerdidas/MascotasPerdidasMainScreen';
import { ReportarMascotaPerdida } from '../screens/mascotasPerdidas/ReportarMascotasPerdidas';
import { DetalleMascotasPerdidas } from '../screens/mascotasPerdidas/DetalleMascotasPerdidas';

type MascotasPerdidasStackParamList = {
  MascotasPerdidasMain: undefined;
  ReportarMascotaPerdida: undefined;
  DetalleMascotasPerdidas: {
    name: string;
    image: any;
    description: string;
    raza: string;
    edad: string;
    visto: string;
    caracteristica: string;
    contactoNombre: string;
    contactoTelefono: string;
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
