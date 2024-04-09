//ReportesScreen.js
import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';

// Datos de ejemplo para la lista de resúmenes de reportes
const reportSummaries = [
    { 
        id: '3',
        title: 'Reporte Semanal',
        date: '02/04/2023'
      },{ 
    id: '2',
    title: 'Reporte Semanal',
    date: '02/04/2023'
  },{ 
    id: '1',
    title: 'Reporte Semanal',
    date: '02/04/2023'
  },
];

const ReportesScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('ReportDetail', { reportId: item.id })}>
      <Card>
        <Card.Title>{item.title}</Card.Title>
        <Text>Fecha: {item.date}</Text>
      </Card>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={reportSummaries}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  // Estilos adicionales si es necesario
});

export default ReportesScreen;