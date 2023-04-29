import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { styles } from "./Styles.js";

export default function Student(props) {
  React.useEffect(() => {
    alert("Loading...");
  }, []);
  return (
    // Student Card
    <View style={styles.cardContainer}>
      {/* Student Heading */}
      <View>
        <Text style={styles.headingView}>STUDENT</Text>
        <Text style={styles.headingStyle}>IDENTITY CARD</Text>
      </View>

      {/* Description Container */}
      <View style={styles.descContainer}>
        {/* Student Description */}
        <View>
          <View>
            <Text style={styles.studentHeading}>Name</Text>
            <Text style={styles.studentDesc}>{props.studentName}</Text>
          </View>

          <View>
            <Text style={styles.studentHeading}>Studies at</Text>
            <Text style={styles.studentDesc}>{props.university}</Text>
          </View>

          <View>
            <Text style={styles.studentHeading}>Date of Birth</Text>
            <Text style={styles.studentDesc}>{props.DOB}</Text>
          </View>
        </View>

        {/* Images Container */}
        <View>
          <Image source={props.image} style={styles.image}></Image>
          <Text style={{ textAlign: "center" }}>012 345 678 9</Text>
        </View>
      </View>
    </View>
  );
}
