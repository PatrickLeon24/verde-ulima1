import React from 'react';
import { View, Text, Image, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './estiloPedi'
import carrogolf from '../Pedido/WAAA.png';
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
        
      {/*Linea xdd*/}
      <View style={styles.linPed} />
      {/* Dots */}
      
      <View style={styles.dotContainer}>
      <View>
        <Image source={carrogolf} style={styles.truckIcon}/>
        <View style={styles.dot} />
        <Text style={styles.labelx}>Solicitud</Text>
        <Text style={styles.labelx}>Recibida</Text>
      </View>  
      <View>
        <View style={styles.dot} />
        <Text style={styles.labelx}>Preparacion</Text>
      </View>
      <View>
        <View style={styles.dot} />
        <Text style={styles.labelx}>En</Text>
        <Text style={styles.labelx}>Camino</Text>
      </View>
      <View>
        <View style={styles.dotlast} />
        <Text style={styles.labellast}>Entregado</Text>
      </View>
      </View>
      
      </View>
      {/*<View style={styles.row}>
        <View style={styles.column}>
          <Text>Solicitud</Text>
          <Text>Recibida</Text>
        </View>
        <View style={styles.column}>
          <Text>En preparación</Text>
        </View>
        <View style={styles.column}>
          <Text>En camino</Text>
        </View>
        <View style={styles.column}>
          <Text>Entregado</Text>
        </View>
    
      </View>*/}
    </View>
    
    

 </SafeAreaView>
  );
};



export default PantallaPedido;
