import React from 'react';
import { TouchableOpacity, Image, Text } from 'react-native';
import styles from './Style_Menu'; 

const PlanButton = ({ navigation }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('VerPlanes')}>
      <Image source={require('../../../assets/images/reciclaje.jpg')} style={styles.image2} />
      <Text style={styles.buttonText1}></Text>
      <Text style={styles.buttonText}>PLANES DE RECOLECCIÓN</Text>
    </TouchableOpacity>
  );
};

export default PlanButton;
