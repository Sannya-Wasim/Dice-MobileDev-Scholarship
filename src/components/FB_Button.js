import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function FB_Button() {
  return (
    <TouchableOpacity onPress={() => alert("Facebook Login button pressed")}>
      <View style={styles.container}>
        <Image source={require("../images/facebook.png")}></Image>
        <Text style={styles.container_text}>Login with facebook</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection : "row",
    backgroundColor: "#4267B2",
    margin : 40,
    padding : 15,
    borderRadius : 15,
    textAlign : "center",
    justifyContent : "center",
  },
  container_text : {
    color : "white",
    margin : 5,
  }
});
