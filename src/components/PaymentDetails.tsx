import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';

const PaymentDetails = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCVC] = useState('');
  const [donationAmount, setDonationAmount] = useState('');
  const [saveCardDetails, setSaveCardDetails] = useState(false);
  const [monthlyDonation, setMonthlyDonation] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalles de pago</Text>

      <TextInput
        style={styles.input}
        placeholder="Número de Tarjeta"
        placeholderTextColor="#8A8A8A"
        keyboardType="numeric"
        value={cardNumber}
        onChangeText={setCardNumber}
      />

      <View style={styles.row}>
        <TextInput
          style={[styles.input, styles.smallInput]}
          placeholder="MM/YY"
          placeholderTextColor="#8A8A8A"
          keyboardType="numeric"
          value={expiryDate}
          onChangeText={setExpiryDate}
        />
        <TextInput
          style={[styles.input, styles.smallInput]}
          placeholder="CVC"
          placeholderTextColor="#8A8A8A"
          keyboardType="numeric"
          value={cvc}
          onChangeText={setCVC}
        />
      </View>

      <TextInput
        style={styles.input}
        placeholder="Select Donation Amount"
        placeholderTextColor="#8A8A8A"
        keyboardType="numeric"
        value={donationAmount}
        onChangeText={setDonationAmount}
      />

      <View style={styles.checkboxContainer}>
        <Pressable
          style={[styles.checkbox, saveCardDetails && styles.checkedCheckbox]}
          onPress={() => setSaveCardDetails(!saveCardDetails)}
        >
          {saveCardDetails && <View style={styles.checkboxTick} />}
        </Pressable>
        <Text style={styles.checkboxLabel}>Guarde los datos de la tarjeta para futuras donaciones</Text>
      </View>

      <View style={styles.checkboxContainer}>
        <Pressable
          style={[styles.checkbox, monthlyDonation && styles.checkedCheckbox]}
          onPress={() => setMonthlyDonation(!monthlyDonation)}
        >
          {monthlyDonation && <View style={styles.checkboxTick} />}
        </Pressable>
        <Text style={styles.checkboxLabel}>Haz de esto una donación mensual</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 16,
    marginTop:20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    width: '90%',
    alignSelf: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 50,
    borderColor: '#D9D9D9',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  smallInput: {
    width: '48%',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#8A8A8A',
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkedCheckbox: {
    backgroundColor: '#7e22ce',
  },
  checkboxTick: {
    width: 10,
    height: 10,
    backgroundColor: 'white',
    borderRadius: 2,
  },
  checkboxLabel: {
    fontSize: 16,
    color: '#333',
  },
});

export default PaymentDetails;
