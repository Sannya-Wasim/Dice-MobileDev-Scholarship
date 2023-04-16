import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  headingView: {
    borderBottomWidth: 1,
    borderColor: "green",
  },
  headingStyle: {
    color: "green",
    padding: 10,
    fontSize: 23,
    fontWeight: "600",
  },
  studentHeading: {
    color: "green",
    padding: 2,
  },
  studentDesc: {
    fontWeight: "600",
    fontSize: 15,
  },
  descContainer: {
    flexDirection: "row",
    padding: 5,
  },
  cardContainer: {
    backgroundColor: "lightgreen",
    height: 230,
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 10,
  },
});

export const LoginStyles = StyleSheet.create({
  input: {
    height: 50,
    margin: 20,
    padding: 15,
    // backgroundColor: "#E4DCCF",
    color: "#002B5B",
    borderBottomWidth: 1,
    borderBottomColor: "#002B5B",
    width: 320,
  },
  head: {
    textAlign: "center",
    justifyContent: "center",
    fontSize: 40,
    color: "#002B5B",
    margin: 10,
  },
  button: {
    backgroundColor: "#EA5455",
    color: "#F9F5EB",
    margin: 40,
    padding: 15,
    borderRadius: 5,
    textAlign: "center",
    justifyContent: "center",
    height: 50,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
