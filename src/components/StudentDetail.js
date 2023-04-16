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

export default function StudentDetail({ route }) {
  studentData = [
    {
      id: 1,
      name: "Sannya Wasim",
      roll: 84,
      program: "Software Engineering",
    },
    {
      id: 2,
      name: "Osama Mirza",
      roll: 51,
      program: "Textile Engineering",
    },
    {
      id: 3,
      name: "Muhammad Alam",
      roll: 67,
      program: "Computer Engineering",
    },
  ];

  const index = parseInt(route.params.id) - 1;
  //   console.log(route.params.id);
  //   console.log(route);
  //   console.log(route.params);
  //   console.log(route.params.text);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Student Details</Text>
      <View key={studentData[index]} style={styles.card}>
        <Text style={styles.text}>
          Student Name : {studentData[index].name}
        </Text>
        <Text style={styles.text}>
          Student Roll : {studentData[index].roll}
        </Text>
        <Text style={styles.text}>Program : {studentData[index].program}</Text>
      </View>
    </View>
    // <Text>Hey {index}</Text>
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
    width: 350,
    height: 200,
    justifyContent: "center",
    padding: 5,
    borderRadius: 10,
  },
  text: {
    fontSize: 17,
    margin: 5,
    color: "white",
    fontWeight: "600",
  },
  heading: {
    fontSize: 30,
    marginBottom: 30,
  },
});
