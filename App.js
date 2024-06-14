import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView,
} from "react-native";


import store from "./components/redux/store";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import productWrapper from "./components/productWrapper";
import UserList from "./components/UserList";

const Stack = createNativeStackNavigator();

export default function App() {
  

  return (
   <NavigationContainer>

    <Stack.Navigator>
      <Stack.Screen name='Home' component={productWrapper}/>
      <Stack.Screen name='User' component={UserList}/>
    </Stack.Navigator>
   </NavigationContainer>
    
  );
}


