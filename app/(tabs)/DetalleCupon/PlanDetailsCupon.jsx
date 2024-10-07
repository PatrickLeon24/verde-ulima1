import React, { useState } from 'react';
import { View, Modal, Button, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'; 
import styles from './estilosPDetaCup';
import { Ionicons } from '@expo/vector-icons';

const PlanDetailsCupon = ({ navigation, route }) => {
  
  const { item } = route.params;
  const [modalVisible, setModalVisible] = React.useState(false);
  const [Puntos, SetPuntos] = useState(400);

  return (
    <SafeAreaView style={styles.container}>
      {/* Barra superior */}
      <View style={styles.barraSuperior}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.botonRetroceso}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.textoBarra}>Detalles del Cupón</Text>
      </View>

      {/* Imagen del cupón */}
      <Image
        source={{ uri: item.imagen }}
        style={styles.image}
      />

      <View style={styles.detailsContainer}>
        {/* Título del cupón */}
        <Text style={styles.planTitle}>{item.local}</Text>
        <View style={styles.lineatitulo} />

        {/* Precio del cupón en puntos */}
        <Text style={styles.planPrecio}>
          {item.costo_puntos} puntos
        </Text>
        
        {/* Descripción del cupón */}
        <Text style={styles.planDescriptionTitu}>Descripción del Cupón</Text>
        <Text style={styles.planDescription}>
          {item.descripcion}
        </Text>

        {/* Botón para canjear */}
        <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
          <Text style={styles.buttonText}>Canjear Ahora</Text>
        </TouchableOpacity>

        {/* Modal para canje exitoso */}
        <Modal
          transparent={true}
          visible={modalVisible && Puntos >= item.costo_puntos}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContentSI}>
              <Text style={styles.modalText}>¡Felicidades! Su cupón de {item.nombre} ha sido canjeado correctamente</Text>
              <Image
                source={{ uri: 'https://cdn.pixabay.com/photo/2013/07/12/14/45/qr-code-148732_640.png' }}
                style={styles.ImagenModal}
              />
              <Text style={styles.modalbotonSI} onPress={() => { setModalVisible(false); navigation.navigate('Menu'); }}>Cerrar</Text>
            </View>
          </View>
        </Modal>

        {/* Modal para canje fallido */}
        <Modal
          transparent={true}
          visible={modalVisible && Puntos < item.costo_puntos}
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

