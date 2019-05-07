import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  ImageBackground,
  Dimensions
} from "react-native";
import startMainTabs from "../MainTabs/startMainTabs";
import sideMenu from "../MainTabs/sideMenu";
import DefaultInput from "../../components/UI/DefaultInput/DefaultInput";
import HeadingText from "../../components/UI/HeadingText/HeadingText";
import MainText from "../../components/UI/MainText/MainText";
import ButtonWithBackground from "../../components/UI/ButtonWithBackground/ButtonWithBackground";

class AuthScreen extends Component {
  loginHandler = () => {
    startMainTabs();
  };
  render() {
    let headingText=null;
    console.log(this.props);
    return (
      <ImageBackground
        source={{
          uri:
            "data:image/jpeg;base64,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"
        }}
        style={styles.backgroundImage}
      >
        <View style={styles.container}>
          <MainText>
            <HeadingText>Hello world</HeadingText>
          </MainText>
         <ButtonWithBackground color="#29aaf4" onPress={()=>alert("hello")}>Switch to login</ButtonWithBackground>
          <View style={styles.inputContainer}>
            <DefaultInput placeholder="Your email" style={styles.input} />
            <DefaultInput placeholder="password" style={styles.input} />
            <DefaultInput placeholder="confirm password" style={styles.input} />
          </View>
          <ButtonWithBackground color="#29aaf4" onPress={this.loginHandler}>Submit</ButtonWithBackground>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    borderColor: "red",
    borderWidth: 1,
    alignItems: "center"
  },
  inputContainer: {
    width: "80%"
  },
  backgroundImage: {
    width: "100%",
    flex: 1,
    justifyContent: "center"
  },
  input: {
    backgroundColor: "#eee",
    borderColor: "#bbb"
  }
});

export default AuthScreen;
