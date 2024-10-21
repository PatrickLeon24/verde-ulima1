import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Alert } from 'react-native';

const GenerarCodigoInvitacion = ({ route }) => {
  const { userData } = route.params; // Asegúrate de que userData está bien definido
  const [codigo, setCodigo] = useState(null);
  console.log('Datos de userData:', userData); // Verifica que userData no sea indefinido

  const generarCodigo = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/back/generar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ admin_id: userData.usuario_id }), // Asegúrate de que userData.usuario_id sea un valor válido
      });
      
      if (response.status === 200) {
        const data = await response.json();
        setCodigo(data.codigo); // Aquí guardamos el código generado
        Alert.alert('Éxito', 'Código generado exitosamente');
      } else {
        const errorData = await response.json();
        Alert.alert('Error', errorData.error || 'No se pudo generar el código');
      }
    } catch (error) {
      Alert.alert('Error', 'Hubo un problema al generar el código');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Generar Código de Invitación</Text>

      <TouchableOpacity style={styles.button} onPress={generarCodigo}>
        <Text style={styles.buttonText}>Generar Código</Text>
      </TouchableOpacity>

      {codigo && ( // Condicional para mostrar el código generado
        <View style={styles.codigoContainer}>
          <Text style={styles.codigoText}>Código Generado:</Text>
          <Text style={styles.codigo}>{codigo}</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    marginVertical: 20,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  codigoContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  codigoText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  codigo: {
    fontSize: 22,
    color: '#333',
    marginTop: 10,
  },
});

export default GenerarCodigoInvitacion;