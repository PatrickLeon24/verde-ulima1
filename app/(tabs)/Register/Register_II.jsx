import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';

const RegisterIIScreen = () => {
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
    {/* Título */}
    <View style={styles.header}>
      <Text style={styles.headerText}>Registro de cuenta</Text>
    </View>

    {/* Subtítulo para datos personales */}
    <Text style={styles.subTitle}>Por favor cree su contraseña</Text>

    {/* Campos de texto */}
    <TextInput
      style={styles.input}
      placeholder="Ingrese su contraseña"
      secureTextEntry
    />
    <TextInput
      style={styles.input}
      placeholder="Confirmar contraseña"
      secureTextEntry
    />

    {/* Botón Siguiente */}
    <TouchableOpacity style={styles.button} >
      <Text style={styles.buttonText}>Registrar</Text>
    </TouchableOpacity>

  </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    header: {
      height: 60,
      backgroundColor: '#34A853',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 30, // Aumenta el espacio entre la barra y las cajas de texto
    },
    headerText: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'semibold',
      position: 'absolute'
    },
    subTitle: {
        fontSize: 16,
        marginBottom: 20,
        color: '#333',
        textAlign: 'center',
      },
    input: {
        width: '90%',
        alignSelf: 'center',
        height: 45,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 20,
      },
    button: {
        backgroundColor: '#000',
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
        width: '90%',
        alignSelf: 'center',
      },
      buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
      },
    });

export default RegisterIIScreen;