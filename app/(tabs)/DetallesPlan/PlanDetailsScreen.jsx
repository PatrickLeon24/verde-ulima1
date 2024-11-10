import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PlanDetailsScreen = ({ navigation, route }) => {
  const { item, usuario_id, activo, planM } = route.params;
  console.log(usuario_id)
  console.log(activo)
  console.log(planM)
  return (
    <SafeAreaView style={styles.container}>
      {/* Barra superior */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Detalles del plan</Text>
      </View>

      {/* Imagen del plan */}
      <Image
        source={{ uri: item.imagen }}
        style={styles.image}
      />

      <View style={styles.detailsContainer}>
        {/* Título del plan */}
        <Text style={styles.planTitle}>{item.nombre}</Text>
        <View style={styles.titleUnderline} />

        {/* Descripción del plan */}
        <Text style={styles.sectionTitle}>Descripción del Plan</Text>
        <Text style={styles.planDescription}>{item.descripcion}</Text>

        {/* Detalles del plan */}
        <Text style={styles.planDetails}>Cantidad de aserrín: {item.aserrin} kg</Text>
        <Text style={styles.planDetails}>Cantidad de baldes: {item.baldes}</Text>
        <Text style={styles.planDetails}>Cantidad de recojos: {item.frecuencia_recojo}</Text>
        <Text style={styles.planDetails}>Cantidad de compostaje: {item.cantidad_compostaje} kg</Text>
        <Text style={styles.planDetailsHighlight}>Puntos: {item.puntos_plan}</Text>
        <Text style={styles.planDetails}>Duración: {item.duracion} días</Text>

        {/* Precio del plan */}
        <Text style={styles.planPrice}>S/. {item.precio}</Text>

        {/* Botón de pago, desactivado si el usuario ya tiene un plan activo */}
        {planM ?(
          <Text style={styles.activePlanMessage}>..</Text>
        ):(
          activo ? (
            <Text style={styles.activePlanMessage}>Tienes un recojo activo.</Text>
          ) : (
            <TouchableOpacity
              style={styles.payButton}
              onPress={() => {
                console.log("usuario_id:", usuario_id);
                console.log("plan_id:", item.plan_id);
                navigation.navigate('Pago', {
                  plan_id: item.plan_id,
                  usuario_id: usuario_id,
                });
              }}
            >
              <Text style={styles.payButtonText}>Pagar Plan</Text>
            </TouchableOpacity>
          )
          
        )

        }
        
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    paddingVertical: 40,
  },
  header: {
    height: 60,
    backgroundColor: '#34A853',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e6e6e6',
  },
  backButton: {
    marginRight: 30,
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 16,
    resizeMode: 'cover',
  },
  detailsContainer: {
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    marginHorizontal: 16,
    marginTop: -30,
  },
  planTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 8,
  },
  titleUnderline: {
    borderBottomColor: '#34A853',
    borderBottomWidth: 2,
    marginBottom: 16,
    alignSelf: 'center',
    width: '50%',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#777',
    marginBottom: 10,
  },
  planDescription: {
    fontSize: 16,
    color: '#555',
    marginBottom: 16,
    lineHeight: 22,
    textAlign: 'justify',
  },
  planDetails: {
    fontSize: 16,
    color: '#555',
    marginBottom: 8,
  },
  planDetailsHighlight: {
    fontSize: 16,
    color: '#34A853',
    marginBottom: 8,
    fontWeight: 'bold',
  },
  planPrice: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginVertical: 16,
    textAlign: 'center',
  },
  activePlanMessage: {
    color: '#888',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 16,
  },
  payButton: {
    backgroundColor: '#34A853',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  payButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PlanDetailsScreen;
