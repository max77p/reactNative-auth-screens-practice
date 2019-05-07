/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";
import AuthScreen from "./screens/Auth/Auth";
import SharePlaceScreen from "./screens/SharePlace/SharePlace";
import FindPlaceScreen from "./screens/FindPlace/FindPlace";
import PlaceDetailScreen from "./screens/PlaceDetail/PlaceDetail";
import configureStore from "./store/configureStore";
import SideDrawer from "./screens/SideDrawer/SideDrawer";
const store = configureStore();

//register screens
Navigation.registerComponent(
  `navigation.playground.WelcomeScreen`,
  () => AuthScreen
);
Navigation.registerComponentWithRedux(
  `navigation.playground.SharePlaceScreen`,
  () => SharePlaceScreen,
  Provider,
  store
);
Navigation.registerComponentWithRedux(
  `navigation.playground.FindPlaceScreen`,
  () => FindPlaceScreen,
  Provider,
  store
);
Navigation.registerComponentWithRedux(
  `navigation.playground.PlaceDetailScreen`,
  () => PlaceDetailScreen,
  Provider,
  store
);
Navigation.registerComponent(
  `navigation.playground.SideDrawer`,
  () => SideDrawer
);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions({
    topBar: {
      background: {
        color: "#039893"
      },
      title: {
        color: "black"
      },
      backButton: {
        title: "", // Remove previous screen name from back button
        color: "white"
      },
      buttonColor: "white"
    }
  });

  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: "navigation.playground.WelcomeScreen",
              passProps: {
                text: "stack with one child"
              },
              alignment: "center",
              options: {
                topBar: {
                  visible: true,
                  title: {
                    text: "main screen"
                  }
                }
              }
            }
          }
        ]
      }
    }
  });

});
// stack: {
//   children: [
//     {
//       component: {
//         name: "navigation.playground.WelcomeScreen",
//         passProps: {
//           text: "stack with one child"
//         },
//         alignment: "center",
//         options: {
//           topBar: {
//             visible: true,
//             title: {
//               text: "main screen"
//             }
//           }
//         }
//       }
//     }
//   ]
// }
