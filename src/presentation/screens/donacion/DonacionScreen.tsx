// DonacionScreen.tsx
import React from 'react';
import { View, Image } from 'react-native';
import { Header } from '../../../components/Header';
import { globalStyles } from '../../themes/Themes';
import { Title } from '../../../components/Title';
import { Subtitle } from '../../../components/Subtitle';
import { PaymentOptionButton } from '../../../components/PaymentOptionButton';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Define el tipo de parámetros de navegación
type DonacionStackParamList = {
  DatosTarjetaScreen: undefined;
  MercadoPagoWebView: undefined;
};

// Define el tipo de navegación basado en DonacionStackParamList
type DonacionScreenNavigationProp = StackNavigationProp<DonacionStackParamList, 'DatosTarjetaScreen'>;

const DonacionScreen = () => {
  const navigation = useNavigation<DonacionScreenNavigationProp>();

  return (
    <View style={globalStyles.container}>
      <Header />
      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <Image
          source={require('../../../img/DonationCat.png')}
          style={{ width: 150, height: 150, borderRadius: 10 }}
        />
        <View style={{ backgroundColor: "#ffffff", borderRadius: 18, marginLeft: 10, marginTop: 10, shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.3, shadowRadius: 4, elevation: 5 }}>
          <Title text="Sé parte del cambio" />
          <Subtitle text="Tu generosa donación nos ayuda a proporcionar refugio, alimento y atención médica a mascotas necesitadas. Descubre cómo tu contribución puede hacer la diferencia." />
        </View>

        <View style={{ backgroundColor: "#ffffff", borderRadius: 18, marginLeft: 10, marginTop: 10, shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.3, shadowRadius: 4, elevation: 5 }}>
          <Title text="Como Donar" style={{ marginTop: 15 }} />
          <Subtitle text="Donar a Patitas Chile es fácil y seguro. Elige entre múltiples opciones de pago a continuación para ayudarnos a apoyar a estas adorables mascotas." />
        </View>

        <PaymentOptionButton 
          iconName="account-balance-wallet" 
          text="Tarjeta de débito o crédito" 
          iconColor="#7e22ce" 
          iconSize={32} 
          onPress={() => navigation.navigate('DatosTarjetaScreen')}
        />

        <PaymentOptionButton 
          iconName="credit-card" 
          text="Mercado Pago" 
          iconColor="#7e22ce" 
          iconSize={32} 
          onPress={() => navigation.navigate('MercadoPagoWebView')}
        />

        <PaymentOptionButton 
          iconName="account-balance" 
          text="Transferencia bancaria" 
          iconColor="#7e22ce" 
          iconSize={32} 
          onPress={() => navigation.navigate('DatosTarjetaScreen')}
        />
      </View>
    </View>
  );
};

export default DonacionScreen;






