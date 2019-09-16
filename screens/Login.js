import React, { Component } from "react";
import {
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet
} from "react-native";
import * as firebase from "firebase";
import { Button, Block, Input, View, Text } from "../components";
import { theme } from "../constants";

const VALID_EMAIL = "User_17@gmail.com";
const VALID_PASSWORD = "subscribe";

export default class Login extends Component {
  state = {
    email: VALID_EMAIL,
    password: VALID_PASSWORD,
    errors: [],
    loading: false
  };
  // componentDidMount() {
  //   const firebaseConfig = {
  //     apiKey: "AIzaSyDZ4DQI6WVmjoSI4K3lR1cgCgGahPt1yYM",
  //     authDomain: "smartcitizens-1f0c6.firebaseapp.com",
  //     databaseURL: "https://smartcitizens-1f0c6.firebaseio.com",
  //     projectId: "smartcitizens-1f0c6",
  //     storageBucket: "",
  //     messagingSenderId: "172043669685",
  //     appId: "1:172043669685:web:449124a986a49e4e552efc"
  //   };

  //   firebase.initializeApp(firebaseConfig);
  // }

  handleLogin() {
    const { navigation } = this.props;
    const { email, password } = this.state;
    const errors = [];

    Keyboard.dismiss();
    this.setState({ loading: true });

    // check with backend API or with some static data
    if (email !== VALID_EMAIL) {
      errors.push("email");
    }
    if (password !== VALID_PASSWORD) {
      errors.push("password");
    }
    var data = {
      email: "me.mohakchugh@gmail.com",
      password: "test"
    };
    // try {
    //   var main = async () => {
    //     let response = await fetch(
    //       "http://ec2-13-235-67-142.ap-south-1.compute.amazonaws.com:8080/input/auth/login",
    //       {
    //         method: "POST",
    //         body: JSON.stringify(data)
    //       }
    //     );
    //     if (response != "Authentication Failed !") {
    //       alert("authenticated successfully!!!");
    //     }
    //   };
    //   main();
    // } catch (errors) {
    //   alert(errors);
    // }

    this.setState({ errors, loading: false });

    if (!errors.length) {
      navigation.navigate("Browse");
    }
    fetch("http://13.235.67.142/input/login/auth", {
      method: "POST",
      body: JSON.stringify({
        emailID: "foo@XYZ.COM",
        password: "bar"
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(json => console.log("checking" + json));
  }

  _handlelogin() {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)

      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        <View>
          <Text>{errorMessage}</Text>
        </View>;
      });
    navigation.navigate("Login");
  }

  render() {
    const { navigation } = this.props;
    const { loading, errors } = this.state;
    const hasErrors = key => (errors.includes(key) ? styles.hasErrors : null);

    return (
      <KeyboardAvoidingView style={styles.login} behavior="padding">
        <Block padding={[0, theme.sizes.base * 2]}>
          <Text h1 bold>
            Login
          </Text>
          <Block middle>
            <Input
              label="Email"
              error={hasErrors("email")}
              style={[styles.input, hasErrors("email")]}
              defaultValue={this.state.email}
              onChangeText={text => this.setState({ email: text })}
            />

            <Input
              secure
              label="Password"
              error={hasErrors("password")}
              style={[styles.input, hasErrors("password")]}
              defaultValue={this.state.password}
              onChangeText={text => this.setState({ password: text })}
            />
            <Button gradient onPress={() => this.handleLogin()}>
              {loading ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                <Text bold white center>
                  Login
                </Text>
              )}
            </Button>

            <Button onPress={() => navigation.navigate("Forgot")}>
              <Text
                gray
                caption
                center
                style={{ textDecorationLine: "underline" }}
              >
                Forgot your password?
              </Text>
            </Button>
          </Block>
        </Block>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  login: {
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
