import React from 'react';
import { TouchableOpacity, Image, Text, Linking } from 'react-native';
import styles from './Style_Menu';

const ContactButton = () => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://wa.me/message/IUHQDJHMMT3QL1')}>
      <Image source={require('../../../assets/images/WhatsApp_icon.png')} style={styles.image2} />
      <Text style={styles.buttonText1}></Text>
      <Text style={styles.buttonText}>CONTÁCTANOS</Text>
    </TouchableOpacity>
  );
};

export default ContactButton;
