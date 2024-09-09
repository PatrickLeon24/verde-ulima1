import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity,FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Asegúrate de importar Ionicons
import { useRouter } from 'expo-router';
import PlanItem from './PlanItem'; 
import planesData from '../Planes/Planes.json';
const PantallaVerPlanes = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      {/* Barra superior verde */}
      <View style={styles.barraSuperior}>
        <TouchableOpacity onPress={()=>router.push('/Menu/Menu')} style={styles.botonRetroceso}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.textoBarra}>Planes de Recolección</Text>
      </View>

      {/* Contenido en blanco */}
      <View style={styles.contenidoBlanco}>
        <FlatList
          data={planesData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <PlanItem nombre={item.nombre} descripcion={item.descripcion} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // Color de fondo blanco
  },
  barraSuperior: {
    height: 60, // Altura de la barra superior
    backgroundColor: '#34A853', // Color verde para la barra superior
    flexDirection: 'row', // Coloca los elementos en fila
    alignItems: 'center',
    paddingHorizontal: 10, // Espacio horizontal en la barra superior
  },
  botonRetroceso: {
    marginRight: 30, // Espacio entre la flecha y el texto
  },
  textoBarra: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  contenidoBlanco: {
    flex: 1,
    backgroundColor: 'white', // Fondo blanco para el resto de la pantalla
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoContenido: {
    fontSize: 16,
    color: 'black',
  },
});

export default PantallaVerPlanes;
