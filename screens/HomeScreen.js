import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, RefreshControl, Animated } from 'react-native';
import { Card } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';

export default function HomeScreen() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  // Nuevo estado para controlar la visibilidad del encabezado
  const [headerVisible, setHeaderVisible] = useState(true);

  const navigation = useNavigation();

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://vigotskyqa.ajolotecode.com/cards');
      const jsonData = await response.json();
      setData(jsonData.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      setLoading(true);
      fetchData();
    }, [])
  );

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetchData().then(() => setRefreshing(false));
  }, []);

  const scrollY = new Animated.Value(0);
  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    {
      listener: (event) => {
        const currentScrollPosition = event.nativeEvent.contentOffset.y;
        if (currentScrollPosition > 150 && headerVisible) {
          // Ocultar el encabezado
          setHeaderVisible(false);
          navigation.setOptions({ headerShown: false });
        } 
        
        if (currentScrollPosition  <= 20) {
          // Mostrar el encabezado
          setHeaderVisible(true);
          navigation.setOptions({ headerShown: true });
        }
      },
      useNativeDriver: false,
    }
  );

  const renderItem = ({ item }) => (
    <Card containerStyle={styles.card}>
      <View style={styles.cardContent}>
        {item.imageUrl ? <Card.Image source={{ uri: item.imageUrl }} /> : null}
        <Card.Title style={styles.cardTitle}>{item.title}</Card.Title>
        <Text style={styles.cardDescription}>{item.description}</Text>
        <Text style={styles.cardFooter}>{item.footer}</Text>
        <Text style={styles.dateText}>{item.date}</Text>
      </View>
    </Card>
  );

  return (
    <View style={{ flex: 1 }}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Animated.FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      )}
    </View>
  );
}


const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  card: {
    borderRadius: 10, // Las tarjetas suelen tener bordes redondeados
    marginBottom: 10, 
    backgroundColor: '#fff', // Asegúrate de tener un fondo para que la sombra se muestre
    shadowColor: "#000", // Color de la sombra
    shadowOffset: {
      width: 0,
      height: 2, // La altura de la sombra
    },
    shadowOpacity: 0.9, // La transparencia de la sombra
    shadowRadius: 3.84, // El radio del desenfoque de la sombra
    elevation: 5,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10, // Ajusta según necesidades
    marginBottom: 10, // Ajusta según necesidades
  },
  cardDescription: {
    margin: 10,
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 25, // Esto aumenta la altura de la línea para mejorar la legibilidad
  },
  cardFooter: {
    fontSize: 14,
    color: 'gray',
    textAlign: 'center',
    marginBottom: 10,
  },
  dateText: { 
    textAlign:'right',
    bottom: 10, // Espacio desde el fondo de la tarjeta
    right: 10, // Espacio desde el lado derecho de la tarjeta
    fontSize: 12, // Un tamaño de fuente más pequeño para la fecha
    color: 'grey' // Un color que no sea demasiado llamativo
  },
});