import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Notificacion = ({ route }) => {
    const { userData } = route.params;
    const navigation = useNavigation();
    const [notificaciones, setNotificaciones] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchNotificaciones = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/back/notificaciones', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ usuario_id: userData.usuario_id }),
            });
            const data = await response.json();
            if (data.status === 'success') {
                setNotificaciones(data.notificaciones);
            } else {
                console.log(data.error);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const marcarComoLeidas = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/back/marcar-leidas', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ usuario_id: userData.usuario_id }),
            });
            const data = await response.json();
            if (data.status === 'success') {
                console.log('Notificaciones marcadas como leídas');
            } else {
                console.log('Error al marcar como leídas:', data.error);
            }
        } catch (error) {
            console.log('Error en la solicitud:', error);
        }
    };

    useEffect(() => {
        fetchNotificaciones();

        const unsubscribe = navigation.addListener('blur', () => {
            marcarComoLeidas();
        });

        return unsubscribe;
    }, [navigation]);

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#3498db" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Últimas Notificaciones</Text>
            <FlatList
                data={notificaciones}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.notificacionItem}>
                        <Text style={styles.mensaje}>{item.mensaje}</Text>
                        <Text style={styles.fecha}>{item.fecha_creacion}</Text>
                        <Text style={[styles.estado, item.leido ? styles.leido : styles.noLeido]}>
                            {item.leido ? "Leído" : "No leído"}
                        </Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f6f8',
        paddingHorizontal: 20,
        paddingVertical: 40,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f4f6f8',
    },
    header: {
        fontSize: 24,
        fontWeight: '700',
        color: '#2c3e50',
        textAlign: 'center',
        marginBottom: 20,
    },
    notificacionItem: {
        backgroundColor: '#fff',
        padding: 15,
        marginVertical: 10,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    mensaje: {
        fontSize: 16,
        fontWeight: '600',
        color: '#34495e',
        marginBottom: 5,
    },
    fecha: {
        fontSize: 14,
        color: '#7f8c8d',
    },
    estado: {
        fontSize: 12,
        marginTop: 10,
        fontWeight: 'bold',
    },
    leido: {
        color: '#27ae60',
    },
    noLeido: {
        color: '#e74c3c',
    },
});

export default Notificacion;
