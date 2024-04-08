// DetalleConsumoScreen.js
import React from 'react';
import { Layout, Text } from '@ui-kitten/components';
import { useRoute } from '@react-navigation/native';

const DetalleConsumoScreen = () => {
  const route = useRoute();
  const { consumo } = route.params;

  return (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text category='h1'>Detalle del Consumo</Text>
      <Text category='h6'>Título: {consumo.title}</Text>
      <Text>{consumo.description}</Text>
    </Layout>
  );
};

export default DetalleConsumoScreen;
