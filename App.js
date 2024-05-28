import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import * as React from 'react';
import { MD3LightTheme, MD3DarkTheme, PaperProvider, Button } from 'react-native-paper';
import { useMaterial3Theme } from '@pchmn/expo-material3-theme';


export default function Main() {
  const colorScheme = useColorScheme();
  const { theme } = useMaterial3Theme();

  const paperTheme =
    colorScheme === 'dark'
      ? { ...MD3DarkTheme, colors: theme.dark }
      : { ...MD3LightTheme, colors: theme.light };

  return (
    <PaperProvider theme={paperTheme}>
      <App />
    </PaperProvider>
  );
}

function ButtonExample() {
  return (
    <Button raised theme={{ roundness: 3 }}>
      Press me
    </Button>,
    <Button icon="camera">
    Press me
  </Button>
  );
}

function App() {
  return (
    
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <ButtonExample />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
