import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
  },
  headingView: {
    borderBottomWidth: 1,
    borderColor: "green",
    color: "green",
    fontWeight: "800",
    fontSize: 23,
    marginLeft: 10,
  },
  headingStyle: {
    color: "white",
    padding: 10,
    fontSize: 13,
    fontWeight: "600",
    marginLeft: 10,
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
    justifyContent: "space-around",
  },
  cardContainer: {
    backgroundColor: "lightgreen",
    height: 280,
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 10,
    margin: 10,
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
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
});
