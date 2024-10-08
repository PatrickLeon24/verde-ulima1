import React, { useEffect, useState } from 'react';
import {Text, StyleSheet, ScrollView , TouchableOpacity} from 'react-native';

// Componente para mostrar los recojos activos
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

  // Función para obtener los datos de recojos activos
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

  // Llamar a la función cuando el componente se monte
  useEffect(() => {
    fetchAdminData();
  }, []);

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
          />
        ))
      ) : (
        <Text>No hay recojos activos para mostrar.</Text>
      )}
    </ScrollView>
  );
};

// Estilos para el componente de tarjeta
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardText: {
    fontSize: 16,
    marginBottom: 3,
  },
});

export default RecojoActivoList;
