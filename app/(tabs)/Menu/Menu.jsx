import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; 
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
        } else {
          setUserData(null); // En caso de que no haya datos, reiniciar el estado
        }
      } catch (error) {
        console.error('Error al recuperar los datos del usuario:', error);
      }
    };

    const unsubscribe = navigation.addListener('focus', () => {
      getUserData(); // Llamar a getUserData cuando la pantalla gana foco
    });

    getUserData(); // También llamar al cargar el componente

    return unsubscribe; // Limpia el evento al desmontar el componente
  }, [navigation]);

  if (!userData) {
    return <Text>Cargando...</Text>;
  }

  const { nombres, apellidos } = userData; 
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.barraSuperior}>
        <TouchableOpacity 
          onPress={() => navigation.navigate('Micuenta')}>
          <Image source={require('../../../assets/images/SAzRztbw_400x400.jpg')} style={styles.image} />
        </TouchableOpacity>
        <Text style={styles.textoBarra}>Hola, {nombres} {apellidos}</Text>
      </View>

      <View style={styles.botonContainer}>
        <CuponButton navigation={navigation} />
        <PlanButton navigation={navigation} />
        <SolicitarButton />
        <ContactButton />
      </View>
    </SafeAreaView>
  );
};

export default PantallaConBarraVerde;