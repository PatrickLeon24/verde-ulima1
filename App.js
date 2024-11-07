import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import PlanDetailsScreen from './app/(tabs)/DetallesPlan/PlanDetailsScreen';
import PaymentScreen from './app/(tabs)/DetallesPlan/PaymentScreen';
import Login from './app/(tabs)/Login/Login'
import Menu from './app/(tabs)/Menu/Menu'
import MiCuenta from './app/(tabs)/MyAccount/MiCuenta'
import Cupones from './app/(tabs)/Cupones/Cupones'
import VerPlanes from './app/(tabs)/Planes/VerPlanes'
import MiPerfil from './app/(tabs)/MyProfile/MiPerfil'
import Contrasena from './app/(tabs)/Password/Contrasena'
import MiPedido from './app/(tabs)/Pedido/MiPedido'
import MiPlan from './app/(tabs)/Planes/MiPlan'
import MisPuntos from './app/(tabs)/Puntos/MisPuntos'
import Register_I from './app/(tabs)/Register/Register_I'
import Register_II from './app/(tabs)/Register/Register_II'
import Cupon from './app/(tabs)/DetalleCupon/PlanDetailsCupon'
import Recojos from './app/(tabs)/Administrador/Recojos';
import GenerarCodigo from './app/(tabs)/Administrador/GenerarCodigo';
import HistorialRecojos from './app/(tabs)/Administrador/HistorialRecojos';
import HistorialCodigos from './app/(tabs)/Administrador/HistorialCodigos';
import RecuperaContra from './app/(tabs)/RecuperacionContra/RecuperaContra';
import MisRecojos from './app/(tabs)/Recojos/MisRecojos';

const Stack = createStackNavigator();

const linking = {
  prefixes: ['localhost://']
};

const App = () => {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator initialRouteName="Login" screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen
          name="Register_I"
          component={Register_I}
          
        />
        <Stack.Screen
          name="Register_II"
          component={Register_II}
          
        />
        <Stack.Screen
          name="RecuperaContra"
          component={RecuperaContra}
          
        />
        <Stack.Screen
          name="Menu"
          component={Menu}
          
        />
        <Stack.Screen
          name="Recojos"
          component={Recojos}
        />
        <Stack.Screen
          name="GenerarCodigo"
          component={GenerarCodigo}
        />
        
        <Stack.Screen
          name="HistorialRecojos"
          component={HistorialRecojos}
        />

        <Stack.Screen
          name="HistorialCodigos"
          component={HistorialCodigos}
        />

        <Stack.Screen
          name="Cupones"
          component={Cupones}
          
        />
        <Stack.Screen
          name="VerPlanes"
          component={VerPlanes}
          
        />
        <Stack.Screen
          name="Micuenta"
          component={MiCuenta}
          
        />

        <Stack.Screen
          name="MiPerfil"
          component={MiPerfil}
          
        />
        <Stack.Screen
          name="Contrasena"
          component={Contrasena}
          
        />
        <Stack.Screen
          name="MiPedido"
          component={MiPedido}
          
        />
        <Stack.Screen
          name="MiPlan"
          component={MiPlan}
          
        />
        <Stack.Screen
          name="MisPuntos"
          component={MisPuntos}
          
        />

        <Stack.Screen
          name="VerPlan"
          component={PlanDetailsScreen}
          
        />
        <Stack.Screen
          name="VerCupon"
          component={Cupon}
          
        />
        <Stack.Screen
          name="Pago"
          component={PaymentScreen}
          
        />
         <Stack.Screen
          name="MisRecojos"
          component={MisRecojos}
          
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
