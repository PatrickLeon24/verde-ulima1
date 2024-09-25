import React from 'react';
import { TouchableOpacity, Image, Text } from 'react-native';
import styles from './Style_Menu';

const CuponButton = ({ navigation }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Cupones')}>
      <Image source={require('../../../assets/images/cupon.jpg')} style={styles.image2} />
      <Text style={styles.buttonText1}></Text>
      <Text style={styles.buttonText}>CUPONES</Text>
    </TouchableOpacity>
  );
};

export default CuponButton;
