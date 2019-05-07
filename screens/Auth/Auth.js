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
  constructor(props) {
    super(props);
    Dimensions.addEventListener("change", dims => {
      this.setState({
        respStyles: {
          pwContainerDirection:
            Dimensions.get("window").height > 500 ? "column" : "row",
          pwContainerJustifyContent:
            Dimensions.get("window").height > 500
              ? "flex-start"
              : "space-between",
          pwWrapperWidth: Dimensions.get("window").height > 500 ? "100%" : "45%"
        }
      });
    });
    this.state = {
      respStyles: {
        pwContainerDirection: "column",
        pwContainerJustifyContent: "flex-start",
        pwWrapperWidth: "100%"
      }
    };
  }
  loginHandler = () => {
    startMainTabs();
  };
  render() {
    let headingText = null;

    if (Dimensions.get("window").height > 500) {
      headingText = (
        <MainText>
          <HeadingText>Please Log In</HeadingText>
        </MainText>
      );
    }
    return (
      <ImageBackground
        source={{
          uri:
            "https://images.unsplash.com/photo-1503756234508-e32369269deb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        }}
        style={styles.backgroundImage}
      >
        <View style={styles.container}>
          {headingText}
          <ButtonWithBackground color="#29aaf4" onPress={() => alert("hello")}>
            Switch to login
          </ButtonWithBackground>
          <View style={styles.inputContainer}>
            <DefaultInput placeholder="Your email" style={styles.input} />
            <View
              style={{
                flexDirection: this.state.respStyles.pwContainerDirection,
                justifyContent: this.state.respStyles.pwContainerJustifyContent
              }}
            >
              <View style={{ width: this.state.respStyles.pwWrapperWidth }}>
                <DefaultInput placeholder="password" style={styles.input} />
              </View>
              <View style={{ width: this.state.respStyles.pwWrapperWidth }}>
                <DefaultInput
                  placeholder="confirm password"
                  style={styles.input}
                />
              </View>
            </View>
          </View>
          <ButtonWithBackground color="#29aaf4" onPress={this.loginHandler}>
            Submit
          </ButtonWithBackground>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    // borderColor: "red",
    // borderWidth: 1,
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
  },
  passwordContainer: {
    flexDirection: Dimensions.get("window").height > 500 ? "column" : "row",
    justifyContent: "space-between"
  },
  passwordWrapper: {
    width: Dimensions.get("window").height > 500 ? "100%" : "45%"
  }
});

export default AuthScreen;
