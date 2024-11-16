import React from 'react';
import { Text, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './AdminStyle'; 

const AdminMenu = ({ userData }) => {
  const navigation = useNavigation();

  const handleVisualizarRecojos = () => {
    navigation.navigate('Recojos', { userData });
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
  
  const handleValidarPagos = () => {
    navigation.navigate('ValidarPagos', { userData });
  };

  return (
    <SafeAreaView>
      <TouchableOpacity style={[styles.button, { marginTop: 70 }]} onPress={handleVisualizarRecojos}>
        <Image source={require('../../../assets/images/entrega.png')} style={styles.image2} />
        <Text style={styles.buttonText1}></Text>
        <Text style={styles.buttonText}>RECOJOS ACTIVOS</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleGenerarCodigo}>
        <Image source={require('../../../assets/images/invitacion.png')} style={styles.image2} />
        <Text style={styles.buttonText1}></Text>
        <Text style={styles.buttonText}>GENERAR CÓDIGOS DE INVITACIÓN</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleHistorialRecojos}>
        <Image source={require('../../../assets/images/historial.png')} style={styles.image2} />
        <Text style={styles.buttonText1}></Text>
        <Text style={styles.buttonText}>HISTORIAL DE RECOJOS</Text>     
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleHistorialCodigos}>
        <Image source={require('../../../assets/images/historial2.png')} style={styles.image2} />
        <Text style={styles.buttonText1}></Text>
        <Text style={styles.buttonText}>HISTORIAL DE CODIGOS DE INVITACION</Text>     
      </TouchableOpacity>

      {/* Nuevo botón para validar pagos */}
      <TouchableOpacity style={styles.button} onPress={handleValidarPagos}>
        <Image source={require('../../../assets/images/validarpago.png')} style={styles.image2} />
        <Text style={styles.buttonText1}></Text>
        <Text style={styles.buttonText}>VALIDAR PAGOS</Text>     
      </TouchableOpacity>

    </SafeAreaView>
  );
};

export default AdminMenu;
