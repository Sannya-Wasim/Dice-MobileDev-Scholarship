import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";
export const logo = require("../images/student.png");
export const default_image = require("../images/music.png");

export default function Counter() {
  const [counter, setCounter] = useState(0);

  //   const increaseCounter = () => {
  //     setCounter(counter + 1);
  //   };

  useEffect(() => {
    alert("Counter Starting...");
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setCounter(counter + 1);
    }, 3000);
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{counter}</Text>
      <Text style={styles.text}>Increase Count</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 60,
    textAlign: "center",
  },
});
