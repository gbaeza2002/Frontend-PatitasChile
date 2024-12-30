import React, { useState } from "react";
import { StyleSheet, Text, View, Alert, TouchableOpacity } from "react-native";
import CustomIcon from "../../../components/CustomIcon";
import CustomInput from "../../../components/CustomInput";
import PrimaryButton from "../../../components/PrimaryButton";
import { Subtitle } from "../../../components/Subtitle";
import { Title } from "../../../components/Title";
import { globalColors } from "../../themes/Themes";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { SesionRootStackParam } from "../../routes/SesionStackNavigator";
import { Header } from "../../../components/Header";
import { api } from "../../../services/api";  
import AsyncStorage from "@react-native-async-storage/async-storage";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export const InicioSesionScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false); // Estado para alternar visibilidad de la contraseña
  const sesionsScreen = useNavigation<NavigationProp<SesionRootStackParam>>();

  const handleLogin = async () => {
    try {
      const response = await api.post('user/token/', {
        email,
        password,
      });

      if (response.status === 200) {
        const { access } = response.data; 
        
        await AsyncStorage.setItem('token', access);

        Alert.alert("Éxito", "Inicio de sesión exitoso.");
        sesionsScreen.navigate('home'); 
      }
    } catch (error) {
      console.log(email, password);
      Alert.alert("Error", "Credenciales incorrectas o problema con el servidor.");
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Header showHeaderRight={false} />
      <View style={styles.content}>
        <Title text={'Bienvenido a Patitas Chile'} style={styles.title} />
        <Subtitle text={'Si no tienes cuenta, haz clic en Registrarse.'} style={{ ...styles.subtitle, marginBottom: 20 }} />

        {/* BUTTONS */}
        <View style={styles.buttonsContainer}>
          <PrimaryButton text={'Registrarse'} onPress={() => sesionsScreen.navigate('Registrar')} style={{ width: 150, backgroundColor: globalColors.quaternary }} />
          <PrimaryButton text={'Iniciar'} onPress={() => { }} />
        </View>

        {/* FORM */}
        <View style={styles.formContainer}>
          <CustomInput
            placeholder={'Email'}
            value={email}
            onChangeText={setEmail}
          />
          <View style={styles.passwordContainer}>
          <CustomInput
            placeholder="Contraseña"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!passwordVisible} // Mostrar u ocultar texto
          />
          <TouchableOpacity
            
            onPress={() => setPasswordVisible(!passwordVisible)} // Cambiar visibilidad
          >
            <MaterialIcons
            style={styles.eyeIcon}
              name={passwordVisible ? "visibility-off" : "visibility"}
              size={24}
              color="#555"
            />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton text={'Iniciar Sesión'} onPress={handleLogin} />
          </View>
        </View>

        <View style={styles.horizontalLine}></View>

        {/* MORE */}
        <View>
          <Subtitle text={'¿Olvidaste tu contraseña?'} style={{ ...styles.subtitle, fontSize: 15, color: '#adadad' }} />
          <View style={styles.buttonContainer}>
            <PrimaryButton text={'Recuperar contraseña'} onPress={() => sesionsScreen.navigate('OlvidePassword')} />
          </View>
        </View>
      </View>
      
      {/* FOOTER */}
      <View style={styles.footer}>
        <Subtitle text={'¿Necesitas ayuda? Contáctanos.'} style={{ ...styles.subtitle, fontSize: 15 }} />
        <View style={styles.iconContainer}>
          <CustomIcon name={'phone'} color={globalColors.primary} />
          <CustomIcon name={'email'} color={globalColors.primary} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  
  content: {
    flex: 1,
    justifyContent: 'flex-start', 
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 20, 
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center', 
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  formContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 20, 
    width: '85%',
    maxWidth: 400,
    flexGrow: 1, 
    justifyContent: 'center', 
  },
  title: {
    color: '#030303',
    fontSize: 30,
    fontFamily: 'Montserrat',
    fontWeight: '700',
    lineHeight: 47,
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    color: '#030303',
    fontSize: 18,
    fontFamily: 'Montserrat',
    fontWeight: '600',
    lineHeight: 47,
    textAlign: 'center',
    marginBottom: 10,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    width: '100%',
  },
  eyeIcon: {
    position: 'relative',
    right: 40, // Espaciado desde el borde derecho
    alignSelf: 'center',
    marginBottom:10
  },
  buttonContainer: {
    marginTop: 50,
    width: '100%',
    alignItems: 'center',
  },
  horizontalLine: {
    height: 2,
    width: '80%',
    backgroundColor: '#e0e0e0',
    marginVertical: 10,
    alignSelf: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  footer: {
    paddingVertical: 5,
    alignItems: 'center',
    backgroundColor: globalColors.quaternary,
    marginTop: 20, 
  },
});

export default InicioSesionScreen;
