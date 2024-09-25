import React from 'react';
import { TouchableOpacity, Image, Text } from 'react-native';
import styles from './Style_Menu'; 

const SolicitarButton = ({ navigation }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Menu2')}>
      <Image source={require('../../../assets/images/images.jpg')} style={styles.image2} />
      <Text style={styles.buttonText1}></Text>
      <Text style={styles.buttonText}>SOLICITAR RECOJO</Text>
    </TouchableOpacity>
  );
};

export default SolicitarButton;
