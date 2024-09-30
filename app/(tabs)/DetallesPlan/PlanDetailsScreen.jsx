import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import planta from '../../../assets/planta.png';

import { Ionicons } from '@expo/vector-icons';

const PlanDetailsScreen = ({ navigation, route }) => {
  
  const { item } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.barraSuperior}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.botonRetroceso}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.textoBarra}>Detalles del plan</Text>
      </View>

      <Image
        source={{uri: item.imagen}}
        style={styles.image}
      />

      <View style={styles.detailsContainer}>
        <Text style={styles.planTitle}>{item.nombre}</Text>
        <View style={styles.lineatitulo}/>  
        {/*DESCRIPCIÓN*/}
        <Text style={styles.planDescriptiontitu}>
          Descripción del Plan
        </Text>
        <Text style={styles.planDescription}>
          {item.descripcion}
        </Text>
        <Text style={styles.planDetails}>
          Cantidad de Aserrin: {item.aserrin}Kg de Aserrin 
        </Text>
        <Text style={styles.planDetails}> 
          Cantidad de Baldes: {item.baldes} Baldes
        </Text>
        <Text style={styles.planDuration}>Duración: {item.duracion} meses</Text>
        <Text style={styles.planPrice}>S/. {item.precio}</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Pago')}
        >
          <Text style={styles.buttonText}>Pagar Plan</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 40
  },
  image: {
    width: '100%',
    height: 237,
    marginBottom: 16,
    resizeMode: 'contain',
  },
  detailsContainer: {
    padding: 16,
  },
  planTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  planDetails: {
    fontSize: 16,
    marginBottom: 8,
  },
  planDuration: {
    fontSize: 16,
    marginBottom: 8,
  },
  planDescriptiontitu: {
    paddingTop: 10,
    fontSize: 24,
    marginBottom: 5,
    fontWeight: 'bold',
    color: 'gray',
  },
  planDescription: {
    fontSize: 16,
    marginBottom: 16,
  },
  planPrice: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#00cc99',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
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
  lineatitulo: {
    borderBottomColor: '#A9A9A9',
    borderBottomWidth: 2  ,
    marginTop: 1,
    marginBottom: 5,
  },
});

export default PlanDetailsScreen;
