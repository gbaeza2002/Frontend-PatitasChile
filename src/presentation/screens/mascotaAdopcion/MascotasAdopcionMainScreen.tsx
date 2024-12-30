import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Header } from '../../../components/Header';
import { fetchPets } from '../../../services/petApi';
import { Pet } from '../../../infraestructure/interfaces/patitasChileapi.interfaces';
import { MascotasAdopcionStackParamList } from './MascotasAdopcionScreen';

type MascotasAdopcionMainScreenNavigationProp = StackNavigationProp<
    MascotasAdopcionStackParamList,
    'MascotasAdopcionMain'
>;

const MascotasAdopcionMainScreen: React.FC = () => {
    const navigation = useNavigation<MascotasAdopcionMainScreenNavigationProp>();
    const [mascotasData, setMascotasData] = useState<Pet[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const getPets = async () => {
            try {
                const data = await fetchPets();
                setMascotasData(data);
            } catch (error) {
                console.error('Error fetching pets:', error);
            } finally {
                setLoading(false);
            }
        };

        getPets();
    }, []);

    const renderMascota = ({ item }: { item: Pet }) => (
        <TouchableOpacity
            style={styles.mascotaCard}
            onPress={() => navigation.navigate('DetalleMascotaAdopcion', { id: item.id })}
        >
            <View style={styles.mascotaCardContainer}>
                {/* Texto de la tarjeta */}
                <View style={styles.mascotaTextContainer}>
                    <Text style={styles.mascotaName}>{item.nombre}</Text>
                    <Text style={styles.mascotaDescription}>Descripción: {item.descripcion || 'No disponible'}</Text>
                    <Text style={styles.mascotaDescription}>Edad: {item.edad || 'No disponible'}</Text>
                    <Text style={styles.mascotaDescription}>Raza: {item.raza || 'No disponible'}</Text>
                    <Text style={styles.mascotaDescription}>Dirección: {item.direccion || 'No disponible'}</Text>
                </View>

                {/* Imagen de la mascota */}
                <Image
          source={
            item.photo
              ? { uri: item.photo }
              : require('../../../img/Perrocursed.jpg') // Imagen predeterminada
          }
          style={styles.mascotaImage}
        />
            </View>
        </TouchableOpacity>
    );

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.publishContainer}>
                <Text style={styles.publishText}>Publicar Mascota</Text>
                <TouchableOpacity
                    style={styles.addButton}
                    onPress={() => navigation.navigate('FormularioAdopcion')}
                >
                    <Text style={styles.addButtonText}>Publicar</Text>
                </TouchableOpacity>
            </View>

            {/* Mostrar mensaje si no hay mascotas disponibles */}
            {mascotasData.length === 0 ? (
                <Text style={styles.noDataText}>Mascotas en adopción no disponibles</Text>
            ) : (
                <FlatList
                    data={mascotasData}
                    renderItem={renderMascota}
                    keyExtractor={(item) => item.id.toString()}
                    contentContainerStyle={styles.mascotasList}
                />
            )}
        </View>
    );
};

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
    noDataText: {
        fontSize: 16,
        color: '#999',
        textAlign: 'center',
        marginTop: 20,
    },
});

export default MascotasAdopcionMainScreen;
