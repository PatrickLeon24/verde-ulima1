import React, { useEffect, useState } from 'react'; 
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, Modal, Image } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import HistorialItem from './HistorialItem'; 
import styles from './stylesMisPuntos'; 
import AsyncStorage from '@react-native-async-storage/async-storage'; 

const MisPuntos = ({ navigation }) => {
  const [puntosDisponibles, setPuntosDisponibles] = useState(0);
  const [usuarioId, setUsuarioId] = useState(null);
  const [historial, setHistorial] = useState([]);
  const [modalVisible, setModalVisible] = useState(false); // Estado del modal
  const [qrActual, setQrActual] = useState(''); // Código QR actual a mostrar

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
          const response = await fetch(`https://verdeulima.azurewebsites.net/back/puntos/${usuarioId}/`);
          if (!response.ok) {
            throw new Error('Error al obtener los puntos');
          }
          const data = await response.json();
          setPuntosDisponibles(data.puntos);
        } catch (error) {
          console.error('Error fetching puntos:', error);
        }
      }
    };

    fetchPuntos(); 
  }, [usuarioId]);

  useEffect(() => {
    const fetchHistorial = async () => {
      if (usuarioId) {
        try {
          const response = await fetch(`https://verdeulima.azurewebsites.net/back/historial_cupones/${usuarioId}/`);
          if (!response.ok) {
            throw new Error('Error al obtener el historial de cupones');
          }
          const data = await response.json();
          setHistorial(data); 
        } catch (error) {
          console.error('Error fetching historial:', error);
        }
      }
    };

    fetchHistorial();
  }, [usuarioId]);

  // Función para mostrar el modal con el QR
  const mostrarQR = (qrUrl) => {
    setQrActual(qrUrl);
    setModalVisible(true);
  };

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
          <Text style={styles.numeroPuntos}>{puntosDisponibles}</Text>
          <FontAwesome name="star" size={24} color="#000" />
        </View>
      </View>

      {/* Historial en ScrollView */}
      <ScrollView style={styles.historialScroll}>
        <View style={styles.historialContainer}>
          <Text style={styles.historialTexto}>Historial</Text>
          <View style={styles.linea}></View>

          {/* Renderizar el historial dinámico */}
          {historial.map((item, index) => (
            <HistorialItem 
            key={index} 
            nombre={item.nombre_cupon} 
            fecha_canje={item.fecha_canje} // Nombre del prop corregido
            url_qr={item.url_qr} // Asegúrate de pasar el url_qr aquí
          />
          ))}
        </View>
      </ScrollView>

      {/* Modal para mostrar el QR */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Código QR</Text>
            <Image source={{ uri: qrActual }} style={styles.qrImage} />
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.modalCloseButton}>
              <Text style={styles.modalCloseText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default MisPuntos;