import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import styles from './estilosCup';
import CuponItem from './CuponItem'; 
import AsyncStorage from '@react-native-async-storage/async-storage'; // Importar AsyncStorage
//import CuponInfo from '../Cupones/Cupons.json';


const PantallaPuntos = ({navigation}) => {
  const [cuponesData, setCuponesData] = useState([]);
  const [loading, setLoading] = useState(true);const [puntosDisponibles, setPuntosDisponibles] = useState(0); // Estado para almacenar los puntos
  const [usuarioId, setUsuarioId] = useState(null); // Estado para almacenar el ID del usuario

  useEffect(() => {
    const fetchPlanes = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/back/cupones');
        if (!response.ok) {
          throw new Error('Error en la carga de los datos');
        }
        const data = await response.json();
        setCuponesData(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlanes();
  }, []);

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


  if (loading) {
    return (
      <View /*style={styles.loadingContainer}*/>
        <Text>Cargando planes...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* - - - - - Barra superior verde - - - - - */}
      <View style={styles.barraSuperior}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.botonRetroceso}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.textoBarra}>Cupones</Text>
      </View>
      
      {/* - - - - - Navbar - - - - - */ }
      <View style={styles.OLAxd}>
        <Text style={styles.homero}>Lista de Cupones </Text><Text style={styles.ola}>{puntosDisponibles} <FontAwesome name="star" size={24} color="#green" style={styles.starrrr}/></Text>
        
      </View>
      <View style={styles.lineatitulo}/> 

      {/* - - - - - Lista de Cupones - - - - - */}
      <FlatList
        data={cuponesData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CuponItem
            local={item.local}
            descripcion={item.descripcion}
            costo_puntos={item.costo_puntos}
            imagen={item.imagen}
            onPress={() =>  navigation.navigate('VerCupon', { item })} // Navegar al plan específico
          />
        )}
        contentContainerStyle = {styles.listaContenido} // Añadido para mejor estilo de contenido
      />
    </SafeAreaView>
  );
};

export default PantallaPuntos;