import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import stylesMisPuntos from './stylesMisPuntos';

const HistorialItem = ({ nombre, fecha_canje, url_qr }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={stylesMisPuntos.historialItemContainer}>
      <TouchableOpacity onPress={openModal} style={stylesMisPuntos.historialItem}>
        <View>
          <Text style={stylesMisPuntos.cuponName}>{nombre}</Text>
          <Text style={stylesMisPuntos.fechaCanje}>{fecha_canje}</Text>
        </View>
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        transparent={true}
        onRequestClose={closeModal}
        animationType="slide"
      >
        <View style={stylesMisPuntos.modalOverlay}>
          <View style={stylesMisPuntos.modalContent}>
            <Text style={stylesMisPuntos.modalTitle}>Código QR del cupón</Text>
            <QRCode
              value={url_qr}
              size={200}
              style={{ marginVertical: 10 }}
            />
            <TouchableOpacity onPress={closeModal} style={stylesMisPuntos.closeButton}>
              <Text style={stylesMisPuntos.closeButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default HistorialItem;