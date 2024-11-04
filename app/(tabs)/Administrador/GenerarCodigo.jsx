import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

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
      <View style={styles.barraSuperior}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.botonRetroceso}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.textoBarra}>Código de Invitación</Text>
      </View>
      <View style={styles.image} 
      />
      
      <View style={styles.detailsContainer}>
        <Text style={styles.headerText}>Generar Código de Invitación</Text>
        {codigo && ( // Condicional para mostrar el código generado
          <View style={styles.codigoContainer}>
            <Text style={styles.codigoText}></Text>
            <Text style={styles.codigo}>{codigo}</Text>
          </View>
          
          
        )}
        <View style={styles.separator} />

        <View style={styles.warningContainer}>
            <Text style={styles.warningText}>
              <Text style={styles.boldText}>
                Este código es solo para compras por internet.
                </Text> 
                Nunca te lo pediremos por chat, llamada, SMS o correo.
            </Text>
          </View>

        <TouchableOpacity style={styles.button} onPress={generarCodigo}>
          <Text style={styles.buttonText}>Generar otro Código</Text>
        </TouchableOpacity>
        
        
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  //container: {
  //  flex: 1,
  //  justifyContent: 'center',
  //  alignItems: 'center',
  //  padding: 20,
  //  backgroundColor: 'green',
  //},
  barraSuperior: {
    height: 60,
    backgroundColor: '#34A853',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    
    borderBottomColor: '#e6e6e6',
  },
  botonRetroceso: {
    marginRight: 30,
  },
  textoBarra: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    paddingVertical: 40,
    backgroundColor: 'white',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
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
    fontSize: 32,
    color: '#34A853',
    marginTop: 10,
    marginBottom: 14,
  },
  detailsContainer: {
    padding: 32,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    marginHorizontal: 16,
    marginTop: -30,
    marginVertical: 30, 
    alignItems: 'center',
    
  },
  image: {
    width: '100%',
    height: 100,
    marginBottom: 10,
    resizeMode: 'cover',
    backgroundColor: '#34A853',
  },

    image2: {
      width: 60,              // Ancho de la imagen circular
      height: 60,             // Alto de la imagen circular
      borderRadius: 30,
      borderWidth: 1,             // Ancho del borde
      borderColor: '#34A853',
          // Hace la imagen circular
      
      
            // Espaciado entre la imagen y el texto
    },
    xd1: {
      color: '#000000',              // Color del texto
      fontSize: 12,                // Tamaño de la fuente
      fontWeight: 'bold',
      textAlign: 'center', 
      marginVertical:45,
      
      
                // Negrita para el texto
    },
    xd: {
      color: '#000000',              // Color del texto
      fontSize: 12,                // Tamaño de la fuente
      fontWeight: 'bold',
      textAlign: 'center', 
      position: 'absolute',
      
      
                // Negrita para el texto
    },
    warningContainer: {
      backgroundColor: '#FFF4E5',
      padding: 15,
      borderRadius: 8,
      marginBottom: 20,
      maxWidth: '50%',
    },
    warningText: {
      color: '#4a4a4a',
      fontSize: 20,
      textAlign: 'center',
      flexWrap: 'wrap',
    },
    boldText: {
      fontWeight: 'bold',
      fontSize: 20,
    },
    separator: {
    height: 8, // Altura de la línea
    borderRadius: 5,
    backgroundColor: '#34A853', // Color de la línea
    width: '20%', // Ancho de la línea para alinearse con el cuadro
    marginBottom: 40, // Espacio entre la línea y el botón
    //paddingBottom: 20,
    },
});

export default GenerarCodigoInvitacion;