import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useColorScheme } from 'react-native'; // Si usas un hook para los temas
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
const AccountScreen = () => {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const colors = colorScheme === 'dark' ? darkThemeColors : lightThemeColors;

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.botonRetroceso}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={[styles.headerText, { backgroundColor: colors.primary }]}>
          Mi cuenta
        </Text>
      </View>

      <View style={styles.userInfo}>
        <Image
          source={require('../../../assets/images/SAzRztbw_400x400.jpg')} // Icono del usuario
          style={styles.userImage}
        />
        <View>
          <Text style={styles.userName}>nombre apellido</Text>
          <Text style={styles.userInfoText}>DNI: XXXXXXXX</Text>
          <Text style={styles.userInfoText}>Dirección: </Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Información Personal</Text>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Editar Perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Cambiar Contraseña</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={[styles.optionText, { color: 'red' }]}>Cerrar Sesión</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Servicios</Text>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Ver mi Pedido</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText} onPress={()=>router.push('/Planes/MiPlan')}>Ver mi Plan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Ver mis Puntos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const lightThemeColors = {
  background: '#fff',
  primary: '#4CAF50', // Color verde del header
};

const darkThemeColors = {
  background: '#000',
  primary: '#333',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    height: 60, // Altura de la barra superior
    backgroundColor: '#34A853', // Color verde para la barra superior
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  userInfoText: {
    fontSize: 14,
    color: 'gray',
  },
  section: {
    marginVertical: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  optionText: {
    fontSize: 16,
  },
});

export default AccountScreen;
