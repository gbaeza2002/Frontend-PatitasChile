import axios from 'axios';
import { getToken } from './api'; // Asegúrate de que la importación de `getToken` sea correcta

const BASE_URL = 'http://10.0.2.2:8000/PetAdopcion/mascotas/';

export const fetchPetDetailsWithAuth = async (id: number) => {
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
    console.error('Error fetching pet details:', error);
    throw error;
  }
};
