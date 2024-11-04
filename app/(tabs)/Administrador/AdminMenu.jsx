import React from 'react';
import { Text, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './AdminStyle'; 

const AdminMenu = ({ userData }) => {
  const navigation = useNavigation();

  const handleVisualizarRecojos = () => {
    navigation.navigate('Recojos', {userData});
  };

  const handleGenerarCodigo = () => {
    navigation.navigate('GenerarCodigo', { userData });
  };

  const handleHistorialRecojos = () => {
    navigation.navigate('HistorialRecojos', { userData });
  };

  const handleHistorialCodigos = () => {
    navigation.navigate('HistorialCodigos', { userData });
  };
  return (
    <SafeAreaView>
      <TouchableOpacity style={styles.button} onPress={handleVisualizarRecojos}>
        <Image source={require('../../../assets/images/BOCAAA.jpg')} style={styles.image2} />
        <Text style={styles.buttonText1}></Text>
        <Text style={styles.buttonText}>RECOJOS ACTIVOS</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleGenerarCodigo}>
        <Image source={require('../../../assets/images/BOCAAA.jpg')} style={styles.image2} />
        <Text style={styles.buttonText1}></Text>
        <Text style={styles.buttonText}>GENERAR CÓDIGOS DE INVITACIÓN</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleHistorialRecojos}>
        <Image source={require('../../../assets/images/BOCAAA.jpg')} style={styles.image2} />
        <Text style={styles.buttonText1}></Text>
        <Text style={styles.buttonText}>HISTORIAL DE RECOJOS</Text>     
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleHistorialCodigos}>
        <Image source={require('../../../assets/images/BOCAAA.jpg')} style={styles.image2} />
        <Text style={styles.buttonText1}></Text>
        <Text style={styles.buttonText}>HISTORIAL DE CODIGOS DE INVITACION</Text>     
      </TouchableOpacity>

    </SafeAreaView>
  );
};

export default AdminMenu;