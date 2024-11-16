import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import { MaterialIcons } from '@expo/vector-icons'; // Importar íconos
import CuponButton from './CuponButton'; 
import PlanButton from './PlanButton'; 
import SolicitarButton from './SolicitarButton';
import ContactButton from './ContactButton';
import AdminMenu from '../Administrador/AdminMenu';
import styles from './Style_Menu'; 

const PantallaConBarraVerde = ({ navigation }) => {
  const [userData, setUserData] = useState(null);
  const [notificacionesNoLeidas, setNotificacionesNoLeidas] = useState(0);

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

    const fetchNotificaciones = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/back/notificaciones', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ usuario_id: 2 }), // Cambiar esto al ID dinámico del usuario
        });
        const data = await response.json();
        if (data.status === 'success') {
          const noLeidas = data.notificaciones.filter((noti) => !noti.leido).length;
          setNotificacionesNoLeidas(noLeidas);
        }
      } catch (error) {
        console.error('Error al obtener notificaciones:', error);
      }
    };

    const unsubscribe = navigation.addListener('focus', () => {
      getUserData();
      fetchNotificaciones();
    });

    getUserData(); 
    fetchNotificaciones();

    return unsubscribe; 
  }, [navigation]);

  if (!userData) {
    return <Text>Cargando...</Text>;
  }

  const { nombres, apellidos, tipousuario } = userData; 

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.barraSuperior}>
        <TouchableOpacity onPress={() => navigation.navigate('Micuenta')}>
          <Image source={require('../../../assets/images/xd.jpg')} style={styles.image} />
        </TouchableOpacity>
        <Text style={styles.textoBarra}>Hola, {nombres} {apellidos}</Text>
        
        <TouchableOpacity style={styles.botonCampana} onPress={() => navigation.navigate('Notificaciones')}>
          <MaterialIcons name="notifications" size={24} color="#fff" />
          {notificacionesNoLeidas > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{notificacionesNoLeidas}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.botonContainer}>
        {tipousuario === 'Cliente' && (
          <>
            <CuponButton navigation={navigation} />
            <PlanButton navigation={navigation} />
            <SolicitarButton userData={userData}/>
            <ContactButton />
          </>
        )}
        {tipousuario === 'Administrador' && (
          <>
            {/* Mostrar el componente de recojos activos */}
            <AdminMenu userData={userData}/>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default PantallaConBarraVerde;