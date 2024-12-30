import { api, getToken } from "../api";
import { UserProfile } from "../../infraestructure/interfaces/patitasChileapi.interfaces"; 

// Función para obtener la información del usuario
const getUserInfo = async (): Promise<UserProfile | null> => {
    try {
        const token = await getToken();
        if (!token) {
            throw new Error("No se encontró el token de autenticación.");
        }

        const response = await api.get("/user/me/", {
            headers: {
                Authorization: token,
            },
        });

        return response.data; // Retorna los datos del usuario
    } catch (error) {
        console.error("Error al obtener la información del usuario:", error);
        return null;
    }
};

// Función para actualizar el perfil del usuario
const updateUserProfile = async (formData: UserProfile): Promise<UserProfile | null> => {
    try {
        const token = await getToken();
        if (!token) {
            throw new Error("No se encontró el token de autenticación.");
        }

        const response = await api.put("/user/me/", formData, {
            headers: {
                Authorization: token,
            },
        });

        return response.data; // Retorna los datos actualizados del usuario
    } catch (error) {
        console.error("Error al actualizar el perfil:", error);
        return null;
    }
};

export { getUserInfo, updateUserProfile };
