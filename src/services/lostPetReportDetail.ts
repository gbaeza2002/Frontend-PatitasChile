import axios from 'axios';
import { getToken } from './api'; // Asegúrate de que la importación sea correcta

const BASE_URL = 'http://10.0.2.2:8000/lostPets/lost-pets/';

export const registerLostPet = async (petData: any) => {
  try {
    const token = await getToken();
    if (!token) {
      throw new Error('No token available');
    }

    console.log('Token obtenido:', token); // Verifica el token obtenido

    const response = await axios.post(BASE_URL, petData, {
      headers: {
        Authorization: token, // Usa el token directamente
        'Content-Type': 'application/json', // Envío en formato JSON
      },
    });
    console.log('Respuesta del servidor:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error al registrar la mascota perdida:', error);
    throw error;
  }
};

  

  


