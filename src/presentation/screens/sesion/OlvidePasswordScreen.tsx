import React, { useState } from "react"
import { View, Alert } from "react-native"
import { Header } from "../../../components/Header"
import CustomInput from "../../../components/CustomInput"
import PrimaryButton from "../../../components/PrimaryButton"
import { StyleSheet } from "react-native"
import { Subtitle } from "../../../components/Subtitle"
import {api} from "../../../services/api" 
import { NavigationProp, useNavigation } from "@react-navigation/native"
import { SesionRootStackParam } from "../../routes/SesionStackNavigator"

export const OlvidePasswordScreen = () => {
    const [email, setEmail] = useState("");
    const sesionsScreen = useNavigation<NavigationProp<SesionRootStackParam>>();

    const handlePasswordReset = async () => {
        try {
            const response = await api.post("user/request-password-reset/", { email});

            if (response.status === 200) {
                Alert.alert("Éxito", "El código ha sido verificado correctamente.", [
                    {
                        text: "Aceptar", 
                        onPress: () => { sesionsScreen.navigate('VerificarCodigoRecuperarPassword'); }
                    }
                ]);
            } else {
                Alert.alert("Error", "Código incorrecto o expirado.");
            }
        } catch (error) {
            Alert.alert("Error", "Hubo un problema con la verificación.");
            console.error(error);
        }
    }

    return (
        <View>
            <Header showHeaderRight={false} />
            <View style={styles.formContainer}>
                <Subtitle text={"Ingresa tu correo para recuperar tu contraseña"} />
                <CustomInput
                    placeholder={'Correo electrónico'}
                    value={email}
                    onChangeText={setEmail}
                />
                <View style={styles.buttonContainer}>
                    <PrimaryButton text={'Recuperar contraseña'} onPress={handlePasswordReset} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: 20,
        width: '85%',
        maxWidth: 400,
    },
    buttonContainer: {
        marginTop: 60,
        width: '100%',
        alignItems: 'center',
    },
})