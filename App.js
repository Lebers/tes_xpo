//App.js
import React from 'react';
import { Button } from 'react-native-elements';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import AccessScreen from './screens/AccessScreen'
import ReportesScreen from './screens/ReportesScreen'
import ReportDetailScreen from './screens/ReportDetailScreen'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainTabNavigator() {
  const navigation = useNavigation();
  const Stack = createStackNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({ 
        tabBarIcon: ({ color, size }) => {
          let iconName;
          switch (route.name) {
            case 'Inicio':
              iconName = 'home';
              break;
            case 'Accesos':
                iconName = 'access-point';
                break;
            case 'Reportes':
              iconName = 'book';
              break;
            case 'Cafeteria':
              iconName = 'coffee';
              break;
            case 'Más':
              iconName = 'dots-horizontal';
              break;
            default:
              iconName = 'circle';
              break;
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        headerStyle: {
          backgroundColor: '#0E2798', // Establece el color de fondo de la barra superior
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        tabBarActiveTintColor: '#fff', // Color para la pestaña activa
        tabBarInactiveTintColor: 'gray', // Color para las pestañas inactivas
        tabBarStyle: [
          {
            display: 'flex',
            backgroundColor: '#0E2798', // Color de fondo de la barra de pestañas
          },
          null,
        ],
        headerRight: () => (
          <Icon
            name="bell-badge"
            size={30}
            color="#FFD700"
            onPress={() => navigation.navigate('NotificationsScreen')}
          />
        ),
      })}
      
    >
      <Tab.Screen name="Inicio" component={HomeScreen} />
      <Tab.Screen name="Accesos" component={AccessScreen} />
      <Tab.Screen name="Reportes" component={ReportesScreen} />
      <Tab.Screen name="Cafeteria" component={HomeScreen} />
      <Tab.Screen name="Más" component={HomeScreen} />
    </Tab.Navigator>
  );
}

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={MainTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen
        name="NotificationsScreen"
        
        component={NotificationsScreen}
        options={{
          headerShown: true,
          title: 'Mis Notificaciones',
          headerRight: () => (
            <Icon
              name="trash-can-outline"
              size={30}
              color="#FFD700"
              style={{ marginRight: 15 }}
              onPress={() => alert('Mostrar notificaciones')}
            />
          )
        }}
      />
      <Stack.Screen name="ReportDetail" component={ReportDetailScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}