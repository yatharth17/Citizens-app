import React, { Component } from "react";
import {
  Alert,
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  ScrollView
} from "react-native";

import { Button, Block, Input, Text } from "../components";
import { theme } from "../constants";

export default class SignUp extends Component {
  state = {
    emailID: "",
    password: "",
    firstName: "",
    lastName: "",
    areaID: "",
    phone: "",
    stateID: "",
    cityID: ""
  };

  handleSignUp() {
    fetch(
      "http://ec2-13-235-67-142.ap-south-1.compute.amazonaws.com:8080/input/auth/register",
      {
        method: "POST",
        body: JSON.stringify({
          emailID: this.state.emailID,
          password: this.state.password,
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          areaID: this.state.areaID,
          phone: this.state.phone,
          stateID: this.state.stateID,
          cityID: this.state.cityID
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      }
    )
      .then(response => response.json())
      .then(json => Alert.alert("Account Created"))
      .catch(err => console.log("erroravikant" + err));
    console.log("component did mount");
  }

  render() {
    const { navigation } = this.props;
    const { loading, errors } = this.state;
    const hasErrors = key => (errors.includes(key) ? styles.hasErrors : null);

    return (
      <ScrollView>
        <KeyboardAvoidingView style={styles.signup} behavior="padding">
          <Block padding={[0, theme.sizes.base * 2]}>
            <Text h1 bold>
              Sign Up
            </Text>
            <Block middle>
              <Input
                email
                label="Email"
                error={hasErrors("email")}
                style={[styles.input, hasErrors("email")]}
                defaultValue={this.state.email}
                onChangeText={text => this.setState({ emailID: text })}
              />
              <Input
                label="FirstName"
                error={hasErrors("email")}
                style={[styles.input, hasErrors("email")]}
                defaultValue={this.state.email}
                onChangeText={text => this.setState({ firstName: text })}
              />
              <Input
                label="Username"
                error={hasErrors("username")}
                style={[styles.input, hasErrors("username")]}
                defaultValue={this.state.username}
                onChangeText={text => this.setState({ lastName: text })}
              />
              <Input
                secure
                label="Password"
                error={hasErrors("password")}
                style={[styles.input, hasErrors("password")]}
                defaultValue={this.state.password}
                onChangeText={text => this.setState({ password: text })}
              />
              <Button gradient onPress={() => this.handleSignUp()}>
                {loading ? (
                  <ActivityIndicator size="small" color="white" />
                ) : (
                  <Text bold white center>
                    Sign Up
                  </Text>
                )}
              </Button>

              <Button onPress={() => navigation.navigate("Login")}>
                <Text
                  gray
                  caption
                  center
                  style={{ textDecorationLine: "underline" }}
                >
                  Back to Login
                </Text>
              </Button>
            </Block>
          </Block>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  signup: {
    flex: 1,
    justifyContent: "center"
  },
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  hasErrors: {
    borderBottomColor: theme.colors.accent
  }
});
