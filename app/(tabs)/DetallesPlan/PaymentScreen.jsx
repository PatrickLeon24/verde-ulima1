import React, { useState, useRef, useEffect } from 'react';
import { SafeAreaView, Modal, Button, Image, View, Text, TextInput, TouchableOpacity, Alert, ScrollView, KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import { useNavigation, useRoute} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
import visa from '../../../assets/visa.png';
import master from '../../../assets/master.png';
import americanex from '../../../assets/americanex.png';
import dinner from '../../../assets/dinner.png';
import yape from '../../../assets/yape.png';

const PaymentScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {plan_id, usuario_id } = route.params;
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [dniCard, setDniCard] = useState('');
  const [yapePhone, setYapePhone] = useState('');
  const [dniYape, setDniYape] = useState('');
  const [yapeConfirmation, setYapeConfirmation] = useState('');

  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const cardNumberRef = useRef(null);
  const expiryDateRef = useRef(null);
  const cvvRef = useRef(null);
  const dniCardRef = useRef(null);
  const yapePhoneRef = useRef(null);
  const dniYapeRef = useRef(null);
  const yapeConfirmationRef = useRef(null);

  const isCardInputActive = cardNumber || expiryDate || cvv || dniCard;
  const isYapeInputActive = yapePhone || dniYape || yapeConfirmation;

  const handleExpiryDateChange = (text) => {
    let formattedText = text.replace(/\D/g, '');
    if (formattedText.length > 2) {
      formattedText = `${formattedText.slice(0, 2)}/${formattedText.slice(2, 6)}`;
    }
    if (parseInt(formattedText.slice(0, 2), 10) > 12) {
      formattedText = '12';
    }
    setExpiryDate(formattedText);
    if (formattedText.length === 7) {
      cvvRef.current.focus();
    }
  };

  const handleCardNumberChange = (text) => {
    setCardNumber(text);
    if (text.length === 16) {
      expiryDateRef.current.focus();
    }
  };

  const handleCvvChange = (text) => {
    setCvv(text);
    if (text.length === 3) {
      dniCardRef.current.focus();
    }
  };

  const handleYapePhoneChange = (text) => {
    setYapePhone(text);
    if (text.length === 9) {
      dniYapeRef.current.focus();
    }
  };

  const handleYapeDniChange = (text) => {
    setDniYape(text);
    if (text.length === 8) {
      yapeConfirmationRef.current.focus();
    }
  };

  const validateFields = () => {
    if (cardNumber && cardNumber.length !== 16) {
      setModalMessage('El número de tarjeta debe tener 16 dígitos.');
      setModalVisible(true);
      
      return false;
    }
    if (cardNumber && (!expiryDate || !cvv || !dniCard)) {
      setModalMessage('Completa todos los campos de tarjeta de crédito/débito.');
      setModalVisible(true);
      return false;
    }
    if (yapePhone && (!dniYape || !yapeConfirmation)) {
      setModalMessage('Completa todos los campos de Yape');
      setModalVisible(true);
      return false;
    }
    if (!cardNumber && !yapePhone) {
      setModalMessage('Debes completar al menos una opción de pago.');
      setModalVisible(true);

      return false;
    }
    return true;
  };

  const handlePay = async () => {
    if (validateFields()) {
        const paymentData = {
            estado: 'Completado',
            metodo_pago: cardNumber ? 'Tarjeta' : 'Yape',
            fecha_pago: new Date().toISOString().split('T')[0],
        };

        try {
            const response = await fetch('http://127.0.0.1:8000/back/crear_pago', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(paymentData),
            });

            const result = await response.json();

            if (response.ok) {
                const pago_id = result.pago_id;
                console.log("usuario_id:", usuario_id);
                console.log("plan_id:", plan_id);
                console.log("pago_id:", pago_id);

                const gestorPlanData = {
                    usuario_id: usuario_id,
                    plan_id: plan_id,
                    pago_id: pago_id,
                };

                const gestorPlanResponse = await fetch('http://127.0.0.1:8000/back/gestor_plan', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(gestorPlanData),
                });

                const gestorPlanResult = await gestorPlanResponse.json();

                if (gestorPlanResponse.ok) {
                    setModalMessage('Tu pago ha sido procesado y registrado exitosamente.');
                    setModalVisible(true);

                    setTimeout(() => {
                        navigation.navigate('Menu');
                    }, 2000);
                } else {
                    console.error('Error al registrar el GestorPlan:', gestorPlanResult);
                    setModalMessage(gestorPlanResult.error || 'Error al registrar el GestorPlan');
                    setModalVisible(true);
                }
            } else {
                console.error('Error al procesar el pago:', result);
                setModalMessage(result.error || 'Error al procesar el pago');
                setModalVisible(true);
            }
        } catch (error) {
            console.error('Error de conexión:', error);
            setModalMessage('Error de conexión. Intenta nuevamente.');
            setModalVisible(true);
        }
    }
};
  

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.barraSuperior}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.botonRetroceso}>
              <Ionicons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>
            <Text style={styles.textoBarra}>Pago</Text>
          </View>

          <Text style={styles.subtitle}>Elige una forma de pago:</Text>

          {/* Sección de Tarjeta de Crédito o Débito */}
          <Text style={styles.sectionTitle}>Tarjeta de Crédito o Débito</Text>
          <View style={styles.cardImagesContainer}>
            <Image source={visa} style={styles.cardImage} />
            <Image source={master} style={styles.cardImage} />
            <Image source={americanex} style={styles.cardImage} />
            <Image source={dinner} style={styles.cardImage} />
          </View>
          <View style={styles.cardContainer}>
            <TextInput
              ref={cardNumberRef}
              style={styles.input}
              placeholder="Número de Tarjeta"
              keyboardType="number-pad"
              value={cardNumber}
              onChangeText={handleCardNumberChange}
              maxLength={16}
              editable={!isYapeInputActive}
              returnKeyType="next"
              onSubmitEditing={() => expiryDateRef.current.focus()}
            />
            <View style={styles.inlineInputs}>
              <TextInput
                ref={expiryDateRef}
                style={[styles.input, styles.smallInput]}
                placeholder="MM/AAAA"
                keyboardType="number-pad"
                value={expiryDate}
                onChangeText={handleExpiryDateChange}
                editable={!isYapeInputActive}
                maxLength={7}
              />
              <TextInput
                ref={cvvRef}
                style={[styles.input, styles.smallInput, styles.cvv]}
                placeholder="CVV"
                keyboardType="number-pad"
                value={cvv}
                onChangeText={handleCvvChange}
                editable={!isYapeInputActive}
                maxLength={3}
              />
            </View>
            <TextInput
              ref={dniCardRef}
              style={styles.input}
              placeholder="DNI"
              keyboardType="number-pad"
              value={dniCard}
              onChangeText={setDniCard}
              editable={!isYapeInputActive}
              maxLength={8}
            />
          </View>

          {/* Sección de Yape */}
          <View style={styles.yapeContainer}>
            <Text style={styles.yapeText}>Yape</Text>
            <Image source={yape} style={styles.yapeImage} />
          </View>
          <View style={styles.cardContainer}>
            <TextInput
              ref={yapePhoneRef}
              style={styles.input}
              placeholder="Número de teléfono"
              keyboardType="number-pad"
              value={yapePhone}
              onChangeText={handleYapePhoneChange}
              editable={!isCardInputActive}
              maxLength={9}
              returnKeyType="next"
              onSubmitEditing={() => dniYapeRef.current.focus()}
            />
            <TextInput
              ref={dniYapeRef}
              style={styles.input}
              placeholder="DNI"
              keyboardType="number-pad"
              value={dniYape}
              onChangeText={handleYapeDniChange}
              editable={!isCardInputActive}
              maxLength={8}
            />
            <TextInput
              ref={yapeConfirmationRef}
              style={styles.input}
              placeholder="Número de confirmación"
              keyboardType="number-pad"
              value={yapeConfirmation}
              onChangeText={setYapeConfirmation}
              editable={!isCardInputActive}
              maxLength={6}
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={handlePay}>
            <Text style={styles.buttonText}>Pagar</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>{modalMessage}</Text>
            <Button title="Cerrar" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </SafeAreaView>

    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 40,
    backgroundColor: '#fff',
  },
  headerpago: {
    backgroundColor: '#4CAF50',
    padding: 16,
    alignItems: 'center',
    marginTop: 35,
  },
  headerTextpago: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 8,
    marginTop: 20,
    marginLeft: 15,
  },
  cardImagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginBottom: 20,
    marginTop: 20,
  },
  cardImage: {
    width: 50,
    height: 30,
    resizeMode: 'contain',
    marginRight: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 15,
  },
  yapeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20, 
    marginBottom: 20, 
    marginLeft: 15,
  },
  yapeText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
  yapeImage: {
    width: 50,
    height: 30,
    resizeMode: 'contain',
  },
  cardContainer: {
    marginTop: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  inlineInputs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  smallInput: {
    width: '45%',
  },
  cvv: {
    marginLeft: -9,
  },
  button: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 30,
    marginLeft: 100,
    marginRight: 100,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  barraSuperior: {
    height: 60,
    backgroundColor: '#34A853',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  botonRetroceso: {
    marginRight: 30,
  },
  textoBarra: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center'
  },
  modalText: {
    fontSize: 16,
    marginBottom: 15,
    textAlign: 'center'
  },
  modalButton: {
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
  }
});

export default PaymentScreen;