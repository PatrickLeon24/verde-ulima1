import React, { useState } from 'react';
import { SafeAreaView, View, TouchableOpacity, Image, Text, Modal } from 'react-native';
import styles from './Style_Menu';

const SolicitarButton = ({ userData }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleSolicitudRecojo = async () => {
    if (!userData) {
      setModalMessage('Error al obtener los datos del usuario.');
      setModalVisible(true);
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:8000/back/solicitar_recojo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          usuario_id: userData.usuario_id,
        }),
      });
      
      console.log(userData.usuario_id, userData.nombres);

      if (!response.ok) {
        const errorData = await response.json();
        setModalMessage(errorData.error || 'Error al enviar la solicitud de recojo.');
        setModalVisible(true);
        return;
      }

      const data = await response.json();
      setModalMessage(data.mensaje || 'Su solicitud de recojo ha sido enviada.');
      setModalVisible(true);
    } catch (error) {
      console.error('Error en la solicitud:', error);
      setModalMessage('Error de conexión. Intente nuevamente.');
      setModalVisible(true);
    }
  };

  return (
    <SafeAreaView>
      <TouchableOpacity style={styles.button} onPress={handleSolicitudRecojo}>
        <Image source={require('../../../assets/images/images.jpg')} style={styles.image2} />
        <Text style={styles.buttonText1}></Text>
        <Text style={styles.buttonText}>SOLICITAR RECOJO</Text>
      </TouchableOpacity>

      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>{modalMessage}</Text>
            <Text style={styles.modalbotn} onPress={() => setModalVisible(false)}>Cerrar</Text>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default SolicitarButton;

