import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView, Modal, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const PagoItem = ({ pago, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={() => onPress(pago)}>
    <Text style={styles.cardText}>Usuario: {pago.usuarioid}</Text>
    <Text style={styles.cardText}>Usuario: {pago.usuario}</Text>
    <Text style={styles.cardText}>Plan: {pago.plan}</Text>
    <Text style={styles.cardText}>Método de Pago: {pago.metodo_pago}</Text>
    <Text style={styles.cardText}>Recojos Solicitados: {pago.recojos_solicitados}</Text>
  </TouchableOpacity>
);

const ValidarPagos = () => {
  const navigation = useNavigation();
  const [pagosData, setPagosData] = useState([]);
  const [selectedPago, setSelectedPago] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  // Fetch de los pagos no validados
  useEffect(() => {
    const fetchPagosData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/back/listar_pagos_no_validados/`);
        if (!response.ok) {
          throw new Error(`Error en la respuesta: ${response.status}`);
        }
        const data = await response.json();
        setPagosData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPagosData();
  }, []);

  // Maneja la validación de un pago
  const validarPago = async (pagoId) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/back/validar_pago/${pagoId}/`, {
        method: 'POST',
      });
      const result = await response.json();
      if (result.success) {
        // Remover el pago validado de la lista
        setPagosData(pagosData.filter(pago => pago.id !== pagoId));
        setModalVisible(false);
      } else {
        console.error(result.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleCardPress = (pago) => {
    setSelectedUser(pago);
  };

  const handleEnviarPDF = async () => {
    try {
      // Log del usuario_id antes de enviar la solicitud
      console.log('Resultado de la consulta:', { usuario_id: selectedUser.usuarioid });
  
      // Realizando la solicitud POST
      const response = await fetch('http://127.0.0.1:8000/back/enviar_PDF', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ usuario_id: selectedUser.usuarioid }), // Aquí es donde envías el body
      });
  
      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.status}`);
      }
  
      
    } catch (error) {
      console.error('Error al enviar el recojo ID:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.barraSuperior}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.botonRetroceso}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.textoBarra}>Validar Pagos</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {pagosData && pagosData.length > 0 ? (
          pagosData.map((pago) => (
            <PagoItem
              key={pago.id}
              pago={pago}
              onPress={(pago) => {
                setSelectedPago(pago);
                setModalVisible(true);
                handleCardPress(pago)
              }}
            />
          ))
        ) : (
          <Text style={styles.cardText}>No hay pagos para validar.</Text>
        )}
      </ScrollView>

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>¿Deseas validar este pago?</Text>
            <Button title="Cerrar" onPress={() => setModalVisible(false)} />
            <TouchableOpacity 
              style={styles.validarButton} 
              onPress={() => {validarPago(selectedPago.id);
                handleEnviarPDF()
              }}
            >
              <Text style={styles.validarButtonText}>Validar Pago</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 40,
  },
  scrollContainer: {
    paddingVertical: 20,
  },
  barraSuperior: {
    height: 60,
    backgroundColor: '#34A853',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  textoBarra: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  card: {
    padding: 15,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginHorizontal: 20,
  },
  cardText: {
    fontSize: 16,
  },
  botonRetroceso: {
    marginRight: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  validarButton: {
    backgroundColor: '#34A853', // Verde
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  validarButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default ValidarPagos;
