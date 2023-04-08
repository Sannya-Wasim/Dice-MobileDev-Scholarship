import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useState, useEffect } from "react";
export const logo = require("../images/student.png");
export const default_image = require("../images/music.png");

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  //   const increaseCounter = () => {
  //     setCounter(counter + 1);
  //   };

  // useEffect(() => {
  //   alert("Counter Starting...");
  // }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setCounter(counter + 1);
  //   }, 3000);
  // });

  const stopLoading = () => {
    if (isLoading == true) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  };

  return (
    <View>
      {/* <Text style={styles.text}>{counter}</Text>
      <Text style={styles.text}>Increase Count</Text> */}
      {isLoading == true ? (
        <ActivityIndicator size="large" color="white"></ActivityIndicator>
      ) : null}
      <TouchableOpacity onPress={() => stopLoading()}>
        <Text style={styles.text}>
          {isLoading == true ? "Stop" : "Start"} Loading!
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
});
