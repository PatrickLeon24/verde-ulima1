import React from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import UserSession from '../Singleton/Singleton';
import CuponButton from './CuponButton'; 
import PlanButton from './PlanButton'; 
import SolicitarButton from './SolicitarButton';
import ContactButton from './ContactButton'; 
import styles from './Style_Menu';

const PantallaConBarraVerde = ({ navigation }) => {
  const userSession = UserSession.getInstance();
  const { nombres, apellidos } = userSession.getUser();
  const primerNombre = nombres.split(' ')[0];
  const primerApellido = apellidos.split(' ')[0];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.barraSuperior}>
        <TouchableOpacity onPress={() => navigation.navigate('Micuenta')}>
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
