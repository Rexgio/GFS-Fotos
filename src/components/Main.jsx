import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { isLoaded, useFonts } from "expo-font";
import { vw } from "react-native-expo-viewport-units";

const Main = ({ navigation }) => {
  // Font
  const [fontsLoaded] = useFonts({
    Oswald: require("../../assets/fonts/Oswald/static/Oswald-Bold.ttf"),
  });
  // View

  if (isLoaded("Oswald")) {
    return (
      <View
        style={{
          backgroundColor: "#333",
          alignItems: "center",
          width: "100%",
          alignItems: "center",
          flex: 1,
          justifyContent: "center",
        }}
      >
        <Image
          source={require("../../assets/wallpaper.jpg")}
          style={{
            flex: 1,
            resizeMode: "stretch",
            position: "absolute",
            width: "100%",
            height: "100%",
            opacity: 0.7,
          }}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate("Seg", {
              Fotos: "https://mega.nz/folder/9L5hGayR#vbMROlG69H4ghYnlvMt5Lw",
            })
          }
        >
          <Text style={styles.text}>Segunda B</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate("DH", {
              Fotos: "https://mega.nz/folder/xHRjADxB#d3hUw7LwiHi6F6n4mvwlyA",
            })
          }
        >
          <Text style={styles.text}>División de honor</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Fem", {
              Fotos: "https://mega.nz/folder/xHRjADxB#d3hUw7LwiHi6F6n4mvwlyA",
            })
          }
          style={styles.button}
        >
          <Text style={styles.text}>Femenino</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  button: {
    width: "80%",
    backgroundColor: "#E10600",
    height: "10%",
    borderRadius: 15,
    marginBottom: "15%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: vw(7.5),
    fontWeight: "900",
    textAlign: "center",
    fontFamily: "Oswald",
  },
});

export default Main;
