import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Modal, Button } from 'react-native';
import styles from './RecojoStyle';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const RecojoActivoCard = ({ nombre, apellido, plan, fecha_ingreso, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <Text style={styles.cardTitle}>Recojo Activo</Text>
    <Text style={styles.cardText}>Usuario: {nombre} {apellido}</Text>
    <Text style={styles.cardText}>Tipo de plan: {plan}</Text>
    <Text style={styles.cardText}>Fecha ingreso: {fecha_ingreso}</Text>
  </TouchableOpacity>
);

const RecojoActivoList = ({ route }) => {
  const navigation = useNavigation();
  const { userData } = route.params;
  const [adminData, setAdminData] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const fetchAdminData = async () => {
    try {
      const response = await fetch('http://192.168.18.12:8000/back/obtener_recojos');
      if (!response.ok) {
        throw new Error(`Error en la respuesta: ${response.status}`);
      }
      const data = await response.json();
      setAdminData(data);
    } catch (error) {
      console.error('Error al realizar la solicitud:', error.message);
    }
  };

  useEffect(() => {
    fetchAdminData();
  }, []);

  const handleCardPress = (recojo) => {
    setSelectedUser(recojo);
    setModalVisible(true);
  };

  const handleEnviarRecojoId = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/back/consultar_recojo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ recojo_id: selectedUser.id, admin_id: userData.usuario_id }),
      });

      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.status}`);
      }

      const result = await response.json();
      console.log('Resultado de la consulta:', result);

      setSelectedUser((prevUser) => ({
        ...prevUser,
        ...result
      }));

      fetchAdminData();

      // Cerrar modal
      setModalVisible(false);

    } catch (error) {
      console.error('Error al enviar el recojo ID:', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.botonRetroceso}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Recojos Activos</Text>
      </View>
      {adminData && adminData.length > 0 ? (
        adminData.map((recojo, index) => (
          <RecojoActivoCard
            key={index}
            nombre={recojo.nombre}
            apellido={recojo.apellido}
            plan={recojo.gestorplan__plan__nombre}
            fecha_ingreso={recojo.gestorplan__recojo__fecha_ingreso}
            onPress={() => handleCardPress(recojo)}
          />
        ))
      ) : (
        <Text>No hay recojos activos para mostrar.</Text>
      )}

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            {selectedUser && (
              <>
                <Text style={styles.modalTitle}>Detalles del Usuario</Text>
                <Text>Nombre: {selectedUser.nombre}</Text>
                <Text>Apellido: {selectedUser.apellido}</Text>
                <Text>Dni: {selectedUser.DNI}</Text>
                <Text>Celular: {selectedUser.numero_contacto}</Text>
                <Text>Direccion: {selectedUser.direccion}</Text>
                <Text>Tipo de plan: {selectedUser.gestorplan__plan__nombre}</Text>
                <Text>Fecha de ingreso: {selectedUser.gestorplan__recojo__fecha_ingreso}</Text>
                <Text>Estado del servicio: {selectedUser.gestorplan__recojo__recojo_trayectoria__trayectoria__estado}</Text>

                {/* Botones: Cerrar y Consultar Recojo */}
                <View style={styles.buttonContainer}>
                  <Button title="Cerrar" onPress={() => setModalVisible(false)} />
                  <Button
                    title="Consultar Recojo"
                    onPress={handleEnviarRecojoId}
                  />
                </View>
              </>
            )}
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default RecojoActivoList;
