// CafeteriaScreen.js
import React from 'react';
import { Layout, Text, Card, List } from '@ui-kitten/components';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const data = [
  {
    id: '1',
    title: 'Café Latte',
    description: 'Café con leche caliente hecho con espresso y una capa de espuma de leche',
    price: '$3.50',
    date: '2024-04-08',
  },
  {
    id: '2',
    title: 'Té Verde Matcha',
    description: 'Té verde en polvo mezclado con agua caliente y servido con leche opcional',
    price: '$4.00',
    date: '2024-04-07',
  },
  {
    id: '3',
    title: 'Croissant de Chocolate',
    description: 'Croissant horneado relleno de chocolate',
    price: '$2.50',
    date: '2024-04-07',
  },
  // Agrega más consumos según sea necesario
];

const CafeteriaScreen = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity >
      <Card style={{ margin: 10 }} onPress={() => navigation.navigate('DetalleConsumoScreen', { consumo: item })}>
        <Text category='h6'>{item.title}</Text>
        <Text>{item.description}</Text>
        <Text>{item.date}</Text>
      </Card>
    </TouchableOpacity>
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

export default CafeteriaScreen;
