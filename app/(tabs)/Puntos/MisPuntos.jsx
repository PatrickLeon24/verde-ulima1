import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import HistorialItem from './HistorialItem'; // Importamos el componente del historial
import data from './historial.json'; // Datos del historial
import styles from './stylesMisPuntos'; // Importamos los estilos
import saldo from './Saldo.json'; // Importamos los puntos desde Saldo.json


const MisPuntos = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Barra superior verde */}
      <View style={styles.barraSuperior}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.botonRetroceso}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.textoBarra}>Mis Puntos</Text>
      </View>

      {/* Sección de Puntos Disponibles */}
      <View style={styles.puntosContainer}>
        <Text style={styles.textoDisponibles}>Disponibles</Text>
        <View style={styles.puntos}>
          {/*Puntos dinamicos*/}
          <Text style={styles.numeroPuntos}>{saldo.puntosDisponibles}</Text> 
          <FontAwesome name="star" size={24} color="#000" />
        </View>
      </View>

      {/* Historial en ScrollView */}
      <ScrollView style={styles.historialScroll}>
        <View style={styles.historialContainer}>
          <Text style={styles.historialTexto}>Historial</Text>
          <View style={styles.linea}></View>

          {/* Generamos los elementos del historial dinámicamente */}
          {data.map((item) => (
            <HistorialItem key={item.id} nombre={item.nombre} puntos={item.puntosGastados} />
          ))}
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


export default MisPuntos;
