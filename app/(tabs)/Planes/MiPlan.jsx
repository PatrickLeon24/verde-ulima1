import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PlanItem from './PlanItem';
import AsyncStorage from '@react-native-async-storage/async-storage'; 

const PantallaPlan = ({ navigation }) => {
  const [planActual, setPlanActual] = useState(null);  // Plan actual del usuario
  const [planesData, setPlanesData] = useState([]);    // Todos los planes
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);

  // Obtener los datos del usuario desde AsyncStorage
  useEffect(() => {
    const getUserData = async () => {
      try {
        const jsonUserData = await AsyncStorage.getItem('userData');
        if (jsonUserData !== null) {
          setUserData(JSON.parse(jsonUserData));
        } else {
          setUserData(null); // Reiniciar si no hay datos
        }
      } catch (error) {
        console.error('Error al recuperar los datos del usuario:', error);
      }
    };

    const unsubscribe = navigation.addListener('focus', () => {
      getUserData(); // Llamar cuando la pantalla gana foco
    });

    getUserData(); // También llamar al cargar el componente

    return unsubscribe; // Limpia el evento al desmontar el componente
  }, [navigation]);

  // Usar el ID del usuario para obtener el plan actual
  useEffect(() => {
    const fetchPlanActual = async () => {
      if (userData) {
        try {
          const response = await fetch(`http:///127.0.0.1:8000/back/planes/${userData.usuario_id}/`);
          if (!response.ok) {
            throw new Error('Error en la carga del plan actual del usuario');
          }
          const data = await response.json();
          setPlanActual(data);
           // Guardar los datos del plan actual
        } catch (error) {
          console.error('Error al cargar el plan actual del usuario:', error);
        }
      }
      
    };

    fetchPlanActual();
  }, [userData]);

  // Obtener todos los planes disponibles
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

  return (
    <SafeAreaView style={styles.container}>
      {/* Barra superior verde */}
      <View style={styles.barraSuperior}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.botonRetroceso}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.textoBarra}>Mi plan</Text>
      </View>

      {/* Información del plan actual */}
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

      {/* Mostrar todos los planes disponibles */}
       {/* Lista de planes */}
       {/* Lista de planes */}
      <FlatList
        data={planesData}
        keyExtractor={(item) => item.plan_id.toString()}
        renderItem={({ item }) => (
          <PlanItem
            nombre={item.nombre}
            descripcion={item.descripcion}
            precio={item.precio}
            imagen={item.imagen}
            onPress={() => navigation.navigate('VerPlan', { item })} // Navegar al plan específico
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