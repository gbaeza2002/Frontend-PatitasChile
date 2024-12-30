import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Header } from '../../../components/Header';
import { getLostPets } from '../../../services/lostPetGet';

export type MascotasPerdidasStackParamList = {
  MascotasPerdidasMain: undefined;
  ReportarMascotaPerdida: undefined;
  DetalleMascotasPerdidas: { id: string };
};

type MascotasPerdidasMainScreenNavigationProp = StackNavigationProp<
  MascotasPerdidasStackParamList,
  'MascotasPerdidasMain'
>;

interface Mascota {
  id: string;
  name: string;
  breed: string;
  species: string;
  last_seen_location: string;
  last_seen_date: string;
  photo?: string | null;
}

export const MascotasPerdidasMainScreen = () => {
  const navigation = useNavigation<MascotasPerdidasMainScreenNavigationProp>();
  const [mascotasData, setMascotasData] = useState<Mascota[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLostPets = async () => {
      try {
        const pets = await getLostPets();
        setMascotasData(pets);
      } catch (error) {
        console.error('Error al cargar las mascotas perdidas:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLostPets();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  const renderMascota = ({ item }: { item: Mascota }) => (
    <TouchableOpacity
      style={styles.mascotaCard}
      onPress={() => navigation.navigate('DetalleMascotasPerdidas', { id: item.id })}
    >
      <View style={styles.mascotaCardContainer}>
        {/* Texto de la tarjeta */}
        <View style={styles.mascotaTextContainer}>
          <Text style={styles.mascotaName}>{item.name}</Text>
          <Text style={styles.mascotaDescription}>Especie: {item.species || 'No disponible'}</Text>
          <Text style={styles.mascotaDescription}>Raza: {item.breed || 'No disponible'}</Text>
          <Text style={styles.mascotaDescription}>
            Última vez visto: {item.last_seen_location || 'No disponible'}
          </Text>
          <Text style={styles.mascotaDescription}>Fecha: {item.last_seen_date || 'No disponible'}</Text>
        </View>

        {/* Imagen de la mascota */}
        <Image
          source={
            item.photo
              ? { uri: item.photo }
              : require('../../../img/Dog1.png') // Imagen predeterminada
          }
          style={styles.mascotaImage}
        />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Header />

      {/* Botón para agregar nueva mascota perdida */}
      <View style={styles.publishContainer}>
        <Text style={styles.publishText}>Publicar Mascotas Extraviadas</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.getParent()?.navigate('ReportarMascotaPerdida')}
        >
          <Text style={styles.addButtonText}>Agregar nueva Mascota</Text>
        </TouchableOpacity>
      </View>

      {/* Lista de mascotas perdidas */}
      <FlatList
        data={mascotasData}
        renderItem={renderMascota}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.mascotasList}
      />
    </View>
  );
};

// Estilos integrados
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  publishContainer: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  publishText: {
    fontSize: 18,
    color: '#333',
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#A594F9',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  mascotasList: {
    padding: 10,
  },
  mascotaCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  mascotaCardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mascotaTextContainer: {
    flex: 3,
    paddingRight: 10,
  },
  mascotaName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  mascotaDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 3,
  },
  mascotaImage: {
    flex: 1,
    width: 80,
    height: 80,
    borderRadius: 10,
    resizeMode: 'cover',
  },
});
