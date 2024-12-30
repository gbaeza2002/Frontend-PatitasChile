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

export const  NuevaPasswordScreen = () => {
    const [email, setEmail] = useState("");
    const [new_password, setNew_password] = useState("");
    const sesionsScreen = useNavigation<NavigationProp<SesionRootStackParam>>();

    const handleNewPassword = async () => {
        try {
            const response = await api.post("user/reset-password/", { email, new_password });

            if (response.status === 200) {
                Alert.alert("Éxito", "La contraseña se ha cambiado correctamente", [
                    {
                        text: "Aceptar", 
                        onPress: () => { sesionsScreen.navigate('Iniciar'); }
                    }
                ]);
            } else {
                Alert.alert("Error", "Intentelo denuevo");
            }
        } catch (error) {
            Alert.alert("Error", "Hubo un problema al reestablecer su contraseña ");
            console.error(error);
        }
    }

    return (
        <View>
            <Header showHeaderRight={false} />
            <View style={styles.formContainer}>
                <Subtitle text={"Inserta la nueva contraseña"} />
                <CustomInput
                    placeholder={'Correo electrónico'}
                    value={email}
                    onChangeText={setEmail}
                />
                <CustomInput
                    placeholder={'Contraseña'}
                    value={new_password}
                    onChangeText={setNew_password}
                />
                <View style={styles.buttonContainer}>
                    <PrimaryButton text={'Validar'} onPress={handleNewPassword} />
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