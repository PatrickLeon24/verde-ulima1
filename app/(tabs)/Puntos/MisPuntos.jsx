import React, { useEffect, useState } from 'react'; 
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import HistorialItem from './HistorialItem'; 
import data from './historial.json';
import styles from './stylesMisPuntos'; 
import AsyncStorage from '@react-native-async-storage/async-storage'; 

const MisPuntos = ({ navigation }) => {
  const [puntosDisponibles, setPuntosDisponibles] = useState(0);
  const [usuarioId, setUsuarioId] = useState(null);

  useEffect(() => {
 
    const getUserId = async () => {
      try {
        const jsonUserData = await AsyncStorage.getItem('userData');
        if (jsonUserData !== null) {
          const userData = JSON.parse(jsonUserData);
          setUsuarioId(userData.usuario_id); 
        }
      } catch (error) {
        console.error('Error al recuperar el ID del usuario:', error);
      }
    };

    getUserId(); 
  }, []);

  useEffect(() => {
    const fetchPuntos = async () => {
      if (usuarioId) {
        try {
          const response = await fetch(`http://127.0.0.1:8000/back/puntos/${usuarioId}/`);
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

    fetchPuntos(); 
  }, [usuarioId]); 

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

        
          {data.map((item) => (
            <HistorialItem key={item.id} nombre={item.nombre} puntos={item.puntosGastados} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MisPuntos;
