// Imports
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { vw } from "react-native-expo-viewport-units";

// Screens
import Main from "./src/components/Main";
import DHScreen from "./src/components/DH-Screen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={"Home"}
        screenOptions={{
          headerStyle: {
            backgroundColor: "#E10600",
          },
          headerTitleStyle: {
            fontWeight: "900",
            color: "white",
            fontSize: vw(7),
            alingSelf: "center",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Main}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="Seg"
          options={{ title: "Segunda B" }}
          component={DHScreen}
          initialParams={{
            link: "https://google.com",
            video: "https://mega.nz/folder/8GRiATRS#tMQ9wDgq4RCQqRc2aTlLhw",
          }}
        />
        <Stack.Screen
          name="Seg2"
          options={{ title: "Segunda B" }}
          component={DHScreen}
        />
        <Stack.Screen
          name="DH"
          options={{ title: "Division de Honor" }}
          component={DHScreen}
        />
        <Stack.Screen
          name="Fem"
          options={{ title: "Femenino" }}
          component={DHScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
