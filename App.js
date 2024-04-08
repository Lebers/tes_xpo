//app.js
import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';
import ProfileScreen from './ProfileScreen';
import NotificationsScreen from './NotificationsScreen';
import ReporteSemanalScreen from './ReporteSemanalScreen';
import DetalleReporte from './DetalleReporte';
import CafeteriaScreen from './CafeteriaScreen';
import DetalleConsumoScreen from './DetalleConsumoScreen'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


// Componente que contiene los Tabs
function MainTabNavigator() {
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Inicio') {
            iconName = 'home';
          } else if (route.name === 'Reportes') {
            iconName = 'human-child';
          } else if (route.name === 'Cafeteria') {
            iconName = 'coffee';
          } else if (route.name === 'Configuracion') {
            iconName = 'cog';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        headerRight: () => (
          <Icon
            name="bell-badge"
            size={30}
            color="#FFD700"
            onPress={() => navigation.navigate('NotificationsScreen')}
          />
        )
      })}
    >
      <Tab.Screen name="Inicio" component={HomeScreen} />
      <Tab.Screen name="Reportes" component={ReporteSemanalScreen} />
      <Tab.Screen name="Cafeteria" component={CafeteriaScreen} />
      <Tab.Screen name="Configuracion" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Main" component={MainTabNavigator} />
            <Stack.Screen name="NotificationsScreen" component={NotificationsScreen} options={{ headerShown: true, headerRight: () => (
                <Icon
                  name="trash-can-outline"
                  size={30}
                  color="#FFD700"
                  style={{ marginRight: 15 }}
                  onPress={() => alert('Mostrar notificaciones')} // Aquí puedes manejar la acción para mostrar las notificaciones
                />
              ) }} />
            <Stack.Screen name="DetalleReporteScreen" component={DetalleReporte}options={{ headerShown: true  }} /> 
            <Stack.Screen name="DetalleConsumoScreen" component={DetalleConsumoScreen}options={{ headerShown: true  }} /> 

          </Stack.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
}
