import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import PlanItem from './PlanItem'; 
import planesData from '../Planes/Planes.json';


const PantallaVerPlanes = ({ navigation }) => {
  


  return (
    <SafeAreaView style={styles.container}>
      {/* Barra superior verde */}
      
      <View style={styles.barraSuperior}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.botonRetroceso}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.textoBarra}>Planes de Recolección</Text>
      </View>
      <TouchableOpacity style={styles.button} 
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>≡   Filtros</Text>
        </TouchableOpacity>

      {/* Lista de planes */}
      <FlatList
        data={planesData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item}) => (
          <PlanItem
            nombre={item.nombre}
            descripcion={item.descripcion}
            precio={item.precio}
            onPress={() =>  navigation.navigate('VerPlan', { item })} // Navegar al plan específico
          />
        )}
        contentContainerStyle={styles.listaContenido} // Añadido para mejor estilo de contenido
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 40
  },
  button: {
    backgroundColor: 'white', // Color del botón
    width: 107,               // Ancho fijo del botón
    height: 40,        // Espacio horizontal interno
    borderRadius: 30,            // Hace el botón redondeado
    alignItems: 'center',        // Alinea el texto al centro
    marginVertical: 20,
    marginHorizontal:10, 
    borderWidth: 1,             // Ancho del borde
    borderColor: '#34A853',
    // Sombra para iOS
    
    justifyContent: 'center',
           // Espaciado vertical
  },
  buttonText: {
    color: '#34A853',              // Color del texto
    fontSize: 12,                // Tamaño de la fuente
    fontWeight: 'semibold',
    textAlign: 'center', 
    paddingHorizontal: 10,
              // Negrita para el texto
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
  listaContenido: {
    paddingVertical: 10, // Añadir espacio vertical entre los elementos
  },
});

export default PantallaVerPlanes;
