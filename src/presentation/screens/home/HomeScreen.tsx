import { ScrollView, Text, View, Pressable } from "react-native";
import { Header } from '../../../components/Header';
import { Card } from "../../../components/Card";
import { globalStyles } from "../../themes/Themes";
import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { CardChatBot } from "../../../components/CardChatBot";

type HomeStackParamList = {
  Donacion: undefined;
  MascotasPerdidas: undefined;
  MascotasAdopcion: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<HomeStackParamList>;

export const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View style={globalStyles.container}>
      <Header />
      <ScrollView>

        <CardChatBot/>
        
        <Pressable
          onPress={() => navigation.navigate('Donacion')}
          style={({ pressed }) => [
            { opacity: pressed ? 0.85 : 1 },
          ]}
        >
          <Card
            imageSource={require('../../../img/Donacion.png')}
            title="Donations"
            subtitle="Ayuda a los animales necesitados haciendo una donación hoy."
          />
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate('MascotasPerdidas')}
          style={({ pressed }) => [
            { opacity: pressed ? 0.85 : 1 },
          ]}
        >
          <Card
            imageSource={require('../../../img/Perdido.png')}
            title="Lost Pets"
            subtitle="Reporta una mascota perdida o ayuda a reunirla con su familia."
          />
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate('MascotasAdopcion')}
          style={({ pressed }) => [
            { opacity: pressed ? 0.85 : 1 },
          ]}
        >
          <Card
            imageSource={require('../../../img/adopcion.png')}
            title="Adoptions"
            subtitle="Encuentra a tu nuevo mejor amigo entre nuestras mascotas en adopción."
          />
        </Pressable>

      </ScrollView>
    </View>
  );
};
