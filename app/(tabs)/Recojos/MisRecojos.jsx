import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './MisRecojosStyle';

const RecojoActivoCard = ({ numero, plan, fecha_ingreso, onPress, navigation, fecha_salida}) => (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.cardTitle}>Recojo {numero}</Text>
      
      <Text style={styles.cardText}>Tipo de plan: {plan}</Text>
      <Text style={styles.cardText}>Fecha ingreso: {fecha_ingreso}</Text>
      <Text style={styles.cardText}>Fecha salida: {fecha_salida}</Text>
    </TouchableOpacity>
  );

const RecojoActivoList = ({ navigation }) => {
  const [usuarioId, setUsuarioId] = useState(null);
  const [adminData, setAdminData] = useState([]); 

  useEffect(() => {
    const getUserId = async () => {
      try {
        const jsonUserData = await AsyncStorage.getItem('userData');
        if (jsonUserData !== null) {
          const userData = JSON.parse(jsonUserData);
          setUsuarioId(userData.usuario_id);
        }
      } catch (error) {
        console.error('Error al recuperar el ID del usuario:', error);
      }
    };

    getUserId();
  }, []);

  useEffect(() => {
    const fetchAdminData = async () => {
      if (usuarioId) {
        try {
          const response = await fetch(`https://verdeulima.azurewebsites.net/back/obtener_recojosus/${usuarioId}/`);
          if (!response.ok) {
            throw new Error('Error al obtener los recojos activos');
          }
          const data = await response.json();
          setAdminData(data);
        } catch (error) {
          console.error('Error fetching recojos activos:', error);
        }
      }
    };

    fetchAdminData();
  }, [usuarioId]);

  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.barraSuperior}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.botonRetroceso}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.textoBarra}>Mis Recojos</Text>
      </View>

      
      <ScrollView style={styles.historialScroll}>
        <View style={styles.historialContainer}>
          <Text style={styles.historialTexto}>Historial</Text>
          <View style={styles.linea}></View>

          
          {adminData.length > 0 ? (
            adminData.map((recojo, index) => (
                <RecojoActivoCard
                key={index}
                numero={index + 1} 
                
                plan={recojo.gestorplan__plan__nombre}
                fecha_ingreso={recojo.gestorplan__recojo__fecha_ingreso}
                fecha_salida={recojo.gestorplan__recojo__fecha_salida}
                />
            ))
            ) : (
            <Text>No hay recojos activos para mostrar.</Text>
            )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RecojoActivoList;
