import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {BienvenidaSlideScreen} from '../screens/sesion/BienvenidaScreen';
import { RegistroSesionScreen } from '../screens/sesion/RegistroSesionScreen';
import { InicioSesionScreen } from '../screens/sesion/InicioSesionScreen';
import { VerificarCodigoScreen } from '../screens/sesion/VerificarCodigoScreen';
import { BottomTabNavigator } from './BottomTabsNavigator';
import { OlvidePasswordScreen } from '../screens/sesion/OlvidePasswordScreen';
import { VerificarCodigoRecuperarPasswordScreen } from '../screens/sesion/VerificarCodigoRecuperarPasswordScreen';
import { NuevaPasswordScreen } from '../screens/sesion/NuevaPasswordScreen';

export type SesionRootStackParam = {
    Bienvenida: undefined;
    Registrar: undefined;
    Iniciar: undefined;
    VerificarCodigo: undefined;
    home: undefined
    OlvidePassword: undefined;
    VerificarCodigoRecuperarPassword: undefined;
    NuevaPassword: undefined;
};

const Stack = createStackNavigator<SesionRootStackParam>();

export const SesionStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, animationEnabled: false}}>
            <Stack.Screen name="Bienvenida" component={BienvenidaSlideScreen} />
            <Stack.Screen name="Registrar" component={RegistroSesionScreen} />
            <Stack.Screen name="Iniciar" component={InicioSesionScreen} />
            <Stack.Screen name="VerificarCodigo" component={VerificarCodigoScreen} />

            {/*Reset password*/}
            <Stack.Screen name="OlvidePassword" component={OlvidePasswordScreen} />
            <Stack.Screen name="VerificarCodigoRecuperarPassword" component={VerificarCodigoRecuperarPasswordScreen} />
            <Stack.Screen name="NuevaPassword" component={NuevaPasswordScreen} />

            <Stack.Screen name="home" component={BottomTabNavigator} />
        </Stack.Navigator>
    );
};