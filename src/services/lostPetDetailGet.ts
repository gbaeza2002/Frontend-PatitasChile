import axios from 'axios';
import { getToken } from './api'; // Asegúrate de que la importación de `getToken` sea correcta

const BASE_URL = 'http://10.0.2.2:8000/lostPets/lost-pets/';

// Función para obtener los detalles de una mascota perdida por su ID
export const fetchLostPetDetailsWithAuth = async (id: number) => {
  try {
    const token = await getToken();
    if (!token) {
      throw new Error('No token available');
    }

    const response = await axios.get(`${BASE_URL}${id}/`, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching lost pet details:', error);
    throw error;
  }
};

