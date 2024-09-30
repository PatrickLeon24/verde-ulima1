import React, { useState } from 'react';
import { View, Modal, Button, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'; 
import styles from './estilosPDetaCup';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

const stack = createNativeStackNavigator();

const PlanDetailsScreen = ({ navigation, route }) => {
  
  const { item } = route.params;
  const [modalVisible, setModalVisible] = React.useState(false);
  const [Puntos, SetPuntos] = useState(400);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.barraSuperior}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.botonRetroceso}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.textoBarra}>Detalles del Cupón</Text>
      </View>

      <Image
        source={{uri: item.imagen}}
        style={styles.image}
      />

      <View style={styles.detailsContainer}>
        {/*TITULO*/}
        <Text style={styles.planTitle}>{item.nombre}</Text>
        <View style={styles.lineatitulo}/>  

        {/*PRECIO*/}
        <Text style={styles.planprecio}>
          {item.precio} puntos
        </Text>
        
        {/*DESCRIPCIÓN*/}
        <Text style={styles.planDescriptiontitu}>
          Descripción del Cupón
        </Text>
        <Text style={styles.planDescription}>
          {item.descripcion}
        </Text>

        {/*LOCAL*/}
        <Text style={styles.planDurationtitu}>
          Local: 
        </Text>
        <Text style={styles.planDuration}>
          {item.local}
        </Text>
        {/*<Text style={styles.planPrice}>Indicaciones: {item.indic}</Text>*/}
        
        <TouchableOpacity style={styles.button} onPress={()=>setModalVisible(true)}>
          <Text style={styles.buttonText}>Canjear Ahora</Text>
        </TouchableOpacity>

        <Modal
        
        transparent={true}
        visible={modalVisible && Puntos > item.precio}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContentSI}>
            <Text style={styles.modalText}>Felicidades su cupón de {item.nombre} a sido correctamente canjeado</Text>
            <Image
               source={{uri: 'https://cdn.pixabay.com/photo/2013/07/12/14/45/qr-code-148732_640.png'}}
               style= {styles.ImagenModal}
            />
            {/* Botón dentro del modal que navega a la pantalla de detalles */}
            <Text style={styles.modalbotonSI} onPress={() => {setModalVisible(false); navigation.navigate('Menu');}}>Cerrar</Text>
          </View>
        </View>
      </Modal>

      <Modal
        
        transparent={true}
        visible={modalVisible && Puntos < item.precio}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContentNO}>
            <Text style={styles.modalText}>Uhhh wacho, parece que no tenes los puntos necesarios jeje</Text>
            <Text style={styles.modalbotonNO} onPress={() => {setModalVisible(false); navigation.navigate('Cupones');}}>Cerrar</Text>
          </View>
        </View>
      </Modal>
      </View>
    </SafeAreaView>
  );
};


export default PlanDetailsScreen;