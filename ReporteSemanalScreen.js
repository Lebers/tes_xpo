import React from 'react';
import { Layout, Text, Button, Card, List } from '@ui-kitten/components';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const currentDate = new Date(); 
const data = [
  {
    id: '1',
    title: 'Reporte de conducta semana ' + getWeekNumber(currentDate), // Obtener el número de la semana actual
    description: 'Descripción del reporte de conducta de la semana ' + getWeekNumber(currentDate), // Puedes poner la descripción que desees
  },
  {
    id: '2',
    title: 'Reporte de conducta semana ' + (getWeekNumber(currentDate) - 1), // Semana anterior
    description: 'Descripción del reporte de conducta de la semana ' + (getWeekNumber(currentDate) - 1),
  },
  {
    id: '3',
    title: 'Reporte de conducta semana ' + (getWeekNumber(currentDate) - 2), // Dos semanas atrás
    description: 'Descripción del reporte de conducta de la semana ' + (getWeekNumber(currentDate) - 2),
  },
  // Agrega más reportes según sea necesario
  {
    id: '4',
    title: 'Reporte de conducta semana ' + (getWeekNumber(currentDate) - 3), // Tres semanas atrás
    description: 'Descripción del reporte de conducta de la semana ' + (getWeekNumber(currentDate) - 3),
  },
  {
    id: '5',
    title: 'Reporte de conducta semana ' + (getWeekNumber(currentDate) - 4), // Cuatro semanas atrás
    description: 'Descripción del reporte de conducta de la semana ' + (getWeekNumber(currentDate) - 4),
  },
  {
    id: '6',
    title: 'Reporte de conducta semana ' + (getWeekNumber(currentDate) - 5), // Cuatro semanas atrás
    description: 'Descripción del reporte de conducta de la semana ' + (getWeekNumber(currentDate) - 4),
  },
  {
    id: '7',
    title: 'Reporte de conducta semana ' + (getWeekNumber(currentDate) - 6), // Cuatro semanas atrás
    description: 'Descripción del reporte de conducta de la semana ' + (getWeekNumber(currentDate) - 4),
  },
];
function getWeekNumber(date) {
  const today = new Date(date);
  const firstDayOfYear = new Date(today.getFullYear(), 0, 1);
  const pastDaysOfYear = (today - firstDayOfYear) / 86400000;
  return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
}
const ReporteSemanalScreen = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
       <Card onPress={() => navigation.navigate('DetalleReporteScreen', { reporte: item })}>
        <Text category='h6'>{item.title}</Text>
        <Text>{item.description}</Text>
      </Card>
  
  );

  return (
    <Layout style={{ flex: 1 }}>
      <List
        data={data}
        renderItem={renderItem}
      />
    </Layout>
  );
};

export default ReporteSemanalScreen;
