import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStackNavigator } from './HomeStackNavigator';
import { MascotasPerdidasScreen } from '../screens/mascotasPerdidas/MascotasPerdidasScreen';
import { DonacionStackNavigator } from '../routes/DonacionStackNavigator'; // Usa el stack de Donacion
import Themes from '../themes/Themes';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { MascotasAdopcionScreen } from '../screens/mascotaAdopcion/MascotasAdopcionScreen';
import { Keyboard, View } from 'react-native';
import { useState, useEffect } from 'react';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  useEffect(() => {
    const showListener = Keyboard.addListener('keyboardDidShow', () => setIsKeyboardVisible(true));
    const hideListener = Keyboard.addListener('keyboardDidHide', () => setIsKeyboardVisible(false));

    return () => {
      showListener.remove();
      hideListener.remove();
    };
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: isKeyboardVisible
            ? { display: 'none' } // Oculta el BottomTab si el teclado está visible
            : Themes.globalStyles.tabBar,
          tabBarActiveTintColor: Themes.globalColors.tabBarActive,
          tabBarInactiveTintColor: Themes.globalColors.tabBarInactive,
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="HomeStack"
          component={HomeStackNavigator}
          options={{
            tabBarLabel: 'Principal',
            tabBarIcon: ({ color, size }) => <Icon name="home" color={color} size={size} />,
            unmountOnBlur: true, // Refresca la pantalla al salir
          }}
        />
        <Tab.Screen
          name="MascotasPerdidas"
          component={MascotasPerdidasScreen}
          options={{
            tabBarLabel: 'Mascota perdida',
            tabBarIcon: ({ color, size }) => <Icon name="search" color={color} size={size} />,
            unmountOnBlur: true, // Refresca la pantalla al salir
          }}
        />
        <Tab.Screen
          name="Donacion"
          component={DonacionStackNavigator} // Usa el stack completo aquí
          options={{
            tabBarLabel: 'Donación',
            tabBarIcon: ({ color, size }) => <Icon name="volunteer-activism" color={color} size={size} />,
            unmountOnBlur: true, // Refresca la pantalla al salir
          }}
        />
        <Tab.Screen
          name="MascotasAdopcion"
          component={MascotasAdopcionScreen}
          options={{
            tabBarLabel: 'Adopción',
            tabBarIcon: ({ color, size }) => <Icon name="favorite" color={color} size={size} />,
            unmountOnBlur: true, // Refresca la pantalla al salir
          }}
        />
      </Tab.Navigator>
    </View>
  );
};







