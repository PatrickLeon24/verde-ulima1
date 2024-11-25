import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialIcons } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import CuponButton from './CuponButton';
import PlanButton from './PlanButton';
import SolicitarButton from './SolicitarButton';
import ContactButton from './ContactButton';
import AdminMenu from '../Administrador/AdminMenu';
import styles from './Style_Menu';

const PantallaConBarraVerde = ({ navigation }) => {
  const [userData, setUserData] = useState(null);
  const [notificacionesNoLeidas, setNotificacionesNoLeidas] = useState(0);
  const [sound, setSound] = useState();
  const [prevNotificacionesCount, setPrevNotificacionesCount] = useState(0);

  // Función para obtener los datos del usuario
  const getUserData = async () => {
    try {
      const jsonUserData = await AsyncStorage.getItem('userData');
      if (jsonUserData !== null) {
        const data = JSON.parse(jsonUserData);
        setUserData(data);
        return data; // Retorna los datos del usuario
      }
      return null;
    } catch (error) {
      console.error('Error al recuperar los datos del usuario:', error);
      return null;
    }
  };

  // Función para obtener notificaciones no leídas
  const fetchNotificacionesNoLeidas = async (usuarioId) => {
    if (!usuarioId) return;

    try {
      const response = await fetch('https://verdeulima.azurewebsites.net/back/no_leidas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          usuario_id: usuarioId,
        }),
      });
      const data = await response.json();
      if (data.status === 'success') {
        const noLeidas = data.no_leidas;
        setNotificacionesNoLeidas(noLeidas);
        if (noLeidas > 0 && noLeidas !== prevNotificacionesCount) {
          playNotificationSound();
          setPrevNotificacionesCount(noLeidas);
        }
      }
    } catch (error) {
      console.error('Error al obtener notificaciones no leídas:', error);
    }
  };

  // Reproducir sonido de notificación
  const playNotificationSound = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync(
        require('../../../assets/sounds/notificacion.mp3')
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error('Error al reproducir el sonido:', error);
    }
  };

  // Listener para cargar datos y notificaciones cuando la pantalla esté en foco
  useEffect(() => {
    const unsubscribeFocus = navigation.addListener('focus', async () => {
      const data = await getUserData(); // Asegura que se obtengan datos al enfocar la pantalla
      if (data && data.tipousuario === 'Cliente') {
        fetchNotificacionesNoLeidas(data.usuario_id);
      }
    });

    return unsubscribeFocus;
  }, [navigation]); // No depende de userData directamente

  // Limpiar sonido cuando se desmonte el componente
  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

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

        {tipousuario === 'Cliente' && (
          <TouchableOpacity style={styles.botonCampana} onPress={() => navigation.navigate('Notificaciones', { userData })}>
            <MaterialIcons name="notifications" size={24} color="#fff" />
            {notificacionesNoLeidas > 0 && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{notificacionesNoLeidas}</Text>
              </View>
            )}
          </TouchableOpacity>
        )}
      </View>

      <ScrollView contentContainerStyle={styles.botonContainer}>
        {tipousuario === 'Cliente' && (
          <>
            <CuponButton navigation={navigation} />
            <PlanButton navigation={navigation} />
            <SolicitarButton userData={userData} />
            <ContactButton />
          </>
        )}
        {tipousuario === 'Administrador' && (
          <AdminMenu userData={userData} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default PantallaConBarraVerde;
