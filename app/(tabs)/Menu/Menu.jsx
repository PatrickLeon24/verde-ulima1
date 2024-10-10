import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import CuponButton from './CuponButton'; 
import PlanButton from './PlanButton'; 
import SolicitarButton from './SolicitarButton';
import ContactButton from './ContactButton';
import RecojoActivoList from '../Administrador/Recojos'
import styles from './Style_Menu'; // Importa tu estilo existente

const PantallaConBarraVerde = ({ navigation }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const jsonUserData = await AsyncStorage.getItem('userData');
        if (jsonUserData !== null) {
          const data = JSON.parse(jsonUserData);
          console.log('Datos del usuario:', data);
          setUserData(data);
        } else {
          setUserData(null);
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

  const { nombres, apellidos, tipousuario } = userData; // 'tipousuario' es una cadena

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.barraSuperior}>
        <TouchableOpacity onPress={() => navigation.navigate('Micuenta')}>
          <Image source={require('../../../assets/images/xd.jpg')} style={styles.image} />
        </TouchableOpacity>
        <Text style={styles.textoBarra}>Hola, {nombres} {apellidos}</Text>
      </View>

      <ScrollView contentContainerStyle={styles.botonContainer}>
        {tipousuario === 'Cliente' && (
          <>
            <CuponButton navigation={navigation} />
            <PlanButton navigation={navigation} />
            <SolicitarButton />
            <ContactButton />
          </>
        )}
        {tipousuario === 'Administrador' && (
          <View>
            {/* Mostrar el componente de recojos activos */}
            <RecojoActivoList />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default PantallaConBarraVerde;
