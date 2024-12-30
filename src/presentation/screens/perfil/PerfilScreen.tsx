import React, { useEffect, useState } from "react";
import { Image, ScrollView, Text, View, Alert, Modal, TextInput, StyleSheet } from "react-native";
import { getUserInfo, updateUserProfile } from "../../../services/api/profileApi"; // Importamos el servicio
import { Header } from "../../../components/Header";
import { Title } from "../../../components/Title";
import { globalStyles } from "../../themes/Themes";
import { Subtitle } from "../../../components/Subtitle";
import PrimaryButton from "../../../components/PrimaryButton";
import { ProfileCard } from "../../../components/ProfileCard";
import { UserProfile } from "../../../infraestructure/interfaces/patitasChileapi.interfaces"; // Tipo UserProfile
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { SesionRootStackParam } from "../../routes/SesionStackNavigator";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const PerfilScreen = () => {
    const [userInfo, setUserInfo] = useState<UserProfile>({
        first_name: "",
        last_name: "",
        phone: "",
        direction: "",
        email: "",
        username: "",
    });

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [formData, setFormData] = useState<UserProfile>({
        first_name: "",
        last_name: "",
        phone: "",
        direction: "",
        email: "",
        username: "",
    });

    const navigation = useNavigation<NavigationProp<SesionRootStackParam>>();

    // Obtener la información del usuario al cargar la pantalla
    const fetchUserInfo = async () => {
        const user = await getUserInfo();
        if (user) {
            setUserInfo(user);
            setFormData(user); // Inicializa el formulario con los datos existentes
        } else {
            Alert.alert("Error", "No se pudo obtener la información del usuario.");
        }
    };

    useEffect(() => {
        fetchUserInfo(); // Llama la función para obtener el perfil
    }, []);

    // Función para actualizar el perfil
    const handleUpdateProfile = async () => {
        if (!formData.first_name || !formData.last_name || !formData.phone || !formData.direction) {
            Alert.alert("Error", "Todos los campos deben ser llenados.");
            return;
        }
    
        if (formData.phone.length < 9) {
            Alert.alert("Error", "El número de teléfono debe tener exactamente 9 dígitos.");
            return;
        }
    
        const updatedUser = await updateUserProfile(formData);
        if (updatedUser) {
            // Asegúrate de que 'username' y 'email' estén correctamente actualizados
            const updatedUserInfo = {
                ...updatedUser,
                username: userInfo.username, // Mantén el username actual si no fue actualizado
                email: userInfo.email        // Mantén el email actual si no fue actualizado
            };
            setUserInfo(updatedUserInfo);   // Actualiza el estado con los nuevos datos
            setIsModalVisible(false);      // Cierra el modal
            Alert.alert("Éxito", "Perfil actualizado con éxito.");
        } else {
            Alert.alert("Error", "No se pudo actualizar el perfil.");
        }
    };
    

    const handleLogout = async () => {
        // Eliminar el token de autenticación
        await AsyncStorage.removeItem('token');
        // Navegar a la pantalla de inicio de sesión
        navigation.navigate('Iniciar');
    };

    return (
        <ScrollView style={styles.container}>
            <View>
                <Header />
                <View style={styles.headerContainer}>
                    <Title style={styles.titleStyle} text={"Perfil"} />
                    <Image source={require("../../../img/PerroLuchador.jpg")} style={styles.image} />
                    <Subtitle text={"Cambiar Foto"} style={styles.subtitle} />
                </View>

                <View style={styles.profileCardContainer}>
                    <ProfileCard
                        first_name={userInfo.first_name}
                        last_name={userInfo.last_name}
                        phone={userInfo.phone}
                        direction={userInfo.direction}
                        email={userInfo.email}
                        username={userInfo.username}
                    />
                </View>

                <View style={styles.buttonContainer}>
                    <PrimaryButton text={"Actualizar Perfil"} onPress={() => setIsModalVisible(true)} />
                </View>

                <View>
                    <Title style={styles.titleStyle} text={"Historial de adopción"} />
                    <Text style={styles.inputStyle} />

                    <Title style={styles.titleStyle} text={"Reporte mascotas perdidas"} />
                    <Text style={styles.inputStyle} />
                </View>

                <PrimaryButton
                    text={"Cerrar sesión"}
                    onPress={() => handleLogout()} // Mostrar el modal de confirmación
                    style={{ backgroundColor: 'red' }}
                />


            </View>

            {/* Modal para actualizar perfil */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={() => setIsModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Title text={"Actualizar Perfil"} />
                        <TextInput
                            style={styles.inputStyle}
                            placeholder="Nombre"
                            value={formData.first_name}
                            onChangeText={(text) => setFormData({ ...formData, first_name: text })}
                        />
                        <TextInput
                            style={styles.inputStyle}
                            placeholder="Apellido"
                            value={formData.last_name}
                            onChangeText={(text) => setFormData({ ...formData, last_name: text })}
                        />
                        <TextInput
                            style={styles.inputStyle}
                            placeholder="Teléfono"
                            value={formData.phone}
                            keyboardType="numeric" // Habilita el teclado numérico
                            maxLength={9} // Limita la entrada a 9 caracteres
                            onChangeText={(text) => {
                                const numericValue = text.replace(/[^0-9]/g, ""); // Solo permite números
                                setFormData({ ...formData, phone: numericValue }); // Actualiza el estado con el valor numérico
                            }}
                        />

                        <TextInput
                            style={styles.inputStyle}
                            placeholder="Dirección"
                            value={formData.direction}
                            onChangeText={(text) => setFormData({ ...formData, direction: text })}
                        />

                        <View style={styles.modalButtonContainer}>
                            <PrimaryButton text={"Guardar Cambios"} onPress={handleUpdateProfile} style={styles.modalButton} />
                            <PrimaryButton text={"Cerrar"} onPress={() => setIsModalVisible(false)} style={[styles.modalButton, styles.exitButton]} />
                        </View>
                    </View>
                </View>
            </Modal>

        </ScrollView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    headerContainer: {
        alignItems: "center",
        justifyContent: "flex-start",
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 80,
    },
    subtitle: {
        marginTop: 10,
    },
    profileCardContainer: {
        marginTop: 20,
    },
    buttonContainer: {
        marginTop: 10,
        marginBottom: 20,
    },
    titleStyle: {
        alignSelf: "flex-start",
        marginLeft: 20,
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
        width: "80%",
        height: "50%"
    },
    inputStyle: {
        ...globalStyles.textinputglobal,
        marginTop: 6,
    },
    modalButtonContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: '30%',
        width: "100%",
    },
    modalButton: {
        width: "100%",
        height: 50,
        marginBottom: 35,
    },
    exitButton: {
        width: "100%",
        height: 50,
        backgroundColor: "#d9534f",
        marginBottom: 0,
    },
});

export default PerfilScreen;
