import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importa el hook useNavigation

const AdminMenu = ({ userData }) => {
  const navigation = useNavigation(); // Inicializa el hook de navegación

  const handleVisualizarRecojos = () => {
    // Navegar a la pantalla que visualiza los recojos activos
    navigation.navigate('Recojos', {userData});
  };

  const handleGenerarCodigo = () => {
    console.log('Datos de userData en handleGenerarCodigo:', userData); 
    // Navegar a la pantalla para generar el código de invitación y pasar los datos de userData
    navigation.navigate('GenerarCodigo', { userData });
  };

  console.log('Datos en AdminMenu:', userData); // Verifica que userData esté llegando correctamente

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleVisualizarRecojos}>
        <Text style={styles.buttonText}>Visualizar Recojos Activos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleGenerarCodigo}>
        <Text style={styles.buttonText}>Generar Código de Invitación</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    marginBottom: 30,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default AdminMenu;