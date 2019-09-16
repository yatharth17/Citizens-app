import React, { Component } from "react";
import { theme } from "../constants/theme";
//import react in our code.

import {
  Text,
  View,
  StyleSheet,
  ImageEditor,
  Image,
  Button,
  ScrollView
} from "react-native";

//import all the components we are going to use.

const image = require("../assets/images/road1.jpg");
const image2 = require("../assets/images/road.jpg");

import { Card, Icon } from "react-native-elements";

//import Card

export default class App extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <ScrollView>
        <View style={styles.container}>
          <Button
            title="Add Complaint"
            onPress={() => navigation.navigate("Camera")}
          />
          <Card title="Road " image={image}>
            {/*react-native-elements Card*/}

            <Text style={styles.paragraph}>
              Road's in worse condition near hari nagar
            </Text>

            <Button
              icon={<Icon name="code" color="#ffffff" />}
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0
              }}
              title="VIEW NOW"
            />
          </Card>
          <Card title="Road" image={image2}>
            {/*react-native-elements Card*/}

            <Text style={styles.paragraph}>Roads condition in Janakpuri</Text>

            <Button
              icon={<Icon name="code" color="#ffffff" />}
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0
              }}
              title="VIEW NOW"
            />
          </Card>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",

    justifyContent: "center",

    paddingTop: 40,

    backgroundColor: "#ecf0f1"
  },

  paragraph: {
    margin: 24,

    fontSize: 18,

    fontWeight: "bold",

    textAlign: "center",

    color: "#34495e"
  }
});
