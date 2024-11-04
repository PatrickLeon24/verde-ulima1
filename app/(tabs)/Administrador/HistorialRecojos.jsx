import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const HistorialActivoCard = ({ nombre, apellido, plan, fecha_salida, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <Text style={styles.cardText}>Usuario: {nombre} {apellido}</Text>
    <Text style={styles.cardText}>Tipo de plan: {plan}</Text>
    <Text style={styles.cardText}>Fecha salida: {fecha_salida}</Text>
  </TouchableOpacity>
);

const HistorialRecojos = ({ route }) => {
  const navigation = useNavigation();
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
      <View style={styles.barraSuperior}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.botonRetroceso}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.textoBarra}>Historial de Recojos</Text>
      </View>

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
    flex: 1,
    backgroundColor: 'white',
  },
  barraSuperior: {
    height: 60,
    backgroundColor: '#34A853',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  textoBarra: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  card: {
    padding: 15,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginHorizontal: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardText: {
    fontSize: 16,
  },
});

export default HistorialRecojos;
