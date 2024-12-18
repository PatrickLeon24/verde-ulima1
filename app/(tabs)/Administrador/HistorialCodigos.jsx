import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const CodigoInvitacionCard = ({ codigo, utilizado, fecha_creacion }) => {
  const cardStyle = utilizado ? styles.cardUtilizado : styles.card;

  return (
    <View style={cardStyle}>
      <Text style={styles.cardText}>Código: {codigo}</Text>
      <Text style={styles.cardText}>Utilizado: {utilizado ? 'Sí' : 'No'}</Text>
      <Text style={styles.cardText}>Fecha de Creación: {fecha_creacion}</Text>
    </View>
  );
};

const HistorialCodigos = ({ route }) => {
  const navigation = useNavigation();
  const { userData } = route.params;
  const [codigosData, setCodigosData] = useState([]);

  useEffect(() => {
    const fetchCodigosData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/back/historial_codigos/${userData.usuario_id}/`);
        if (!response.ok) {
          throw new Error(`Error en la respuesta: ${response.status}`);
        }
        const data = await response.json();
        setCodigosData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCodigosData();
  }, [userData.usuario_id]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.barraSuperior}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.botonRetroceso}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.textoBarra}>Códigos de Invitación</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {codigosData && codigosData.length > 0 ? (
          codigosData.map((codigo, index) => (
            <CodigoInvitacionCard
              key={index}
              codigo={codigo.codigo}
              utilizado={codigo.utilizado}
              fecha_creacion={codigo.fecha_creacion}
            />
          ))
        ) : (
          <Text style={styles.cardText}>No hay códigos de invitación para mostrar.</Text>
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
  cardUtilizado: {
    padding: 15,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ffcccb',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    backgroundColor: '#ffe6e6',
  },
  cardText: {
    fontSize: 16,
  },
  botonRetroceso: {
    marginRight: 20,
  },
});

export default HistorialCodigos;
