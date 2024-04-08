// BlankScreen.js
import React from 'react';
import { View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BlankScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Regresar" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default BlankScreen;
