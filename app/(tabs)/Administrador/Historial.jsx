import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const HistorialActivoCard = ({ nombre, apellido, plan, fecha_salida, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <Text style={styles.cardText}>Usuario: {nombre} {apellido}</Text>
    <Text style={styles.cardText}>Tipo de plan: {plan}</Text>
    <Text style={styles.cardText}>Fecha salida: {fecha_salida}</Text>
  </TouchableOpacity>
);

const HistorialActivoList = ({ route }) => {
  const { userData } = route.params;
  const [adminData, setAdminData] = useState([]);

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/back/historial_recojos/${userData.usuario_id}/`);
        if (!response.ok) {
          throw new Error(`Error en la respuesta: ${response.status}`);
        }
        const data = await response.json();
        setAdminData(data);
      } catch (error) {
      }
    };

    fetchAdminData();
  }, [userData.usuario_id]); 

  const handleHistorialPress = (historial) => {
    setSelectedUser(historial);
    setModalVisible(true); 
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {adminData && adminData.length > 0 ? (
        adminData.map((historial, index) => (
          <HistorialActivoCard
            key={index}
            nombre={historial.recojo__gestor_plan__usuario__nombre}
            apellido={historial.recojo__gestor_plan__usuario__apellido}
            plan={historial.recojo__gestor_plan__plan__nombre}
            fecha_salida={historial.recojo__fecha_salida}
            onPress={() => handleHistorialPress(historial)}
          />
        ))
      ) : (
        <Text>No hay recojos activos para mostrar.</Text>
      )}
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
});

export default HistorialActivoList;
