import { StyleSheet, Text, View } from "react-native";

import React from "react";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle2}>Box Screen</Text>
      <View style={styles.viewSecond}>
      <Text style={styles.textStyle1}>Box Screen</Text>
      <Text style={styles.textStyle}>Box Screen</Text>
      </View>
      <Text style={styles.textStyle1}>Box Screen</Text>
      
      
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 1,
    borderColor: "black",
    alignItems: 'center'
   
  },
  textStyle: {
    borderWidth: 1,
    borderColor: "red",
    margin: 2,
  },
  textStyle1: {
    borderWidth: 1,
    borderColor: "red",
    margin: 2,
    alignSelf: 'center'
    
  },
  viewSecond: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    width: '100%'
  },
  textStyle2: {
    borderWidth: 1,
    borderColor: "red",
    margin: 2,
    width:  '100%',
    
    
  }
  
});

export default BoxScreen;
