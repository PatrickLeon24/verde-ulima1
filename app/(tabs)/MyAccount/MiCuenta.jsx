import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useColorScheme } from 'react-native'; // Si usas un hook para los temas

const AccountScreen = () => {
  const colorScheme = useColorScheme();
  const colors = colorScheme === 'dark' ? darkThemeColors : lightThemeColors;

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <Text style={[styles.headerText, { backgroundColor: colors.primary }]}>
          Mi cuenta
        </Text>
      </View>

      <View style={styles.userInfo}>
        <Image
          //source={require('../assets/images/user-icon.png')} // Icono del usuario
          style={styles.userImage}
        />
        <View>
          <Text style={styles.userName}>nombre apellido</Text>
          <Text style={styles.userInfoText}>DNI: XXXXXXXX</Text>
          <Text style={styles.userInfoText}>Dirección</Text>
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
          <Text style={styles.optionText}>Ver mi Plan</Text>
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
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
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
