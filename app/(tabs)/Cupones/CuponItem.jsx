import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './estilosCup';


const CuponItem = ({ nombre, imagen, descripcion, onPress }) => {
    return(
    <TouchableOpacity onPress={onPress} style={styles.planContainer}>
    {/*<View style={styles.iconContainer}>*/}
        {/*<Ionicons name="image-outline" size={40} color="#999" />*/}
        <Image
            source={{uri: imagen}}
            style= {styles.iconContainer}
        />
   {/*</View>*/}
    <View style={styles.textContainer}>
        <Text style={styles.planNombre}>
            {nombre}
        </Text>
        <Text style={styles.planDescripcion}>
            Ver más
        </Text>
    </View>
    <View style={styles.infoContainer}>
      <Ionicons name="add-circle-outline" size={20} color="#999" />
        <Text style={styles.planTime}>
            Today
        </Text>
    </View>
    <Ionicons name="chevron-forward" size={20} color="#000" />
  </TouchableOpacity>
    );
};



export default CuponItem;