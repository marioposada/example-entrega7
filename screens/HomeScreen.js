import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import React from "react";

const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.text}>Ejemplo de Switch entre pantallas</Text>
    <Button onPress={() => navigation.navigate("Counter")} title="Contador" />
    <Button
      styles={styles.boton}
      onPress={() => navigation.navigate("Text")}
      title="Password"
    />
  </View>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    margin: 10,
    backgroundColor: "green",
    padding: 10,
  },
  container: {
    alignItems: "center",
  },
});

export default HomeScreen;
