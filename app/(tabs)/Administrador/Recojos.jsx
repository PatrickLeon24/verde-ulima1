import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal, Button } from 'react-native';

const RecojoActivoCard = ({ nombre, apellido, plan, fecha_ingreso, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <Text style={styles.cardTitle}>Recojo Activo</Text>
    <Text style={styles.cardText}>Usuario: {nombre} {apellido}</Text>
    <Text style={styles.cardText}>Plan: {plan}</Text>
    <Text style={styles.cardText}>Fecha ingreso: {fecha_ingreso}</Text>
  </TouchableOpacity>
);

const RecojoActivoList = () => {
  const [adminData, setAdminData] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const fetchAdminData = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/back/obtener_recojos');
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

  return (
    <ScrollView contentContainerStyle={styles.container}>
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

      {/* Modal para mostrar la información del usuario */}
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
                <Text>Plan: {selectedUser.gestorplan__plan__nombre}</Text>
                <Text>Fecha de ingreso: {selectedUser.gestorplan__recojo__fecha_ingreso}</Text>
                <Text> </Text>

                <Button title="Cerrar" onPress={() => setModalVisible(false)} />
              </>
            )}
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  card: {
    padding: 15,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardText: {
    fontSize: 16,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
  modalContainer: {
    width: '80%', 
    backgroundColor: 'white', 
    borderRadius: 10,
    padding: 20,
    elevation: 5, 
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default RecojoActivoList;


