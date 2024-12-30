import axios from 'axios';
import { getToken } from './api'; // Verifica que la ruta de importación sea correcta

const BASE_URL = 'http://10.0.2.2:8000/lostPets/lost-pets/';

// Función para obtener todas las mascotas perdidas
export const getLostPets = async () => {
  try {
    const token = await getToken();
    if (!token) {
      throw new Error('No token available');
    }

    console.log('Token obtenido para GET:', token);

    const response = await axios.get(BASE_URL, {
      headers: {
        Authorization: token,
      },
    });
    console.log('Datos obtenidos:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error al obtener las mascotas perdidas:', error);
    throw error;
  }
};

