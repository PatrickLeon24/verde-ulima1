import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PlanItem from './PlanItem';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PantallaPlan = ({ navigation }) => {
  const [planActual, setPlanActual] = useState(null);
  const [planesData, setPlanesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const jsonUserData = await AsyncStorage.getItem('userData');
        if (jsonUserData !== null) {
          setUserData(JSON.parse(jsonUserData));
        } else {
          setUserData(null);
        }
      } catch (error) {
        console.error('Error al recuperar los datos del usuario:', error);
      }
    };

    const unsubscribe = navigation.addListener('focus', () => {
      getUserData();
    });

    getUserData();

    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    const fetchPlanActual = async () => {
      if (userData) {
        try {
          const response = await fetch(`http://127.0.0.1:8000/back/planes/${userData.usuario_id}/`);
          if (!response.ok) {
            throw new Error('Error en la carga del plan actual del usuario');
          }
          const data = await response.json();
          setPlanActual(data);
        } catch (error) {
          console.error('Error al cargar el plan actual del usuario:', error);
        }
      }
    };

    fetchPlanActual();
  }, [userData]);

  useEffect(() => {
    const fetchPlanes = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/back/planesRecojo');
        if (!response.ok) {
          throw new Error('Error en la carga de los datos');
        }
        const data = await response.json();
        setPlanesData(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlanes();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Cargando planes...</Text>
      </View>
    );
  }

  // Filtrar los planes para que no se muestre el planActual
  const planesDisponibles = planActual
    ? planesData.filter(plan => plan.plan_id !== planActual.plan_id)
    : planesData;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.barraSuperior}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.botonRetroceso}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.textoBarra}>Mi plan</Text>
      </View>

      {planActual ? (
        <PlanItem
          nombre={planActual.nombre}
          descripcion={planActual.descripcion}
          precio={planActual.precio}
          imagen={planActual.imagen}
          onPress={() => navigation.navigate('VerPlan', { item: planActual })}
        />
      ) : (
        <Text>No tienes un plan contratado actualmente.</Text>
      )}

      <View style={styles.barramedia}>
        <Text style={styles.buttonText}>¿Quieres cambiar de plan?</Text>
      </View>

      <FlatList
        data={planesDisponibles}
        keyExtractor={(item) => item.plan_id.toString()}
        renderItem={({ item }) => (
          <PlanItem
            nombre={item.nombre}
            descripcion={item.descripcion}
            precio={item.precio}
            imagen={item.imagen}
            onPress={() => navigation.navigate('VerPlan', { item })}
          />
        )}
        contentContainerStyle={styles.listaContenido}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 40,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'white',
    width: 107,
    height: 40,
    borderRadius: 30,
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: '#34A853',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#000000',
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  barraSuperior: {
    height: 60,
    backgroundColor: '#34A853',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  barramedia: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  botonRetroceso: {
    marginRight: 30,
  },
  textoBarra: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  listaContenido: {
    paddingVertical: 10,
  },
});

export default PantallaPlan;
