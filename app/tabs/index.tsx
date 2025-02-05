
import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const Tabs = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tabs</Text>
      <Link href="/tabs/signout">
        <Button title="Sign Out" />
      </Link>
      <Link href="/tabs/database">
        <Button title="Datos de la Base de Datos" />
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default Tabs;
