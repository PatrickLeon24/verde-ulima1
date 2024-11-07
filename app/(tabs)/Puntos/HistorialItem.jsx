import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const HistorialItem = ({ nombre, fecha_canje, url_qr }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* Línea del historial con nombre del cupón y fecha de canje */}
      <TouchableOpacity onPress={openModal} style={styles.historialItem}>
        <View>
          <Text style={styles.cuponName}>{nombre}</Text>
          <Text style={styles.fechaCanje}>{fecha_canje}</Text>
        </View>
      </TouchableOpacity>

      {/* Modal para mostrar el QR */}
      <Modal
        visible={modalVisible}
        transparent={true}
        onRequestClose={closeModal}
        animationType="slide"
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Código QR del cupón</Text>
            <QRCode
              value={url_qr} // Genera el QR usando la URL del código QR
              size={200}
              style={{ marginVertical: 10 }}
            />
            <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  historialItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  cuponName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  fechaCanje: {
    fontSize: 14,
    color: '#888',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  closeButton: {
    marginTop: 15,
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default HistorialItem;
