import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import Student from "./src/components/Student";
import FB_Button from "./src/components/FB_Button";
import Login from "./src/components/Login";
import StudentClass from "./src/components/StudentClass";
import Signup from "./src/components/Signup";
import Counter from "./src/components/Counter";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Student
        studentName={"Sannya Wasim"}
        university={"NED University"}
        DOB={"04/08/2001"}
        image={require("./src/images/student.png")}
      /> */}
      {/* <FB_Button /> */}
      {/* <Signup /> */}
      {/* <Login /> */}
      {/* <StudentClass /> */}
      <Counter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
});
