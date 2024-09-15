import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PlanDetailsScreen from './app/(tabs)/DetallesPlan/PlanDetailsScreen'; // Asegúrate de importar correctamente tus pantallas
import PaymentScreen from './app/(tabs)/DetallesPlan/PaymentScreen';
import Login from './app/(tabs)/Login/Login'
import Menu from './app/(tabs)/Menu/Menu'
import MiCuenta from './app/(tabs)/MyAccount/MiCuenta'
import Cupones from './app/(tabs)/Cupones/Cupones'
import VerPlanes from './app/(tabs)/Planes/VerPlanes'
import Menu2 from './app/(tabs)/Menu/Menu2'

import MiPerfil from './app/(tabs)/MyProfile/MiPerfil'
import Contrasena from './app/(tabs)/Password/Contrasena'
import MiPedido from './app/(tabs)/Pedido/MiPedido'
import MiPlan from './app/(tabs)/Planes/MiPlan'
import MisPuntos from './app/(tabs)/Puntos/MisPuntos'
import Register_I from './app/(tabs)/Register/Register_I'
import Register_II from './app/(tabs)/Register/Register_II'
import Cupon from './app/(tabs)/DetalleCupon/PlanDetailsCupon'


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
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
          name="Menu"
          component={Menu}
          
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
          name="Menu2"
          component={Menu2}
          
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
          name="verpla"
          component={PlanDetailsScreen}
          
        />
        <Stack.Screen
          name="vercup"
          component={Cupon}
          
        />
        <Stack.Screen
          name="Payment"
          component={PaymentScreen}
          
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
