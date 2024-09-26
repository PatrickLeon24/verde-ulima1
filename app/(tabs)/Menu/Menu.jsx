import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Importar AsyncStorage
import CuponButton from './CuponButton'; 
import PlanButton from './PlanButton'; 
import SolicitarButton from './SolicitarButton';
import ContactButton from './ContactButton'; 
import styles from './Style_Menu';

const PantallaConBarraVerde = ({ navigation }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const jsonUserData = await AsyncStorage.getItem('userData');
        if (jsonUserData !== null) {
          setUserData(JSON.parse(jsonUserData));
        }
      } catch (error) {
        console.error('Error al recuperar los datos del usuario:', error);
      }
    };

    getUserData(); // Recupera los datos del usuario al montar el componente
  }, []);

  // Si aún no se han cargado los datos del usuario, muestra un mensaje de carga
  if (!userData) {
    return <Text>Cargando...</Text>;
  }

  const { nombres, apellidos } = userData; 
  const primerNombre = nombres.split(' ')[0];
  const primerApellido = apellidos.split(' ')[0];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.barraSuperior}>
        <TouchableOpacity 
          onPress={() => navigation.navigate('Micuenta')}>
          <Image source={require('../../../assets/images/SAzRztbw_400x400.jpg')} style={styles.image} />
        </TouchableOpacity>
        <Text style={styles.textoBarra}>Hola, {primerNombre} {primerApellido}</Text>
      </View>

      <View style={styles.botonContainer}>
        <CuponButton navigation={navigation} />
        <PlanButton navigation={navigation} />
        <SolicitarButton navigation={navigation} />
        <ContactButton />
      </View>
    </SafeAreaView>
  );
};

export default PantallaConBarraVerde;
