import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';


const PantallaPedido = () => {
  const router = useRouter();

 

  // Limitar la cantidad de planes que se muestran
 

  return (
    <SafeAreaView style={styles.container}>
      {/* Barra superior verde */}
      <View style={styles.barraSuperior}>
        <TouchableOpacity onPress={() => router.back()} style={styles.botonRetroceso}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.textoBarra}>Mi Pedido</Text>
      </View>
      
      
      
      {/* Lista de planes */}
      
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

export default PantallaPedido;
