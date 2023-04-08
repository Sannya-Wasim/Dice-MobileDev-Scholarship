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
  const [email, setEmail] = React.useState("Email");
  const [password, setPassword] = React.useState("Password");
  return (
    <View>
      <Text style={styles.head}>Login</Text>
      <View>
        <TextInput style={styles.input} value={email} />
        <TextInput style={styles.input} value={password} />
        <TouchableOpacity>
          <Text style={styles.button}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
