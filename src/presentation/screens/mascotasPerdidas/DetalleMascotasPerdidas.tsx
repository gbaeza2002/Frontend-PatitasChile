import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, ScrollView, Image, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { MascotasPerdidasStackParamList } from './MascotasPerdidasMainScreen';
import { fetchLostPetDetailsWithAuth } from '../../../services/lostPetDetailGet';
import { Header } from '../../../components/Header';

type DetalleMascotasPerdidasRouteProp = RouteProp<MascotasPerdidasStackParamList, 'DetalleMascotasPerdidas'>;

interface LostPet {
  name: string;
  description?: string;
  breed: string;
  species: string;
  contact_info: string;
  last_seen_location: string;
  last_seen_date: string;
  additional_details: string;
  photo?: string | null;
}

export const DetalleMascotasPerdidas = ({ route }: { route: DetalleMascotasPerdidasRouteProp }) => {
  const [lostPetDetails, setLostPetDetails] = useState<LostPet | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const { id } = route.params;
  const petId = parseInt(id, 10);

  useEffect(() => {
    const getLostPetDetails = async () => {
      try {
        const data = await fetchLostPetDetailsWithAuth(petId);
        console.log('Detalles de la mascota:', data);
        setLostPetDetails(data);
      } catch (error) {
        console.error('Error al cargar los detalles de la mascota perdida:', error);
      } finally {
        setLoading(false);
      }
    };

    getLostPetDetails();
  }, [petId]);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#FF6F61" />
      </View>
    );
  }

  if (!lostPetDetails) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>No se encontró información sobre la mascota perdida.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Header />
      <View style={styles.card}>
        <Text style={styles.petName}>{lostPetDetails.name}</Text>
        <Image
          source={
            lostPetDetails.photo
              ? { uri: lostPetDetails.photo }
              : require('../../../img/Dog1.png')
          }
          style={styles.petImage}
        />
        <View style={styles.infoSection}>
          <Text style={styles.infoTitle}>Especie:</Text>
          <Text style={styles.infoText}>{lostPetDetails.species}</Text>
        </View>
        <View style={styles.infoSection}>
          <Text style={styles.infoTitle}>Raza:</Text>
          <Text style={styles.infoText}>{lostPetDetails.breed}</Text>
        </View>
        <View style={styles.infoSection}>
          <Text style={styles.infoTitle}>Última vez visto:</Text>
          <Text style={styles.infoText}>{lostPetDetails.last_seen_location}</Text>
        </View>
        <View style={styles.infoSection}>
          <Text style={styles.infoTitle}>Fecha:</Text>
          <Text style={styles.infoText}>{lostPetDetails.last_seen_date}</Text>
        </View>
        <View style={styles.infoSection}>
          <Text style={styles.infoTitle}>Contacto:</Text>
          <Text style={styles.infoText}>{lostPetDetails.contact_info}</Text>
        </View>
        <View style={styles.infoSection}>
          <Text style={styles.infoTitle}>Detalles adicionales:</Text>
          <Text style={styles.infoText}>{lostPetDetails.additional_details}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
  },
  errorText: {
    fontSize: 18,
    color: '#D32F2F',
    textAlign: 'center',
    marginHorizontal: 20,
  },
  card: {
    margin: 20,
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  petName: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FF6F61',
    textAlign: 'center',
    marginBottom: 15,
  },
  petImage: {
    width: '100%',
    height: 250,
    borderRadius: 15,
    marginBottom: 20,
    resizeMode: 'cover',
  },
  infoSection: {
    marginBottom: 15,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
  },
  infoText: {
    fontSize: 16,
    color: '#666',
    marginTop: 2,
  },
});
