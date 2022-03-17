import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';
import {HomeScreen} from "./screens/HomeScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NAV_HOME} from "./navigation_constants";

function ProvidedApp() {
  const Stack = createNativeStackNavigator();

  return (
      <>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name={NAV_HOME} component={HomeScreen} />
        </Stack.Navigator>
      </>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <ProvidedApp/>
    </NavigationContainer>
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
