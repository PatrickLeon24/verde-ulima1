import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const HistorialActivoCard = ({ nombre, apellido, plan, fecha_salida }) => (
  <View style={styles.card}>
    <Text style={styles.cardText}>Usuario: {nombre} {apellido}</Text>
    <Text style={styles.cardText}>Tipo de plan: {plan}</Text>
    <Text style={styles.cardText}>Fecha de finalizacion: {fecha_salida}</Text>
  </View>
);

const HistorialRecojos = ({ route }) => {
  const navigation = useNavigation();
  const { userData } = route.params;
  const [adminData, setAdminData] = useState([]);

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const response = await fetch(`https://verdeulima.azurewebsites.net/back/historial_recojos/${userData.usuario_id}/`);
        if (!response.ok) {
          throw new Error(`Error en la respuesta: ${response.status}`);
        }
        const data = await response.json();
        setAdminData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAdminData();
  }, [userData.usuario_id]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.barraSuperior}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.botonRetroceso}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.textoBarra}>Historial de Recojos</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {adminData && adminData.length > 0 ? (
          adminData.map((historial, index) => (
            <HistorialActivoCard
              key={index}
              nombre={historial.recojo__gestor_plan__usuario__nombre}
              apellido={historial.recojo__gestor_plan__usuario__apellido}
              plan={historial.recojo__gestor_plan__plan__nombre}
              fecha_salida={historial.recojo__fecha_salida}
            />
          ))
        ) : (
          <Text style={styles.cardText}>No hay recojos activos para mostrar.</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 40
  },
  scrollContainer: {
    paddingVertical: 20,
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
  cardText: {
    fontSize: 16,
  },
  botonRetroceso: {
    marginRight: 20,
  },
});

export default HistorialRecojos;