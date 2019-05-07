import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  Image
} from "react-native";
import { connect } from "react-redux";
import { Navigation } from "react-native-navigation";
import * as actions from "../../store/actions/index";
import PlaceInput from "../../components/PlaceInput/PlaceInput";
import MainText from "../../components/UI/MainText/MainText";
import HeadingText from "../../components/UI/HeadingText/HeadingText";
import PickLocation from "../../components/PickLocation/PickLocation";
import PickImage from "../../components/PickImage/PickImage";

class SharePlaceScreen extends Component {
  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
    this.state = {
      placeName: ""
    };
  }
  componentDidMount() {
    // this.navigationEventListener = Navigation.events().bindComponent(this.onNavigator);
    Navigation.events().registerNavigationButtonPressedListener(event => {
      console.log(event);
      Navigation.mergeOptions(this.props.componentId, {
        sideMenu: {
          left: {
            visible: true
          }
        }
      });
    });
  }
  //   navigationButtonPressed({ buttonId }) {
  //       // will be called when "buttonOne" is clicked
  //       console.log(buttonId);
  //     }
  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  };
  placeAddedHandler = () => {
    if (this.state.placeName.trim() !== "") {
      this.props.onAddPlace(this.state.placeName);
    }
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <MainText>
            <HeadingText>Share a place with us!</HeadingText>
          </MainText>
          <PickImage />
          <PickLocation />
          <PlaceInput
            placeName={this.state.placeName}
            onChangeText={this.placeNameChangedHandler}
          />
          <Button title="Share the place!" onPress={this.placeAddedHandler} />
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  placeholder: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#eee",
    width: "80%",
    height: 150
  },
  button: {
    margin: 8
  },
  previewImage: {
    width: "100%",
    height: "100%"
  }
});

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: placeName => dispatch(actions.addPlace(placeName))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(SharePlaceScreen);
