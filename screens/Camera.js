import * as React from "react";
import { theme } from "../constants/theme";
import {
  Button,
  Image,
  View,
  ScrollView,
  TextInput,
  Input
} from "react-native";

import * as ImagePicker from "expo-image-picker";

import Constants from "expo-constants";

import * as Permissions from "expo-permissions";

import { Dropdown } from "react-native-material-dropdown";

export default class ImagePickerExample extends React.Component {
  state = {
    emailID: "",
    password: "",
    firstName: "",
    lastName: "",
    areaID: "",
    phone: "",
    stateID: "",
    cityID: "",
    value: "",
    onChangeText: "",
    category: [
      {
        value: "Hospital"
      },
      {
        value: "Fire"
      },
      {
        value: "Road"
      }
    ]
  };

  render() {
    let { image } = this.state;

    return (
      <ScrollView>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Button
            title="Pick an image from camera roll"
            onPress={this._pickImage}
          />

          {image && (
            <Image
              source={{ uri: image }}
              style={{ width: 200, height: 200 }}
            />
          )}
          <TextInput
            style={{
              height: 40,
              borderColor: "gray",
              borderWidth: 1,
              padding: 70
            }}
            onChangeText={text => onChangeText(text)}
            value={this.state.value}
          />
          <Button
            title="Submit"
            onPress={() => this.setState({ image: null })}
          />
          <Block middle>
            <Input
              email
              label="Email"
              defaultValue={this.state.emailID}
              onChangeText={text => this.setState({ emailID: text })}
            />
            <Input
              label="password"
              defaultValue={this.state.password}
              onChangeText={text => this.setState({ password: text })}
            />
            <Input
              label="firstName"
              defaultValue={this.state.firstName}
              onChangeText={text => this.setState({ firstName: text })}
            />
            <Input
              label="lastName"
              defaultValue={this.state.lastName}
              onChangeText={text => this.setState({ lastName: text })}
            />
            <Input
              label="areaID"
              defaultValue={this.state.areaID}
              onChangeText={text => this.setState({ areaID: text })}
            />
            <Input
              label="phone"
              defaultValue={this.state.phone}
              onChangeText={text => this.setState({ phone: text })}
            />
            <Input
              label="stateID"
              defaultValue={this.state.stateID}
              onChangeText={text => this.setState({ stateID: text })}
            />
            <Input
              label="cityID"
              defaultValue={this.state.cityID}
              onChangeText={text => this.setState({ cityID: text })}
            />
          </Block>
        </View>
      </ScrollView>
    );
  }

  componentDidMount() {
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  };

  _pickImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,

      allowsEditing: true,

      aspect: [4, 3]
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };
}
