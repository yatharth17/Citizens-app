import React, { Component } from "react";
import { Text, View } from "react-native";

export default class FetchTest extends Component {
  componentDidMount() {
    try {
      var main = async () => {
        let response = await fetch(
          "http://localhost:8080/input/api/citizenProblemFeed",
          {
            method: "POST",
            body: JSON.stringify(data)
          }
        );

        if (response != "Authentication Failed !") {
          alert("authenticated successfully!!!");
        }
      };
      main();
    } catch (errors) {
      alert(errors);
    }
  }
  render() {
    return (
      <View>
        <Text> Fetch Page</Text>
      </View>
    );
  }
}
