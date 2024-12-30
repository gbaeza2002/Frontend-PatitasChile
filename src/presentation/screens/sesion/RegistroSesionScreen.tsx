import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native';
import { Header } from '../../../components/Header';
import { Title } from '../../../components/Title';
import { Subtitle } from '../../../components/Subtitle';
import PrimaryButton from '../../../components/PrimaryButton';
import { globalColors } from '../../themes/Themes';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { SesionRootStackParam } from '../../routes/SesionStackNavigator';
import CustomInput from '../../../components/CustomInput';
import CustomIcon from '../../../components/CustomIcon';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; // Para el icono de visibilidad
import { api } from '../../../services/api';
import axios from 'axios';

export const RegistroSesionScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false); // Estado para visibilidad de contraseña
  const sesionsScreen = useNavigation<NavigationProp<SesionRootStackParam>>();

  const handleRegister = async () => {
    try {
      const response = await api.post('user/register', {
        email: email,
        password: password,
        username: username,
      });

      Alert.alert('Registro exitoso', response.data.detail);
      sesionsScreen.navigate('VerificarCodigo');
    } catch (error) {
      console.log(email, password, username);
      if (axios.isAxiosError(error)) {
        console.log('Error response data:', error.response?.data);
        Alert.alert(
          'Error al registrarse',
          error.response?.data?.detail || 'Ocurrió un error. Inténtalo nuevamente.'
        );
      } else {
        Alert.alert('Error', 'Ocurrió un error desconocido. Inténtalo nuevamente.');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Header showHeaderRight={false} />

      <View style={styles.content}>
        <Title text={'Bienvenido a Patitas Chile'} style={styles.title} />
        <Subtitle text={'Únete a nuestra comunidad'} style={{ ...styles.subtitle, marginBottom: 20 }} />

        {/* BOTONES */}
        <View style={styles.buttonsContainer}>
          <PrimaryButton text={'Registrarse'} onPress={() => { }} style={{ width: 150 }} />
          <PrimaryButton text={'Iniciar'} onPress={() => sesionsScreen.navigate('Iniciar')} style={{ width: 150, backgroundColor: globalColors.quaternary }} />
        </View>

        {/* FORMULARIO */}
        <View style={styles.formContainer}>
          <CustomInput placeholder={'Nombre de usuario'} value={username} onChangeText={setUsername} />
          <CustomInput placeholder={'Email'} value={email} onChangeText={setEmail} />
          <View style={styles.passwordContainer}>
            <CustomInput
              placeholder={'Contraseña'}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!passwordVisible} // Mostrar u ocultar contraseña
            />
            <TouchableOpacity
              style={styles.icon}
              onPress={() => setPasswordVisible(!passwordVisible)} // Cambiar visibilidad
            >
              <MaterialIcons
                name={passwordVisible ? 'visibility-off' : 'visibility'}
                size={24}
                color="#555"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton text={'Crear una cuenta'} onPress={handleRegister} />
          </View>
        </View>
      </View>

      {/* PIE DE PÁGINA */}
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 20,
    width: '85%',
    maxWidth: 400,
  },
  passwordContainer: {
    position: 'relative',
    marginBottom: 15,
    width: '100%',
  },
  icon: {
    position: 'absolute',
    right: 10,
    top: 12,
    zIndex: 1,
  },
  title: {
    color: '#030303',
    fontSize: 30,
    fontFamily: 'Montserrat',
    fontWeight: '700',
    lineHeight: 47,
    textAlign: 'center',
  },
  subtitle: {
    color: '#030303',
    fontSize: 20,
    fontFamily: 'Montserrat',
    fontWeight: '600',
    lineHeight: 47,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 60,
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
  },
  footer: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: globalColors.quaternary,
  },
});
