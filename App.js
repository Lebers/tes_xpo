import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';
import ProfileScreen from './ProfileScreen';
import NotificationsScreen from './NotificationsScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route, navigation }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Inicio') {
              iconName = 'home';
            } else if (route.name === 'Notificaciones') {
              iconName = 'notifications';
            } else if (route.name === 'Cafeteria') {
              iconName = 'local-cafe';
            } else if (route.name === 'Configuracion') {
              iconName = 'settings';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
          headerRight: () => (
            <Icon
              name="notifications"
              size={30}
              color="#FFD700"
              onPress={() => navigation.navigate('Notificaciones')}
            />
          )
        })}
      >
        <Tab.Screen name="Inicio" component={HomeScreen} />
        <Tab.Screen name="Notificaciones" component={NotificationsScreen} />
        <Tab.Screen name="Cafeteria" component={ProfileScreen} />
        <Tab.Screen name="Configuracion" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}