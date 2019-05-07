import React, { Component } from "react";
import { View, Text } from "react-native";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";

import PlaceList from "../../components/PlaceList/PlaceList";
class FindPlaceScreen extends Component {
  itemSelectedHandler = key => {
      console.log(this.props);
    const selPlace = this.props.places.find(place => {
      return place.key === key;
    });
    console.log(selPlace);
    Navigation.push(this.props.componentId, {
        component: {
          name: `navigation.playground.PlaceDetailScreen`,
          passProps: {
            selectedPlace:selPlace
          },
          options: {
            topBar: {
              title: {
                text: selPlace.name
              }
            }
          }
        }
      });
  };
  render() {
    return (
      <View>
        <PlaceList
          places={this.props.places}
          onItemSelected={this.itemSelectedHandler}
        />
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    places: state.places.places
  };
};
export default connect(
  mapStateToProps,null
)(FindPlaceScreen);
