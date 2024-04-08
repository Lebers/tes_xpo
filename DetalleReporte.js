//DetalleReporte.js
import React from 'react';
import { Layout, Text } from '@ui-kitten/components';
import { useRoute } from '@react-navigation/native';

const DetalleReporteScreen = () => {
  const route = useRoute();
  const { reporte } = route.params;

  return (
    <Layout style={{ flex: 1, padding: 20 }}>
      <Text category='h1' style={{ marginBottom: 10 }}>{reporte.title}</Text>
      <Text category='h6' style={{ marginBottom: 5 }}>Descripción:</Text>
      <Text>{reporte.description}</Text>
    </Layout>
  );
};

export default DetalleReporteScreen;
