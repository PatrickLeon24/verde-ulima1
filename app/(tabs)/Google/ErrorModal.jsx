import React from 'react';
import { Modal, View, Text, Button } from 'react-native';
import styles from './Style_Login';

const ErrorModal = ({ modalVisible, modalMessage, onClose }) => (
  <Modal
    transparent={true}
    animationType="slide"
    visible={modalVisible}
    onRequestClose={onClose}
  >
    <View style={styles.modalOverlay}>
      <View style={styles.modalContent}>
        <Text style={styles.modalText}>{modalMessage}</Text>
        <Button title="Cerrar" onPress={onClose} />
      </View>
    </View>
  </Modal>
);

export default ErrorModal;