import { Image, Text, View, StyleSheet } from "react-native";
import { Header } from "../../../components/Header";
import PaymentDetails from "../../../components/PaymentDetails";
import PrimaryButton from "../../../components/PrimaryButton";
import { globalStyles } from "../../themes/Themes";
import { Title } from "../../../components/Title";
import React from "react";

export const DatosTarjetaScreen = () => {
  return (
    <View style={globalStyles.container}>
      <Header />
      <Title style={{textAlign: 'center', fontSize:25}} text={"Gracias Por Su Donacion"} />
      <View style={styles.imageContainer}>
        <Image
          source={require('../../../img/DonationCat.png')}
          style={styles.image}
        />
      </View>
      
      <PaymentDetails />

      <View style={styles.buttonContainer}>
        <PrimaryButton
          text="Confirmar Donación"
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center', 
    marginVertical: 10,   
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  buttonContainer: {
    marginTop: 80,
    alignItems: 'center',
  },
});

export default DatosTarjetaScreen;
