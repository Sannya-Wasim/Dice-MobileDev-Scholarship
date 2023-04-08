import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Component } from "react";
export const logo = require("../images/student.png");
export const default_image = require("../images/music.png");

export default class Student extends Component {
  // This will return when the app is opened but the components still havent been rendered]
  // componentDidMount() {
  //   alert("loading");
  // }
  constructor() {
    super();

    this.state = {
      image: default_image,
      studentName: "Empty",
      university: "Empty",
    };
  }

  ChangeCredentials() {
    this.setState({
      image: logo,
      studentName: "Sannya Wasim",
      university: "NED University",
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={this.state.image} />
        <Text style={styles.text}>Student Name : {this.state.studentName}</Text>
        <Text style={styles.text}>University : {this.state.university}</Text>
        <TouchableOpacity>
          <Text onPress={() => this.ChangeCredentials()} style={styles.button}>
            Change Credentials
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    margin: 5,
  },
  button: {
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "lightblue",
    color: "darkblue",
    fontSize: 20,
    margin: 10,
    padding: 5,
    width: 200,
    borderRadius: 10,
  },
});
