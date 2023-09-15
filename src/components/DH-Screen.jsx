import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Linking,
  Image,
} from "react-native";
import { useFonts } from "expo-font";
import { vw } from "react-native-expo-viewport-units";

const DHScreen = ({ route }) => {
  // Redirect
  const redirect = (url) => {
    Linking.canOpenURL(url).then((supported) => {
      supported && Linking.openURL(url);
    });
  };
  // Font
  const [fontsLoaded] = useFonts({
    Oswald: require("../../assets/fonts/Oswald/static/Oswald-Bold.ttf"),
  });
  // View
  return (
    <View
      style={{
        alignItems: "center",
        backgroundColor: "#333",
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
        onPress={() => {
          redirect(route.params.Fotos)
        }}
        style={styles.button}
      >
        <Text style={styles.text}>Fotos</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          redirect("https://mega.nz/#P!AgCRJDSFvpOUXmgXjPk6zjtUsOEDDoFsb7yI6vi-GSdgybauXCVPhWpei6-s5o-rsdlDliBGxqZa6jhaM66SOVwNiaSQlJzAtHbOiMuZAcs4AJzW2gUyBw");
        }}
      >
        <Text style={styles.text}>Videos</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "50%",
    backgroundColor: "#E10600",
    height: "9%",
    borderRadius: 15,
    marginBottom: "15%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: vw(8),
    textAlign: "center",
    verticalAlign: "middle",
    fontFamily: "Oswald",
  },
});

export default DHScreen;
