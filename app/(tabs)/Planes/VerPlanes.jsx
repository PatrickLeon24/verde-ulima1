import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import PlanItem from './PlanItem'; 
import planesData from '../Planes/Planes.json';

const PantallaVerPlanes = () => {
  const router = useRouter();

  const handlePressPlan = (id) => {
    // Navegar a la pantalla de detalles del plan, por ejemplo:
    router.push(`/Planes/DetallePlan/${id}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Barra superior verde */}
      <View style={styles.barraSuperior}>
        <TouchableOpacity onPress={() => router.push('/Menu/Menu')} style={styles.botonRetroceso}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.textoBarra}>Planes de Recolección</Text>
      </View>

      {/* Lista de planes */}
      <FlatList
        data={planesData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <PlanItem
            nombre={item.nombre}
            descripcion={item.descripcion}
            onPress={() => handlePressPlan(item.id)} // Navegar al plan específico
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
