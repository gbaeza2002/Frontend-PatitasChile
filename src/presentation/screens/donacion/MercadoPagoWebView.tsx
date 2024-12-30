// src/screens/MercadoPagoWebView.tsx
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { Linking } from 'react-native';

const MercadoPagoWebView = () => {
  const [preferenceUrl, setPreferenceUrl] = useState<string | null>(null);

  useEffect(() => {
    fetch('http://10.0.2.2:8000/pagos/create-preference/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        if (data.init_point) {
          setPreferenceUrl(data.init_point);
          Linking.openURL(data.init_point); // Abre la URL en el navegador o Chrome Custom Tabs
        } else {
          console.error('No se pudo obtener el punto de inicio de la preferencia');
        }
      })
      .catch(error => console.error('Error al obtener la URL de pago:', error));
  }, []);

  if (!preferenceUrl) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return null; // No necesita renderizar WebView, ya que Linking maneja la navegación
};

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MercadoPagoWebView;



