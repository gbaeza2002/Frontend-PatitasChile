import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; // Importa el icono
import { globalStyles } from '../../themes/Themes';
import { Header } from '../../../components/Header';
import { registerLostPet } from '../../../services/lostPetReportDetail';

export const ReportarMascotaPerdida = () => {
  const [nombre, setNombre] = useState('');
  const [especie, setEspecie] = useState('');
  const [raza, setRaza] = useState('');
  const [ultimaVezVisto, setUltimaVezVisto] = useState('');
  const [ultimoDiaVisto, setUltimoDiaVisto] = useState<Date | null>(null);
  const [mostrarCalendario, setMostrarCalendario] = useState(false);
  const [informacionContacto, setInformacionContacto] = useState('');
  const [detallesAdicionales, setDetallesAdicionales] = useState('');
  const [fotoMascota, setFotoMascota] = useState<File | null>(null);

  const especiesDisponibles = [
    { label: 'Perro', value: 'Dog' },
    { label: 'Gato', value: 'Cat' },
    { label: 'Otro', value: 'Other' },
  ];

  const handleReportar = async () => {
    if (!nombre || !especie || !raza || !ultimaVezVisto || !ultimoDiaVisto || !informacionContacto) {
      Alert.alert('Error', 'Por favor completa todos los campos obligatorios.');
      return;
    }

    try {
      const petData = {
        name: nombre,
        species: especie,
        breed: raza,
        last_seen_location: ultimaVezVisto,
        last_seen_date: ultimoDiaVisto.toISOString().split('T')[0], // Convertir la fecha al formato YYYY-MM-DD
        contact_info: informacionContacto,
        additional_details: detallesAdicionales || undefined, // Si no hay detalles adicionales, enviar undefined
        photo: fotoMascota || undefined, // Si la foto no está seleccionada, enviar undefined
      };

      await registerLostPet(petData);
      Alert.alert('Éxito', 'Mascota reportada exitosamente');
      // Limpiar el formulario si es necesario
      setNombre('');
      setEspecie('');
      setRaza('');
      setUltimaVezVisto('');
      setUltimoDiaVisto(null);
      setInformacionContacto('');
      setDetallesAdicionales('');
      setFotoMascota(null);
    } catch (error) {
      Alert.alert('Error', 'Hubo un problema al reportar la mascota');
      console.error(error);
    }
  };

  const handleSeleccionarFecha = (event: any, selectedDate: Date | undefined) => {
    setMostrarCalendario(false);
    const today = new Date();

    if (selectedDate && selectedDate <= today) {
      setUltimoDiaVisto(selectedDate);
    } else {
      Alert.alert('Error', 'Por favor selecciona una fecha válida (hasta el día actual).');
    }
  };

  return (
    <View style={globalStyles.reportarContainer}>
      <Header />
      <TextInput
        placeholder="Nombre Mascota"
        style={styles.input}
        value={nombre}
        onChangeText={setNombre}
      />
      <View style={styles.input}>
        <Picker
          selectedValue={especie}
          style={styles.picker}
          onValueChange={(itemValue) => setEspecie(itemValue)}
        >
          <Picker.Item label="Selecciona una especie" value="" />
          {especiesDisponibles.map((esp) => (
            <Picker.Item key={esp.value} label={esp.label} value={esp.value} />
          ))}
        </Picker>
      </View>
      <TextInput
        placeholder="Raza"
        style={styles.input}
        value={raza}
        onChangeText={setRaza}
      />
      <TextInput
        placeholder="Última vez visto"
        style={styles.input}
        value={ultimaVezVisto}
        onChangeText={setUltimaVezVisto}
      />
      <TouchableOpacity
        style={styles.datePickerButton}
        onPress={() => setMostrarCalendario(true)}
      >
        <View style={styles.datePickerContent}>
          <Text style={styles.datePickerText}>
            {ultimoDiaVisto ? ultimoDiaVisto.toISOString().split('T')[0] : 'Seleccionar fecha'}
          </Text>
          <MaterialIcons name="calendar-today" size={24} color="#555" style={styles.datePickerIcon} />
        </View>
      </TouchableOpacity>
      {mostrarCalendario && (
        <DateTimePicker
          value={ultimoDiaVisto || new Date()}
          mode="date"
          display="default"
          onChange={handleSeleccionarFecha}
          maximumDate={new Date()} // Restringe la selección de fechas futuras
        />
      )}
      <TextInput
        placeholder="Información de contacto"
        style={styles.input}
        value={informacionContacto}
        keyboardType="numeric" // Habilita el teclado numérico
        onChangeText={(text) => setInformacionContacto(text.replace(/[^0-9]/g, ''))} // Solo permite números
      />
      <TextInput
        placeholder="Detalles adicionales"
        style={styles.input}
        value={detallesAdicionales}
        onChangeText={setDetallesAdicionales}
      />
      <TouchableOpacity style={globalStyles.reportarButton} onPress={handleReportar}>
        <Text style={globalStyles.reportarButtonText}>Reportar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    margin: 10,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  picker: {
    flex: 1,
  },
  datePickerButton: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    margin: 10,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  datePickerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  datePickerText: {
    color: '#555',
    fontSize: 16,
  },
  datePickerIcon: {
    marginLeft: 10,
  },
});
