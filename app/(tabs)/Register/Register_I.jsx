import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import { useRouter } from 'expo-router';
const RegisterIScreen = () => {
const router = useRouter();
  const [selectedGender, setSelectedGender] = useState("");  // Estado para seleccionar el género
  

  return (
    <ScrollView contentContainerStyle={styles.container}>
    {/* Título */}
    <View style={styles.header}>
      <Text style={styles.headerText}>Registro de cuenta</Text>
    </View>

    {/* Subtítulo para datos personales */}
    <Text style={styles.subTitle}>Ingrese sus datos personales</Text>

    {/* Campos de texto */}
    <TextInput
      style={styles.input}
      placeholder="Ingrese sus nombres"
    />
    <TextInput
      style={styles.input}
      placeholder="Ingrese sus apellidos"
    />
    <TextInput
      style={styles.input}
      placeholder="Ingrese su DNI"
      keyboardType="numeric"
    />
    <TextInput
      style={styles.input}
      placeholder="Ingrese su dirección"
    />
    <TextInput
      style={styles.input}
      placeholder="Ingrese su correo"
      keyboardType="email-address"
    />

    {/* Selección de género */}
    <Text style={styles.genderText}>Seleccione su género</Text>
    <View style={styles.genderContainer}>
    <TouchableOpacity
        style={[
        styles.genderButton,
        selectedGender === 'Hombre' ? styles.genderButtonSelected : null,
        ]}
        onPress={() => setSelectedGender('Hombre')}
    >
        <Text style={styles.genderButtonText}>Hombre</Text>
    </TouchableOpacity>

    <TouchableOpacity
        style={[
        styles.genderButton,
        selectedGender === 'Mujer' ? styles.genderButtonSelected : null,
        ]}
        onPress={() => setSelectedGender('Mujer')}
    >
        <Text style={styles.genderButtonText}>Mujer</Text>
    </TouchableOpacity>
    </View>

    {/* Botón Siguiente */}
    <TouchableOpacity style={styles.button} onPress={()=>router.push('/Register/Register_II')}>
      <Text style={styles.buttonText}>Siguiente</Text>
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
      genderText: {
        fontSize: 16,
        marginBottom: 10,
        textAlign: 'center',
        color: '#333',
      },
      genderContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
      },
      genderButton: {
        backgroundColor: '#ccc',
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderRadius: 10,
        marginHorizontal: 10,
      },
      genderButtonSelected: {
        backgroundColor: '#34A853',
      },
      genderButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
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

export default RegisterIScreen;
