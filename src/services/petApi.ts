import axios from 'axios';
import { Pet } from '../infraestructure/interfaces/patitasChileapi.interfaces'; // Importación corregida
import { getToken } from './api'; // Importa la función getToken

const BASE_URL = 'http://10.0.2.2:8000/PetAdopcion/mascotas/';

export const fetchPets = async (): Promise<Pet[]> => {
  try {
    const token = await getToken(); // Obtiene el token
    if (!token) {
      throw new Error('No token available');
    }
    const response = await axios.get<Pet[]>(BASE_URL, {
      headers: {
        Authorization: token, // Agrega el token al encabezado
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching pets:', error);
    throw error;
  }
};


