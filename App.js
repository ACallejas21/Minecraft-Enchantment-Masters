import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ArmorsScreen from "./src/screens/ArmorsScreen";
import HomeScreen from "./src/screens/HomeScreen";
import ShowDetails from "./src/screens/DetailsItemScreen";
import WeaponsScreen from "./src/screens/WeaponsScreen";
import AddItemScreen from "./src/screens/AddItemScreen";
import DeleteScreen from "./src/screens/DeleteScreen";
import {ObjectsContextProvider} from "./src/Context/objectsContex"
import * as SplashScreen from "expo-splash-screen"

import useDatabase from "./src/hooks/useDatabase"
import { Form } from "native-base";
// Crear nuestra navegación basada en stack (pilas)
const Stack = createStackNavigator();

export default function App() {

  const isLoadingComplete = useDatabase();


  return (
    <NavigationContainer>
      <ObjectsContextProvider>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="ShowDetails"
          component={ShowDetails}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Weapons"
          component={WeaponsScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Armors"
          component={ArmorsScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="AddItem"
          component={AddItemScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="DropItem"
          component={DeleteScreen}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
      </ObjectsContextProvider>
    </NavigationContainer>
    
  );
}