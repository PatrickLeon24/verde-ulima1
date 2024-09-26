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
        {/*TITULO*/}
        <Text style={styles.planTitle}>{item.nombre}</Text>
        <View style={styles.lineatitulo}/>  
        {/*PRECIO*/}
        <Text style={styles.planprecio}>
          {item.precio} puntos
        </Text>
        {/*DESCRIPCIÓN*/}
        <Text style={styles.planDescriptiontitu}>
          Descripción del Cupón
        </Text>
        <Text style={styles.planDescription}>
          {item.descripcion}
        </Text>

        {/*LOCAL*/}
        <Text style={styles.planDurationtitu}>
          Local: 
        </Text>
        <Text style={styles.planDuration}>
          {item.local}
        </Text>
        {/*<Text style={styles.planPrice}>Indicaciones: {item.indic}</Text>*/}

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
