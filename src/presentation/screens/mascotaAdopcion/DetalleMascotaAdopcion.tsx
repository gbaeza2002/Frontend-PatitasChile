import React from 'react';
import { ScrollView, Text, View, Alert } from 'react-native';
import { Header } from '../../../components/Header';
import PetCard from '../../../components/PetCard';
import PhotoGallery from '../../../components/PhotoGallery';
import PrimaryButton from '../../../components/PrimaryButton';

const DetalleMascotaAdopcion = () => {
  const handleAdoptar = () => {
    Alert.alert(
      'Solicitud Enviada',
      '¡Solicitud de adopción enviada con éxito!',
      [{ text: 'OK' }]
    );
  };

  return (
    <ScrollView>
      <View>
        <Header />
        <PetCard
          name="Firulais"
          description="Un perro amigable y juguetón."
          age="2"
          breed="Labrador"
          location="Ciudad de México"
          contact="juan@example.com"
          image={require('../../../img/PerroXD2.jpg')}
        />
        <PhotoGallery
          photos={[
            require('../../../img/perrochiquito.jpg'),
            require('../../../img/Perrocursed.jpg'),
            require('../../../img/PerroXD.jpeg'),
          ]}
        />
        <PrimaryButton text="Adoptar" onPress={handleAdoptar} width={150} height={40} />
      </View>
    </ScrollView>
  );
};

export default DetalleMascotaAdopcion;



