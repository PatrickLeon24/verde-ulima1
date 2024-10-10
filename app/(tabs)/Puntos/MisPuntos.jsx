import React, { useEffect, useState } from 'react'; // Importar useEffect y useState
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import HistorialItem from './HistorialItem'; // Importamos el componente del historial
import data from './historial.json'; // Datos del historial
import styles from './stylesMisPuntos'; // Importamos los estilos
import AsyncStorage from '@react-native-async-storage/async-storage'; // Importar AsyncStorage

const MisPuntos = ({ navigation }) => { // Quitar usuarioId como prop
  const [puntosDisponibles, setPuntosDisponibles] = useState(0); // Estado para almacenar los puntos
  const [usuarioId, setUsuarioId] = useState(null); // Estado para almacenar el ID del usuario

  useEffect(() => {
    // Función para obtener el ID del usuario desde AsyncStorage
    const getUserId = async () => {
      try {
        const jsonUserData = await AsyncStorage.getItem('userData');
        if (jsonUserData !== null) {
          const userData = JSON.parse(jsonUserData);
          setUsuarioId(userData.usuario_id); // Establecer el ID del usuario
        }
      } catch (error) {
        console.error('Error al recuperar el ID del usuario:', error);
      }
    };

    getUserId(); // Llamar a la función para obtener el ID del usuario
  }, []); // Ejecutar este efecto una vez al montar el componente

  useEffect(() => {
    // Función para obtener el puntaje del usuario desde el backend
    const fetchPuntos = async () => {
      if (usuarioId) {
        try {
          const response = await fetch(`http://127.0.0.1:8000/back/puntos/${usuarioId}/`); // Reemplaza con la URL de tu backend
          if (!response.ok) {
            throw new Error('Error al obtener los puntos');
          }
          const data = await response.json();
          setPuntosDisponibles(data.puntos); // Establecer los puntos en el estado
        } catch (error) {
          console.error('Error fetching puntos:', error);
        }
      }
    };

    fetchPuntos(); // Llamar a la función para obtener los puntos
  }, [usuarioId]); // Ejecutar el efecto cuando usuarioId cambie

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
          {/* Puntos dinámicos */}
          <Text style={styles.numeroPuntos}>{puntosDisponibles}</Text> 
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
    </SafeAreaView>
  );
};

export default MisPuntos;
