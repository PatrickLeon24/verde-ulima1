import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import planta from '../../../assets/planta.png';

import { Ionicons } from '@expo/vector-icons';

const PlanDetailsScreen = ({ navigation, route }) => {
  
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.barraSuperior}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.botonRetroceso}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.textoBarra}>Detalles del plan</Text>
      </View>

      <Image
        source={planta}
        style={styles.image}
      />

      <View style={styles.detailsContainer}>
        <Text style={styles.planTitle}>Nombre de Plan</Text>
        <Text style={styles.planDescription}>Descripción: {item.descripcion}</Text>
        <Text style={styles.planDetails}>
          {'<X kg de Aserrín>'} {'<X Baldes>'}
        </Text>
        <Text style={styles.planDuration}>Duración: X días</Text>
        <Text style={styles.planDescription}>Nombre. {item.nombre}</Text>
        <Text style={styles.planPrice}>S/. {item.precio}</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Payment')}
        >
          <Text style={styles.buttonText}>Pagar Plan</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 8,
    marginBottom: 16,
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
  planDescription: {
    fontSize: 16,
    marginBottom: 16,
  },
  planPrice: {
    fontSize: 18,
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
});

export default PlanDetailsScreen;
