import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';

const Notificacion = ({route}) => {
    const {userData} = route.params
    const [notificaciones, setNotificaciones] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchNotificaciones = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/back/notificaciones', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ usuario_id: userData.usuario_id })
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

    useEffect(() => {
        fetchNotificaciones();
    }, []);

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
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
                        <Text style={styles.estado}>{item.leido ? "Leído" : "No leído"}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    notificacionItem: {
        backgroundColor: '#f9f9f9',
        padding: 15,
        marginVertical: 8,
        borderRadius: 5,
    },
    mensaje: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    fecha: {
        fontSize: 14,
        color: '#666',
    },
    estado: {
        fontSize: 12,
        color: '#888',
        marginTop: 5,
    },
});

export default Notificacion;