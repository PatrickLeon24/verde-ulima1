import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput,TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PaymentScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.barraSuperior}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.botonRetroceso}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.textoBarra}>Pago</Text>
      </View>
      <Text style={styles.subtitle}>Elije una forma de pago:</Text>
      <Text style={styles.sectionTitle}>Tarjeta de Crédito o Débito</Text>
      <View style={styles.cardContainer}>
      <TextInput style={styles.input} placeholder="Numero de Tarjeta" keyboardType="number-pad" />
      <View style={styles.inlineInputs}>
        <TextInput style={[styles.input, styles.smallInput]} placeholder="--/--" keyboardType="number-pad" />
        <TextInput style={[styles.input, styles.smallInput, styles.cvv]} placeholder="CVV" keyboardType="number-pad" />
      </View>
      <TextInput style={styles.input} placeholder="DNI" keyboardType="number-pad" />
      </View>
      <Text style={[styles.sectionTitle ,styles.yape ]}>Yape</Text>
      <View style={styles.cardContainer}>
      <TextInput style={styles.input} placeholder="Numero de telefono" keyboardType="number-pad" />
      <TextInput style={styles.input} placeholder="DNI" keyboardType="number-pad" />
      <TextInput style={styles.input} placeholder="Numero de confirmación" keyboardType="number-pad" />
    </View>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Pagar</Text>
    </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#fff',
  },
  headerpago: {
    backgroundColor: '#4CAF50',
    padding: 16,
    
    alignItems: 'center',
    marginTop:35,
  },
  headerTextpago: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 8,
    marginTop:20,
    marginLeft:15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft:15,
    marginRight:15,
  },
  yape:{
    marginTop:50,
  },
  cardContainer: {
    marginTop: 30,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    marginLeft:15,
    marginRight:15,
  },
  inlineInputs: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  smallInput: {
    width: '45%',
    
    
  },
  cvv:{
    marginLeft:-9,
  },cardContainer: {
    marginTop: 30,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    marginLeft:15,
    marginRight:15,
  },
  button: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 50,
    marginLeft:100,
    marginRight:100,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  barraSuperior: {
    height: 60,
    backgroundColor: '#34A853',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,

  },
  botonRetroceso: {
    marginRight: 30,
  },
  textoBarra: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PaymentScreen;
