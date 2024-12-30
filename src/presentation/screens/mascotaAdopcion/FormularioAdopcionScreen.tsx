import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { globalStyles } from '../../themes/Themes';
import { Header } from '../../../components/Header';
import { submitPetData } from '../../../services/api/petFormApi';

// Definimos un tipo para las especies disponibles
type Especie = 'Perro' | 'Gato' | 'Ave' | 'Otro' | '';
type Genero = 'Macho' | 'Hembra' | '';

const FormularioAdopcionScreen = () => {
  const [nombre, setNombre] = useState<string>('');
  const [genero, setGenero] = useState<Genero>('');
  const [especie, setEspecie] = useState<Especie>('');
  const [raza, setRaza] = useState<string>('');
  const [descripcion, setDescripcion] = useState<string>('');
  const [edad, setEdad] = useState<string>('');
  const [direccion, setDireccion] = useState<string>('');

  const especiesDisponibles: Especie[] = ['Perro', 'Gato', 'Ave', 'Otro'];
  const generosDisponibles: Genero[] = ['Macho', 'Hembra'];

  const handleSubirMascota = async () => {
    if (!nombre || !genero || !especie || !raza || !edad || !direccion) {
      Alert.alert('Error', 'Por favor completa todos los campos obligatorios.');
      return;
    }

    if (!['Macho', 'Hembra'].includes(genero)) {
      Alert.alert('Error', 'El género debe ser "Macho" o "Hembra".');
      return;
    }

    if (isNaN(Number(edad)) || edad.length > 2) {
      Alert.alert('Error', 'La edad debe ser un número de máximo dos dígitos.');
      return;
    }

    try {
      const petData = {
        nombre,
        genero,
        especie,
        raza,
        descripcion,
        edad,
        direccion,
        is_adopted: false,
      };
      await submitPetData(petData);
      Alert.alert('Éxito', 'La mascota se ha registrado correctamente.');
      setNombre('');
      setGenero('');
      setEspecie('');
      setRaza('');
      setDescripcion('');
      setEdad('');
      setDireccion('');
    } catch (error) {
      Alert.alert('Error', 'Hubo un problema al subir la mascota.');
    }
  };

  return (
    <View style={globalStyles.reportarContainer}>
      <Header />
      <TextInput
        placeholder="Nombre"
        style={globalStyles.reportarInput}
        value={nombre}
        onChangeText={setNombre}
      />
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={especie}
          style={styles.picker}
          onValueChange={(itemValue: Especie) => setEspecie(itemValue)}
        >
          <Picker.Item label="Selecciona una especie" value="" />
          {especiesDisponibles.map((esp, index) => (
            <Picker.Item key={index} label={esp} value={esp} />
          ))}
        </Picker>
      </View>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={genero}
          style={styles.picker}
          onValueChange={(itemValue: Genero) => setGenero(itemValue)}
        >
          <Picker.Item label="Selecciona un género" value="" />
          {generosDisponibles.map((gen, index) => (
            <Picker.Item key={index} label={gen} value={gen} />
          ))}
        </Picker>
      </View>
      <TextInput
        placeholder="Raza"
        style={globalStyles.reportarInput}
        value={raza}
        onChangeText={setRaza}
      />
      <TextInput
        placeholder="Descripción"
        style={globalStyles.reportarInput}
        value={descripcion}
        onChangeText={setDescripcion}
      />
      <TextInput
        placeholder="Edad"
        style={globalStyles.reportarInput}
        value={edad}
        keyboardType="numeric"
        maxLength={2}
        onChangeText={(text) => setEdad(text.replace(/[^0-9]/g, ''))}
      />
      <TextInput
        placeholder="Dirección"
        style={globalStyles.reportarInput}
        value={direccion}
        onChangeText={setDireccion}
      />
      <TouchableOpacity style={globalStyles.reportarButton} onPress={handleSubirMascota}>
        <Text style={globalStyles.reportarButtonText}>Subir Mascota</Text>
      </TouchableOpacity>
    </View>
  );
};

// Nuevos estilos para el Picker
const styles = StyleSheet.create({
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    // marginLeft:10,
    // marginRight:10,
    margin:10,
    borderRadius: 10,
    marginVertical: 10,
    overflow: 'hidden',
  },
  picker: {
    height: 50,
    width: '100%',
  },
});

export default FormularioAdopcionScreen;
