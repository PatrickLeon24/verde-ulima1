import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import PlanItem from './PlanItem'; 
import planesData from '../Planes/Planes.json';

const PantallaPlan = ({navigation}) => {
  const router = useRouter();

  const handlePressPlan = (id) => {
    // Navegar a la pantalla de detalles del plan
    router.push(`/Planes/DetallePlan/${id}`);
  };

  // Limitar la cantidad de planes que se muestran
  const MAX_PLANES_TO_SHOW = 4; // Puedes ajustar este valor según tus necesidades
  const limitedPlanesData = planesData.slice(0, MAX_PLANES_TO_SHOW);

  return (
    <SafeAreaView style={styles.container}>
      {/* Barra superior verde */}
      <View style={styles.barraSuperior}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.botonRetroceso}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.textoBarra}>Mi plan</Text>
      </View>
      <PlanItem
        nombre={"SI"}
        descripcion={"SI"}
        onPress={() => navigation.navigate('')} // Navegar al plan específico
      />
      <View style={styles.barramedia}>
        <Text style={styles.buttonText}>¿Quieres cambiar de plan?</Text>
        
      </View>
      
      
      {/* Lista de planes */}
      <FlatList
        data={limitedPlanesData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <PlanItem
            nombre={item.nombre}
            descripcion={item.descripcion}
            onPress={() => navigation.navigate('verpla', { item })} // Navegar al plan específico
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
  button: {
    backgroundColor: 'white', // Color del botón
    width: 107,               // Ancho fijo del botón
    height: 40,               // Espacio horizontal interno
    borderRadius: 30,         // Hace el botón redondeado
    alignItems: 'center',     // Alinea el texto al centro
    marginVertical: 20,
    marginHorizontal: 10, 
    borderWidth: 1,           // Ancho del borde
    borderColor: '#34A853',
    // Sombra para iOS
    justifyContent: 'center', // Espaciado vertical
  },
  buttonText: {
    color: '#000000',         // Color del texto
    fontSize: 24,             // Tamaño de la fuente
    fontWeight: 'bold',       // Cambié 'BOLD' a 'bold'
    paddingHorizontal: 10,
  },
  barraSuperior: {
    height: 60,
    backgroundColor: '#34A853',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  barramedia: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center', // Alinea verticalmente el texto y el ícono
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

export default PantallaPlan;
