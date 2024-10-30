import React, { useState } from 'react';
import { View, Modal, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native'; 
import styles from './estilosPDetaCup';
import { Ionicons } from '@expo/vector-icons';

const PlanDetailsCupon = ({ navigation, route }) => {
  const { item, puntosDisponibles, usuario_id } = route.params;
  const [modalVisible, setModalVisible] = useState(false);

  // Función para realizar el canje del cupón
  const handleCanjeCupon = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/back/canjear_cupon', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          usuario_id: usuario_id,
          cupon_id: item.id,
        }),
      });

      if (response.ok) {
        setModalVisible(true);
      } else {
        console.error('Error al realizar el canje del cupón');
      }
    } catch (error) {
      console.error('Error en la solicitud de canje:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.barraSuperior}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.botonRetroceso}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.textoBarra}>Detalles del Cupón</Text>
      </View>

      <Image source={{ uri: item.imagen }} style={styles.image} />

      <View style={styles.detailsContainer}>
        <Text style={styles.planTitle}>{item.local}</Text>
        <View style={styles.lineatitulo} />
        <Text style={styles.planPrecio}>{item.costo_puntos} puntos</Text>
        
        <Text style={styles.planDescriptionTitu}>Descripción del Cupón</Text>
        <Text style={styles.planDescription}>{item.descripcion}</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            if (puntosDisponibles >= item.costo_puntos) {
              handleCanjeCupon();
            } else {
              setModalVisible(true);
            }
          }}
        >
          <Text style={styles.buttonText}>Canjear Ahora</Text>
        </TouchableOpacity>

        <Modal
          transparent={true}
          visible={modalVisible && puntosDisponibles >= item.costo_puntos}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContentSI}>
              <Text style={styles.modalText}>¡Felicidades! Su cupón de {item.local} ha sido canjeado correctamente</Text>
              <Image
                source={{ uri: 'https://cdn.pixabay.com/photo/2013/07/12/14/45/qr-code-148732_640.png' }}
                style={styles.ImagenModal}
              />
              <Text style={styles.modalbotonSI} onPress={() => { setModalVisible(false); navigation.navigate('Menu'); }}>Cerrar</Text>
            </View>
          </View>
        </Modal>

        <Modal
          transparent={true}
          visible={modalVisible && puntosDisponibles < item.costo_puntos}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContentNO}>
              <Text style={styles.modalText}>Lo sentimos, no tienes suficientes puntos para canjear este cupón.</Text>
              <Text style={styles.modalbotonNO} onPress={() => { setModalVisible(false); navigation.navigate('Cupones'); }}>Cerrar</Text>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default PlanDetailsCupon;

