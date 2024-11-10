import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, Modal, Button } from 'react-native';
import styles from './Style_RegisterII';
import { useRoute } from '@react-navigation/native';

const RegisterII = ({ navigation }) => {
  const route = useRoute();
  const { nombre, apellido, DNI, direccion, genero, numero_contacto } = route.params;
  const [tipoUsuario, setTipoUsuario] = useState('');
  const [tiposUsuario, setTiposUsuario] = useState([]);
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [ConfirContra, setConfirContra] = useState('');
  const [codigoInvitacion, setCodigoInvitacion] = useState('');  
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  useEffect(() => {
    const fetchTiposUsuario = async () => {
      try {
        const response = await fetch('https://verdeulima.azurewebsites.net/back/tipos-usuario');
        const data = await response.json();
        setTiposUsuario(data);
      } catch (error) {
        console.error('Error al obtener los tipos de usuario:', error);
        setModalMessage('Error al cargar los tipos de usuario.');
        setModalVisible(true);
      }
    };

    fetchTiposUsuario();
  }, []);

  const handleSubmit = async () => {
    if (!correo || !contrasena || !ConfirContra || !tipoUsuario) {
      setModalMessage('Por favor, complete todos los campos.');
      setModalVisible(true);
    } else if (contrasena !== ConfirContra) {
      setModalMessage('Las contraseñas no coinciden.');
      setModalVisible(true);
    } else {
      const bodyData = {
        nombre,
        apellido,
        DNI,
        direccion,
        genero,
        numero_contacto,
        email: correo,
        contrasena,
        tipo_usuario: tipoUsuario,
      };

      if (tipoUsuario === 2) {
        bodyData.codigo_invitacion = codigoInvitacion;
      }

      try {
        const response = await fetch('https://verdeulima.azurewebsites.net/back/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(bodyData),
        });

        const data = await response.json();
        if (response.ok) {
          navigation.navigate('Login');
        } else {
          setModalMessage(data.error || 'Error al registrar el usuario.');
          setModalVisible(true);
        }
      } catch (error) {
        setModalMessage('Error de conexión.');
        setModalVisible(true);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Registro de cuenta</Text>
      </View>

      <Text style={styles.subTitle}>Ingrese su correo y contraseña</Text>

      <TextInput
        style={styles.input}
        placeholder="Ingrese su correo electrónico"
        value={correo}
        onChangeText={setCorreo}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Ingrese su contraseña"
        secureTextEntry={true}
        value={contrasena}
        onChangeText={setContrasena}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Confirme su contraseña"
        secureTextEntry={true}
        value={ConfirContra}
        onChangeText={setConfirContra}
      />

<Text style={styles.subTitle}>Por favor, escoja su tipo de usuario</Text>

<View style={styles.inputContainer}>
  {tiposUsuario.map((tipo) => (
    <TouchableOpacity
      key={tipo.id}
      style={[
        styles.radioContainer,
        tipoUsuario === tipo.id && styles.radioSelected,
      ]}
      onPress={() => {
        setTipoUsuario(tipo.id);
        setCodigoInvitacion('');  // Reiniciar el código de invitación si cambia el tipo de usuario
      }}
    >
      <Text style={styles.radioLabel}>{tipo.tipo}</Text>
    </TouchableOpacity>
  ))}
</View>

      {tipoUsuario === 2 && (
        <TextInput
          style={styles.input}
          placeholder="Ingrese su código de invitación"
          value={codigoInvitacion}
          onChangeText={setCodigoInvitacion}
        />
      )}

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>

      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>{modalMessage}</Text>
            <Button title="Cerrar" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default RegisterII;
