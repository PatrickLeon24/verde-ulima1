import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const GenerarCodigoInvitacion = ({ route }) => {
  const navigation = useNavigation();
  const { userData } = route.params;
  const [codigo, setCodigo] = useState(null);

  useEffect(() => {
    generarCodigo();
  }, []);

  const generarCodigo = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/back/generar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ admin_id: userData.usuario_id }),
      });

      if (response.status === 200) {
        const data = await response.json();
        setCodigo(data.codigo);
      } else {
        console.log('Error al obtener el código');
      }
    } catch (error) {
      console.log('Hubo un problema al obtener el código');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.barraSuperior}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.botonRetroceso}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.textoBarra}>Código de Invitación</Text>
      </View>
      <View style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.headerText}>Código de Invitación</Text>
        {codigo && (
          <View style={styles.codigoContainer}>
            <Text style={styles.codigoText}>Tu Código:</Text>
            <Text style={styles.codigo}>{codigo}</Text>
          </View>
        )}
        <View style={styles.separator} />
        <View style={styles.warningContainer}>
          <Text style={styles.warningText}>
            <Text style={styles.boldText}>Este código es exclusivo para compartir con amigos y familiares.</Text>
            {'\n'}Nunca compartas este código en público.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    paddingVertical: 40,
    backgroundColor: 'white',
  },
  barraSuperior: {
    height: 60,
    backgroundColor: '#34A853',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderBottomColor: '#e6e6e6',
  },
  botonRetroceso: {
    marginRight: 20,
  },
  textoBarra: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
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
    fontSize: 20,
    color: '#34A853',
    marginTop: 10,
  },
  detailsContainer: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    marginHorizontal: 16,
    marginTop: -50,
    marginVertical: 30, 
    alignItems: 'center',
  },
  separator: {
    height: 8,
    borderRadius: 5,
    backgroundColor: '#34A853',
    width: '60%',
    alignSelf: 'center',
    marginVertical: 20,
  },
  warningContainer: {
    backgroundColor: '#FFF4E5',
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
  },
  warningText: {
    color: '#4a4a4a',
    fontSize: 15,
    textAlign: 'center',
  },
  boldText: {
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalMessage: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  closeButton: {
    backgroundColor: '#34A853',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 100,
    marginBottom: 10,
    resizeMode: 'cover',
    backgroundColor: '#34A853',
  },
});

export default GenerarCodigoInvitacion;
