import React, { useState } from 'react';
import { SafeAreaView, View,TouchableOpacity, Image, Text, Modal, Button } from 'react-native';
import styles from './Style_Menu'; 

const SolicitarButton = ( ) => {

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView>
    <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
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
            <Text style={styles.modalText}>Su solicitud de recojo a sido enviada</Text>
            <Text style={styles.modalbotn} onPress={() => {setModalVisible(false)}}>Cerrar</Text>
          </View>
        </View>
      </Modal>

    </SafeAreaView>
    

    
  );
};

export default SolicitarButton;
