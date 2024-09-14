import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';


const PantallaPuntos = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* Barra superior verde */}
      <View style={styles.barraSuperior}>
        <TouchableOpacity onPress={() => router.back()} style={styles.botonRetroceso}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.textoBarra}>Mis Puntos</Text>
      </View>

      {/* Sección de Puntos Disponibles */}
      <View style={styles.puntosContainer}>
        <Text style={styles.textoDisponibles}>Disponibles</Text>
        <View style={styles.puntos}>
          <Text style={styles.numeroPuntos}>100</Text>
          <FontAwesome name="star" size={24} color="#000" />
        </View>
      </View>

      {/* Historial en ScrollView */}
      <ScrollView style={styles.historialScroll}>
        <View style={styles.historialContainer}>
          <Text style={styles.historialTexto}>Historial</Text>
          <View style={styles.linea}></View>

          {/* Aquí irían los elementos del historial de canjes */}
          <View style={styles.itemHistorial}>
            <Text style={styles.textoItemHistorial}>Cupón 1</Text>
          </View>
          <View style={styles.itemHistorial}>
            <Text style={styles.textoItemHistorial}>Cupón 2</Text>
          </View>
          <View style={styles.itemHistorial}>
            <Text style={styles.textoItemHistorial}>Cupón 3</Text>
          </View>
          <View style={styles.itemHistorial}>
            <Text style={styles.textoItemHistorial}>Cupón 4</Text>
          </View>
          <View style={styles.itemHistorial}>
            <Text style={styles.textoItemHistorial}>Cupón 5</Text>
          </View>
          <View style={styles.itemHistorial}>
            <Text style={styles.textoItemHistorial}>Cupón 6</Text>
          </View>
          <View style={styles.itemHistorial}>
            <Text style={styles.textoItemHistorial}>Cupón 7</Text>
          </View>
          <View style={styles.itemHistorial}>
            <Text style={styles.textoItemHistorial}>Cupón 8</Text>
          </View>
          <View style={styles.itemHistorial}>
            <Text style={styles.textoItemHistorial}>Cupón 9</Text>
          </View>
          {/* Puedes agregar más elementos así */}
        </View>
      </ScrollView>

      {/* Canjear Código */}
      <View style={styles.canjearContainer}>
        <Text style={styles.canjearTexto}>Canjear Código</Text>
        <View style={styles.linea}></View>
        <TextInput 
          style={styles.inputCodigo}
          placeholder="Ingresar Código. . ."
        />
        <TouchableOpacity style={styles.botonEnviar}>
          <Text style={styles.textoBoton}>Enviar</Text>
        </TouchableOpacity>
      </View>
      
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
  puntosContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  textoDisponibles: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  puntos: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  numeroPuntos: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 10,
  },
  historialScroll: {
    flex: 1, // Para ocupar el espacio disponible
    marginVertical: 20,
  },
  historialContainer: {
    paddingHorizontal: 20,
  },
  historialTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  linea: {
    height: 1,
    backgroundColor: '#000',
    marginBottom: 10,
  },
  itemHistorial: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  textoItemHistorial: {
    fontSize: 16,
  },
  canjearContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  canjearTexto: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  inputCodigo: {
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    fontSize: 16,
    paddingVertical: 10,
    marginBottom: 20,
  },
  botonEnviar: {
    backgroundColor: '#34A853',
    borderRadius: 20,
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 30,
    alignSelf: 'center',
    width: 150,
  },
  textoBoton: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PantallaPuntos;