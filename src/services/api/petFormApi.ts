import axios from 'axios';
import { getToken } from '../api'; // Asegúrate de que la importación sea correcta

const BASE_URL = 'http://10.0.2.2:8000/PetAdopcion/mascotas/';

export const submitPetData = async (petData: any) => {
  try {
    const token = await getToken();
    if (!token) {
      throw new Error('No token available');
    }

    const response = await axios.post(BASE_URL, petData, {
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error al enviar los datos de la mascota:', error);
    throw error;
  }
};
