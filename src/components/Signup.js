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

export default function Login() {
  const [name, setName] = React.useState("Full Name");
  const [email, setEmail] = React.useState("Email");
  const [phone, setPhone] = React.useState("Phone");
  const [password, setPassword] = React.useState("Set Password");

  return (
    <View style={styles.container}>
      <Text style={styles.head}>Sign Up</Text>
      <View>
        <TextInput style={styles.input} placeholder={name} />
        <TextInput style={styles.input} placeholder={email} />
        <TextInput style={styles.input} placeholder={phone} />
        <TextInput style={styles.input} placeholder={password} />
        <TouchableOpacity>
          <Text style={styles.button}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
