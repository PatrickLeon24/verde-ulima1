import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Modal, Button, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
import styles from './estiloPedi';

const PantallaPedido = ({ navigation }) => {
  const [estadoPedido, setEstadoPedido] = useState(0); 
  const [fechasHoras, setFechasHoras] = useState([]);
  const [administradores, setAdministradores] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const obtenerEstadoPedido = async () => {
    const jsonUserData = await AsyncStorage.getItem('userData');
    if (jsonUserData !== null) {
      const userData = JSON.parse(jsonUserData);
      const response = await fetch('https://verdeulima.azurewebsites.net/back/estado_pedido', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          usuario_id: userData.usuario_id,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setEstadoPedido(data.estado_trayectoria);
        setFechasHoras(data.fechas_hora);
        setAdministradores(data.administradores);
      }
    }
  };

  const cancelarRecojo = async () => {
    const jsonUserData = await AsyncStorage.getItem('userData');
    if (jsonUserData !== null) {
      const userData = JSON.parse(jsonUserData);
      const response = await fetch('https://verdeulima.azurewebsites.net/back/cancelar_recojo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          usuario_id: userData.usuario_id,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setModalMessage('Recojo cancelado exitosamente.');
        setModalVisible(true);
        setTimeout(() => {
          setModalVisible(false);
          navigation.navigate('Menu'); 
        }, 1500);
      } else {
        setModalMessage(data.error || 'No se pudo cancelar el recojo.');
        setModalVisible(true);
      }
    }
  };

  useEffect(() => {
    obtenerEstadoPedido();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.barraSuperior}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.botonRetroceso}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.textoBarra}>Mi Pedido</Text>
      </View>
      
      <View style={styles.container2}>
        <View style={styles.cuadra}>
          <Text style={styles.cuadratexto}>ESTADO DEL PEDIDO</Text>
        </View>

        {/* Detalles de Seguimiento Manuales */}
        <View style={styles.stepRow}>
          <View style={[styles.dot, estadoPedido >= 1 && { backgroundColor: 'green' }]} />  
          <View style={styles.stepContainer}>
            <Text style={styles.stepTitle}>Solicitud Recibida</Text>
            <Text style={styles.stepDescription}>Su servicio ha sido creado en nuestro sistema.</Text>
            {fechasHoras[0] && <Text style={styles.stepDate}>Fecha y hora registrada: {fechasHoras[0]}</Text>}
          </View>
        </View>

        <View style={styles.stepRow}>
          <View style={[styles.dot, estadoPedido >= 2 && { backgroundColor: 'green' }]} />  
          <View style={styles.stepContainer}>
            <Text style={styles.stepTitle}>En Preparación</Text>
            <Text style={styles.stepDescription}>Su servicio ha sido asignado a un personal.</Text>
            {fechasHoras[1] && <Text style={styles.stepDate}>Fecha y hora registrada: {fechasHoras[1]}</Text>}
            {administradores[1] && <Text style={styles.stepDate}>Gestionado por: {administradores[1]}</Text>}
          </View>
        </View>

        <View style={styles.stepRow}>
          <View style={[styles.dot, estadoPedido >= 3 && { backgroundColor: 'green' }]} />  
          <View style={styles.stepContainer}>
            <Text style={styles.stepTitle}>En camino</Text>
            <Text style={styles.stepDescription}>Su servicio está en camino, te llamaremos cuando estemos cerca.</Text>
            {fechasHoras[2] && <Text style={styles.stepDate}>Fecha y hora registrada: {fechasHoras[2]}</Text>}
            {administradores[2] && <Text style={styles.stepDate}>Gestionado por: {administradores[2]}</Text>}
          </View>
        </View>

        <View style={styles.stepRow}>
          <View style={[styles.dot, estadoPedido >= 4 && { backgroundColor: 'green' }]} />  
          <View style={styles.stepContainer}>
            <Text style={styles.stepTitle}>Entregado</Text>
            <Text style={styles.stepDescription}>Su servicio ha sido entregado exitosamente.</Text>
            {fechasHoras[3] && <Text style={styles.stepDate}>Fecha y hora registrada: {fechasHoras[3]}</Text>}
            {administradores[3] && <Text style={styles.stepDate}>Gestionado por: {administradores[3]}</Text>}
          </View>
        </View>
                {/* Contenedor para centrar el botón */}
        <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', marginBottom: 20 }}>
          <TouchableOpacity style={styles.cancelButton} onPress={cancelarRecojo}>
            <Text style={styles.cancelButtonText}>Cancelar Recojo</Text>
          </TouchableOpacity>
        </View>
      </View>


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
      </ScrollView>
    </SafeAreaView>
  );
};

export default PantallaPedido;
