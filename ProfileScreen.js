import React from 'react';
import { Layout, Text, Button } from '@ui-kitten/components';

 

const ProfileScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category='h1'>Bienvenido</Text>
    <Button onPress={() => alert('Hello!')}>Saludar</Button>
  </Layout>
);

export default ProfileScreen;