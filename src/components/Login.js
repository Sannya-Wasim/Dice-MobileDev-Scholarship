import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { LoginStyles as styles } from "./Styles";
import React from "react";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login(props) {
  const [email, setEmail] = useState("Email");
  const [password, setPassword] = useState("Password");
  const [isUserLoggedIn, setIsUserLoggedIn] = useState("false");

  // Storing data
  const storeData = async () => {
    try {
      await AsyncStorage.setItem("isUserLoggedIn", "true");
      console.log("data is saved");
      getData();
    } catch (error) {
      // saving error
      console.log(error);
    }
  };

  // getting data
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("isUserLoggedIn");
      if (value !== null) {
        setIsUserLoggedIn(value);
        props.navigation.navigate("Student");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    // <View style={styles.container}>
    //   <Text style={styles.head}>Login</Text>
    //   <View>
    //     <TextInput style={styles.input} value={credentials.email} />
    //     <TextInput style={styles.input} value={credentials.password} />
    //     <TouchableOpacity>
    //       <Text style={styles.button}>Login</Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity onPress={() => props.navigation.navigate("Signup")}>
    //       <Text style={styles.button}>Sign Up</Text>
    //     </TouchableOpacity>
    //   </View>
    // </View>

    // For asyncStorage
    <View style={styles.container}>
      <Text style={styles.head}>Login</Text>
      <View>
        <TouchableOpacity onPress={() => storeData()}>
          <Text style={styles.button}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate("Signup")}>
          <Text style={styles.button}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
