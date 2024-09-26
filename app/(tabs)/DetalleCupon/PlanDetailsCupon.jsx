import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import kfc from '../../../assets/kfc.png';
import styles from './estilosPDetaCup';

import { Ionicons } from '@expo/vector-icons';

const PlanDetailsScreen = ({ navigation, route }) => {
  
  const { item } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.barraSuperior}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.botonRetroceso}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.textoBarra}>Detalles del Cupón</Text>
      </View>

      <Image
        source={{uri: item.imagen}}
        style={styles.image}
      />

      <View style={styles.detailsContainer}>
        <Text style={styles.planTitle}>{item.nombre}</Text>
        <Text style={styles.planDescriptiontitu}>
          Descripción del Cupón
        </Text>
        <Text style={styles.planDescription}>
          {item.descripcion}
        </Text>
        <Text style={styles.planDuration}>Local: {item.local}</Text>
        <Text style={styles.planPrice}>Indicaciones: {item.indic}</Text>

        <TouchableOpacity
          style={styles.button}
        >
          <Text style={styles.buttonText}>Canjear Ahora</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};



export default PlanDetailsScreen;
