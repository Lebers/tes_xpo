//ReportDetailScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button  } from 'react-native';
import { Card } from 'react-native-elements';

const ReportDetailScreen = ({ route }) => {
    // Datos simulados del detalle del reporte
    const reportDetails = {
      alumno: 'Nombre alumno',
      grado: '1°',
      grupo: 'A',
      asignaturas: [
        {
            nombre: 'Español',
            problemaAcademico: 'seguir trabajando en enfocar tu atención en las actividades diarias ya que por estar observando a tu alrededor pierdes el enfoque de las mismas, sigue trabajando en el trazo correcto de las letras, recuerda una letra por cuadro, Felicidades por tu compromiso con el taller.',
            problemaConductual: 'Evita comentarios innecesarios a tus compañeros que podrían causar conflictos, recuerda que las actividades en equipo son para disfrutar.',
            firma: 'Miss Metzli',
          },
          {
            nombre: 'Inglés',
            problemaAcademico: 'Eber trabaja tu trazo y limpieza en tus libretas. Felicidades por spelling bee vas muy bien.',
            problemaConductual: 'No platicar en clase mientras realizamos alguna actividad eso te retrasa en terminar la actividad en tiempo y forma.',
            firma: 'Miss Adriana',
          },
          {
            nombre: 'Tecnología',
            problemaAcademico: ' ',
            problemaConductual: ' ',
            firma: 'Profesor(a) de Tecnología',
          },
          {
            nombre: 'Música',
            problemaAcademico: ' ',
            problemaConductual: ' ',
            firma: 'Profesor(a) de Música',
          },
          {
            nombre: 'Educación Física',
            problemaAcademico: 'trabaja de buena manera y ayuda a sus compañeroa',
            problemaConductual: 'buena conduta',
            firma: 'profesor David',
          },
          {
            nombre: 'Francés',
            problemaAcademico: 'Sin pendientes. ¡Felicidades!',
            problemaConductual: 'Buena conducta..',
            firma: 'Prof. Carlos',
          },
      ],
    };
  
    return (
        <ScrollView style={styles.container}>
          <View style={styles.infoContainer}>
            <Text style={styles.info}>{reportDetails.alumno}</Text>
            <Text style={styles.info}>Grado: {reportDetails.grado}</Text>
            <Text style={styles.info}>Grupo: {reportDetails.grupo}</Text>
          </View>
          {reportDetails.asignaturas.map((asignatura, index) => (
            <Card key={index}>
              <Card.Title>{asignatura.nombre}</Card.Title>
              <Card.Divider />
              <View style={styles.cardContent}>
                <Text style={styles.subtitle}>Problema o situación académica:</Text>
                <Text style={styles.description}>{asignatura.problemaAcademico}</Text>
                <Text style={styles.subtitle}>Problema o situación conductual:</Text>
                <Text style={styles.description}>{asignatura.problemaConductual}</Text>
                <Text style={styles.signature}>{asignatura.firma}</Text>
              </View>
            </Card>
          ))}
          <View style={styles.buttonContainer}>
                <Button title="Firmar" onPress={() => alert('¡Firma realizada!')} />
            </View>
        </ScrollView>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
      infoContainer: {
        backgroundColor: '#f2f2f2',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      info: {
        fontWeight: 'bold',
      },
      cardContent: {
        marginVertical: 10,
      },
      subtitle: {
        fontWeight: 'bold',
        marginBottom: 5,
      },
      description: {
        marginBottom: 10,
      },
      signature: {
        marginTop: 10,
        fontStyle: 'italic',
        textAlign: 'right',
      },
      buttonContainer: {
        marginVertical: 50,
        paddingHorizontal: 50,
    },
    });
    
    export default ReportDetailScreen;