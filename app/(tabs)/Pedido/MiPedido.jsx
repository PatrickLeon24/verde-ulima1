import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './estiloPedi'


const PantallaPedido = ({navigation}) => {
  
  // Limitar la cantidad de planes que se muestran
 

  return (
    <SafeAreaView style={styles.container}>
      {/* Barra superior verde */}
      <View style={styles.barraSuperior}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.botonRetroceso}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.textoBarra}>Mi Pedido</Text>
      </View>
      
      <View style={styles.contEst}>
        <View style={styles.boxEst}>
          <Text style={styles.textoEst}>Estado de mi Pedido</Text>
        </View>
      
      
      <View style={styles.contPed}>
      {/* Line */}
      <View style={styles.linPed} />
      {/* Dots */}
      <View style={styles.dotContainer}>
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>
    </View>
    </View>

 </SafeAreaView>
  );
};



export default PantallaPedido;
