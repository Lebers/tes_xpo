import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native';
import { Card } from 'react-native-elements';

const notifications = [
    { 
      title: '¡AVISO IMPORTANTE!', 
      imageUrl: '', 
      description: 'EL VIERNES 5 DE ABRIL, ES EL ÚLTIMO DÍA DE PAGO DE COLEGIATURA Y RENTA DE IPAD, SIN GENERAR RECARGOS.', 
      footer: 'DEPARTAMENTO DE CONTABILIDAD',
      date: '02/04/2023'
    },
    { 
      title: '¡RECORDATORIO DE EVENTO!', 
    
      description: 'NO OLVIDES LA REUNIÓN GENERAL ESTE LUNES 8 DE ABRIL A LAS 10:00 AM EN EL AUDITORIO.', 
      footer: 'DEPARTAMENTO DE RECURSOS HUMANOS',
      date: '02/04/2023'
    },
    { 
      title: '¡NUEVO SERVICIO!', 
      imageUrl: 'https://img.freepik.com/vector-gratis/coleccion-disfraces-halloween-dibujados-mano_23-2149111458.jpg?w=740&t=st=1712643290~exp=1712643890~hmac=1070aa10de92da3845e5734a9644a386ae1d53bce3847b900ff5c1a07a2f53c5', 
      description: 'YA PUEDES DESCARGAR TU FACTURA ELECTRÓNICA A TRAVÉS DE NUESTRA PLATAFORMA EN LÍNEA.', 
      footer: 'SERVICIO AL CLIENTE',
      date: '02/04/2023'
    },
    { 
      title: '¡CAMBIO DE HORARIO!', 
      imageUrl: 'https://img.freepik.com/vector-premium/ejemplo-lindo-historieta-juego-zombi-frankenstein-concepto-icono-juegos-halloween_138676-1890.jpg?w=740', 
      description: 'A PARTIR DEL 15 DE ABRIL, EL HORARIO DE ATENCIÓN AL PÚBLICO SERÁ DE 8:00 AM A 4:00 PM.', 
      footer: 'ADMINISTRACIÓN',
      date: '02/04/2023'
    },
    { 
      title: '¡MANTENIMIENTO PROGRAMADO!', 
      imageUrl: 'https://img.freepik.com/fotos-premium/foto-3d-dibujos-animados-esqueleto-personaje-generativo-ai_742418-5312.jpg?w=740', 
      description: 'HABRÁ UNA PAUSA EN EL SISTEMA DE MATRÍCULAS ESTE SÁBADO 13 DE ABRIL POR MANTENIMIENTO.', 
      footer: 'DEPARTAMENTO TÉCNICO',
      date: '02/04/2023'
    },
    { 
      title: '¡INSCRIPCIONES ABIERTAS!', 
      imageUrl: 'https://as1.ftcdn.net/v2/jpg/07/34/11/10/1000_F_734111073_5IiEDCU6lUoEkfMapuOpEM9XN61GjQOi.jpg', 
      description: 'LOS CURSOS DE VERANO YA ESTÁN DISPONIBLES PARA INSCRIPCIÓN. ¡ASEGURA TU LUGAR!', 
      footer: 'COORDINACIÓN ACADÉMICA',
      date: '02/04/2023'
    },
    { 
      title: '¡OFERTA LABORAL!', 
      imageUrl: 'https://img.freepik.com/vector-gratis/gran-inauguracion_23-2148157034.jpg?w=826&t=st=1712643412~exp=1712644012~hmac=2a1357eaa71de83cde2d4ce835ab004a6e80be35323a5fb29e72d58202af4ff1', 
      description: 'BUSCAMOS DESARROLLADORES DE SOFTWARE. ENVÍA TU CV Y PORTAFOLIO A TRABAJA@NUESTRAEMPRESA.COM.', 
      footer: 'DEPARTAMENTO DE DESARROLLO',
      date: '02/04/2023'
    },
    { 
      title: '¡ACTUALIZACIÓN DE POLÍTICAS!', 
      imageUrl: 'https://img.freepik.com/vector-gratis/letrero-cerrado-rojo-colgado-realista_23-2148887278.jpg?w=740', 
      description: 'CONSULTA LAS NUEVAS POLÍTICAS DE PRIVACIDAD QUE ENTRAN EN VIGENCIA EL PRÓXIMO MES.', 
      footer: 'DEPARTAMENTO LEGAL',
      date: '02/04/2023'
    }
  ];

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState(null);

  const handleCardPress = (notification) => {
    setSelectedNotification(notification);
    setModalVisible(true);
  };

  return (
    <View style={styles.screenContainer}>
      <ScrollView>
        {notifications.map((notification, index) => (
          <Card key={index} containerStyle={styles.card}>
            <View style={styles.cardContent}>
              {notification.imageUrl ? (
                <Card.Image source={{ uri: notification.imageUrl }} />
              ) : null}
              <Card.Title style={styles.cardTitle}>{notification.title}</Card.Title>
              <Text style={styles.cardDescription}>{notification.description}</Text>
              <Text style={styles.cardFooter}>{notification.footer}</Text>
            </View>
            <Text style={styles.dateText}>{notification.date}</Text>
          </Card>
        ))}
      </ScrollView>
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
