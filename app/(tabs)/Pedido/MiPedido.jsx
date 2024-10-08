import React, { useEffect, useState } from 'react';
import { View, Text, Image, SafeAreaView, TouchableOpacity, Modal, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
import styles from './estiloPedi';
import carrogolf from '../Pedido/WAAA.png';

const PantallaPedido = ({ navigation }) => {
  const [estadoPedido, setEstadoPedido] = useState(0); // Estado inicial del pedido
  const [posicionCarrito, setPosicionCarrito] = useState(0); // Posición del carrito
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  // Función para obtener el estado del pedido desde el backend
  const obtenerEstadoPedido = async () => {
    try {
      const jsonUserData = await AsyncStorage.getItem('userData');
      if (jsonUserData !== null) {
        const userData = JSON.parse(jsonUserData);
        const response = await fetch('http://127.0.0.1:8000/back/estado_pedido', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            usuario_id: userData.usuario_id, // Enviamos el ID del usuario almacenado en AsyncStorage
          }),
        });

        const data = await response.json();
        if (response.ok) {
          setEstadoPedido(data.estado_trayectoria);
        } else {
          setModalMessage('Error al obtener el estado del pedido.');
          setModalVisible(true);
        }
      }
    } catch (error) {
      console.error('Error de conexión:', error);
      setModalMessage('Error de conexión. Intente nuevamente.');
      setModalVisible(true);
    }
  };

  // Llamar al backend cuando se monte el componente
  useEffect(() => {
    obtenerEstadoPedido();
  }, []);

  // Actualizar la posición del carrito en función del estado del pedido
  useEffect(() => {
    switch (estadoPedido) {
      case 1:
        setPosicionCarrito(0); // Primera posición
        break;
      case 2:
        setPosicionCarrito(1); // Segunda posición
        break;
      case 3:
        setPosicionCarrito(2); // Tercera posición
        break;
      case 4:
        setPosicionCarrito(3); // Cuarta posición
        break;
      default:
        setPosicionCarrito(0); // No mover el carrito si es 0
        break;
    }
  }, [estadoPedido]);

  return (
    <SafeAreaView style={styles.container}>
      {/* Barra superior verde */}
      <View style={styles.barraSuperior}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.botonRetroceso}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.textoBarra}>Mi Pedido</Text>
      </View>
      
      <View style={styles.contEst}>
        <View style={styles.boxEst}>
          <Text style={styles.textoEst}>Estado de mi Pedido</Text>
        </View>
        
        <View style={styles.contPed}>
          {/* Línea de progreso */}
          <View style={styles.linPed} />

          {/* Dots y carrito */}
          <View style={styles.dotContainer}>
            {/* Carrito en la posición */}
            <Image
              source={carrogolf}
              style={[
                styles.truckIcon,
                { left: `${posicionCarrito * 25}%` } // Ajustar la posición del carrito
              ]}
            />

            {/* Botón 1: Solicitud Recibida */}
            <View>
              <View style={[styles.dot, estadoPedido >= 1 && { backgroundColor: 'green' }]} />
              <Text style={styles.labelx}>Solicitud</Text>
              <Text style={styles.labelx}>Recibida</Text>
            </View>

            {/* Botón 2: Preparación */}
            <View>
              <View style={[styles.dot, estadoPedido >= 2 && { backgroundColor: 'green' }]} />
              <Text style={styles.labelx}>Preparación</Text>
            </View>

            {/* Botón 3: En camino */}
            <View>
              <View style={[styles.dot, estadoPedido >= 3 && { backgroundColor: 'green' }]} />
              <Text style={styles.labelx}>En</Text>
              <Text style={styles.labelx}>Camino</Text>
            </View>

            {/* Botón 4: Entregado */}
            <View>
              <View style={[styles.dotlast, estadoPedido >= 4 && { backgroundColor: 'green' }]} />
              <Text style={styles.labellast}>Entregado</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Modal de error */}
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>{modalMessage}</Text>
            <Button title="Cerrar" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default PantallaPedido;
