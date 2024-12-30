// DonacionStackNavigator.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DatosTarjetaScreen } from '../screens/donacion/DatosTarjetaScreen';
import  MercadoPagoWebView  from '../screens/donacion/MercadoPagoWebView';
import DonacionScreen from '../screens/donacion/DonacionScreen';
 // Asegúrate de que la ruta sea correcta

const Stack = createStackNavigator();

export const DonacionStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="DonacionMain" component={DonacionScreen} />
      <Stack.Screen name="DatosTarjetaScreen" component={DatosTarjetaScreen} />
      <Stack.Screen name="MercadoPagoWebView" component={MercadoPagoWebView} /> 
    </Stack.Navigator>
  );
};

