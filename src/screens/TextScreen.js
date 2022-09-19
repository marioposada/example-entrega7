import React , {useState} from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState('');
  
  return (
    <View>
      <Text style={styles.text}>Enter Password:</Text>
      <TextInput
        autoCorrect={false}
        autoCapitalize="none"
        style={styles.input}
        value={name}
        onChangeText={ newValue => setName(newValue)}
      />
      <Text style={styles.text2}> Your name is: {name}</Text>
      {name.length < 5 ? <Text>Correct</Text> : null }
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "#181818",
    borderWidth: 1,
    height: 35,
  },
  text: {
    marginTop: 20,
    fontSize: 25,
    alignSelf: "center",
  },
  text2: {
    marginTop: 20,
    fontSize: 25,
    alignSelf: "center",
  },
});

export default TextScreen;
