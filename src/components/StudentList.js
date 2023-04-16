import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StudentDetail from "./StudentDetail.js";

export default function StudentList(props) {
  // id={1}   ID=prop.id std.ID
  return (
    <View style={styles.container}>
      {/* Student 01 */}
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate("StudentDetail", {
            id: "1",
          })
        }
        style={styles.card}
      >
        <Text style={styles.text}>Sannya Wasim</Text>
      </TouchableOpacity>
      {/* Student 02 */}
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate("StudentDetail", {
            id: "2",
          })
        }
        style={styles.card}
      >
        <Text style={styles.text}>Osama Mirza</Text>
      </TouchableOpacity>
      {/* Student 03 */}
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate("StudentDetail", {
            id: "3",
          })
        }
        style={styles.card}
      >
        <Text style={styles.text}>Muhammad Alam</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#0B2447",
    width: 300,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    borderRadius: 10,
    margin: 10,
  },
  text: {
    fontSize: 20,
    margin: 5,
    color: "white",
  },
});
