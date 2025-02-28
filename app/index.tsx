import { Text, View, Button, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";

import AnimatedCounter from "./AnimatedCounter";
export default function Index() {
  const [text, setText] = useState(0);
  const [start, setStart] = useState("");
  const [last, setLast] = useState("");
  const randomint = () => {
    if (start && last && Number(start) >= Number(last)) {
      alert("Enter valid limit");
      setStart("");
      setLast("");
      return;
    }
    const min = Number(start);
    const max = Number(last);
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    setText(randomNumber);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{
        fontSize: 30,
        paddingBottom: 70,
        fontFamily: 'Cochin',
      }}>
        Random Number Generator
</Text>
      <View style={{ flex: 0, flexDirection: "column" }}>
        <Text style={styles.textstyle}>Start:</Text>
        <TextInput
          style={styles.inputtext}
          keyboardType="numeric"
          value={start}
          onChangeText={(text) => setStart(text.replace(/[^0-9]/g, ""))}
          />
          <Text style={styles.textstyle}>End:</Text>
        <TextInput
          style={styles.inputtext}
          keyboardType="numeric" 
          value={last}
          onChangeText={(text) => setLast(text.replace(/[^0-9]/g, ""))} 
        />
      </View>
      <AnimatedCounter end={text} />
      <View
        style={{
          paddingHorizontal: 100,
          paddingVertical: 10,
          margin: 50,

          backgroundColor: "blue",
        }}
      >
        <Button
          onPress={randomint}
          title="Tap"
          color="white"
          accessibilityLabel="tap to generate random numbers"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputtext: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 18,
    margin: 10,
    width: 150,
  },
  textstyle:{
fontSize: 30,
margin: 10,
  },
});
