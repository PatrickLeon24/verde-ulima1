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
      {/* Barra Superior */}
      <View style={styles.barraSuperior}>
        <TouchableOpacity onPress={() => router.back()} style={styles.botonRetroceso}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.textoBarra}>Mi cuenta</Text>
      </View>

      {/* Información del Usuario */}
      <View style={styles.userInfo}>
        <Image
          source={require('../../../assets/images/SAzRztbw_400x400.jpg')} // Icono del usuario
          style={styles.userImage}
        />
        <View style={styles.userDetails}>
          <Text style={styles.userName}>nombre apellido</Text>
          <Text style={styles.userInfoText}>DNI: XXXXXXXX</Text>
          <Text style={styles.userInfoText}>Dirección:</Text>
        </View>
      </View>

      {/* Sección de Información Personal */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Información Personal</Text>
        <TouchableOpacity style={styles.option} onPress={()=>router.push('/MyProfile/MiPerfil')}>
          <Text style={styles.optionText}>Editar Perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={()=>router.push('/Password/Contrasena')}>
          <Text style={styles.optionText}>Cambiar Contraseña</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={[styles.optionText, { color: 'red' }]}>Cerrar Sesión</Text>
        </TouchableOpacity>
      </View>

      {/* Sección de Servicios */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Servicios</Text>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Ver mi Pedido</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText} onPress={() => router.push('/Planes/MiPlan')}>Ver mi Plan</Text>
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
  barraSuperior: {
    height: 60,
    backgroundColor: '#34A853',
    flexDirection: 'row',
    alignItems: 'center',
  },
  botonRetroceso: {
    paddingLeft: 10, // Alinea el botón a la izquierda
  },
  textoBarra: {
    flex: 1, // Permite que el texto tome todo el espacio restante
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center', // Alinea el texto al centro
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 16,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  userDetails: {
    alignItems: 'center',
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
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  option: {
    width: '100%',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
  },
});

export default AccountScreen;
