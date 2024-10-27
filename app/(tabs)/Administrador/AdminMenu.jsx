import React from 'react';
import { Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

const AdminMenu = ({ userData }) => {
  const navigation = useNavigation();

  const handleVisualizarRecojos = () => {
    navigation.navigate('Recojos', {userData});
  };

  const handleGenerarCodigo = () => {
    navigation.navigate('GenerarCodigo', { userData });
  };

  const handleHistorial = () => {
    navigation.navigate('Historial', { userData });
  };
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleVisualizarRecojos}>
        <Text style={styles.buttonText}>Visualizar Recojos Activos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleGenerarCodigo}>
        <Text style={styles.buttonText}>Generar Código de Invitación</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleHistorial}>
        <Text style={styles.buttonText}>Visualizar Historial de Recojos</Text>
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