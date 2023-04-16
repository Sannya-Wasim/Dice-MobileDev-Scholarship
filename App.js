import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Student from "./src/components/Student";
import FB_Button from "./src/components/FB_Button";
import Login from "./src/components/Login";
import StudentClass from "./src/components/StudentClass";
import Signup from "./src/components/Signup";
import Counter from "./src/components/Counter";
import StudentList from "./src/components/StudentList";
import StudentDetail from "./src/components/StudentDetail";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        {/* <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} /> */}
        <Stack.Navigator>
          <Stack.Screen name="StudentList" component={StudentList} />
          <Stack.Screen name="StudentDetail" component={StudentDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>

    /* <Student
        studentName={"Sannya Wasim"}
        university={"NED University"}
        DOB={"04/08/2001"}
        image={require("./src/images/student.png")}
      /> */
    /* <FB_Button /> */
    /* <Signup /> */
    /* <Login /> */
    /* <StudentClass /> */
    /* <Counter /> */
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
});
