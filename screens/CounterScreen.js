import { ActivityIndicator, Button, StyleSheet, Text, View } from "react-native";

import {useFonts} from 'expo-font'
import { useReducer } from "react";

const reducer = (state, action) => {
 
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.payload };
    case "decrement":
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const [loaded]= useFonts({
    'Lato-Italic': require('../assets/fonts/Lato-Italic.ttf')
  });

  if (loaded) {
    return (
      <View>
        <ActivityIndicator 
        size='large'
        color='#565656'
        />
      </View>
    )
  }

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({ type: "increment", payload: 1 });
        }}
      ></Button>
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({ type: "decrement", payload: 1 });
        }}
      ></Button>
      <Text style={styles.text1}>Current Count: {state.count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text1: {
    fontSize: 25,
    
  }
});

export default CounterScreen;