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
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function Login(props) {
  const [email, setEmail] = React.useState("Email");
  const [password, setPassword] = React.useState("Password");
  return (
    <View style={styles.container}>
      <Text style={styles.head}>Login</Text>
      <View>
        <TextInput style={styles.input} value={email} />
        <TextInput style={styles.input} value={password} />
        <TouchableOpacity>
          <Text style={styles.button}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate("Signup")}>
          <Text style={styles.button}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
