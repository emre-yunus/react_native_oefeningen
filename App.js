import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';
import {HomeScreen} from "./screens/HomeScreen";

export default function App() {
  return (
    <HomeScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d07979',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
