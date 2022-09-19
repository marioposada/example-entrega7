import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import React from "react";

const HomeScreen = ({ navigation }) => (
  <View>
    <Text style={styles.text}>Ejemplo de Switch entre pantallas</Text>
    <Button
      styles={styles.boton}
      onPress={() => navigation.navigate("Image")}
      title="Go to Components Demo"
    />
      <Button
      styles={styles.boton}
      onPress={() => navigation.navigate("Counter")}
      title="Go to Counter Demo"
    />
     <Button
      styles={styles.boton}
      onPress={() => navigation.navigate("Color")}
      title="Go to Color  Demo"
    />
   
       <Button
      styles={styles.boton}
      onPress={() => navigation.navigate("Text")}
      title="Go to Text  Demo"
    />
  </View>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
