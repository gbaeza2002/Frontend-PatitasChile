import { api, getToken } from "../api";
import { LostPet } from "../../infraestructure/interfaces/patitasChileapi.interfaces"; 

// Registra una mascota perdida
export const lostPetRegister = async (formData: LostPet): Promise<LostPet | null> => {
    try {
        // Obtiene el token de autenticación
        const token = await getToken();
        if (!token) {
            throw new Error("No se encontró el token de autenticación.");
        }

        // Validación de datos obligatorios
        if (!formData.name || !formData.species || !formData.last_seen_date || !formData.contact_info) {
            throw new Error("Faltan datos obligatorios para registrar la mascota.");
        }

        // Realiza la solicitud a la API
        const response = await api.post("/lostPets/lost-pets/", formData, {
            headers: {
                Authorization: `Bearer ${token}`, // Asegúrate del formato correcto
            },
        });

        return response.data; // Devuelve los datos de la respuesta

    } catch (error: any) {
        // Manejo de errores
        if (error.response) {
            console.error("Error del servidor:", error.response.data);
        } else {
            console.error("Error de red o interno:", error.message);
        }
        return null;
    }
};
