import { Navigation } from "react-native-navigation";
import {Platform} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
const startTabs = () => {
  Promise.all([
    Icon.getImageSource(Platform.OS==='android'?"md-map":"ios-map", 30),
    Icon.getImageSource(Platform.OS==='android'?"md-share-alt":"ios-share-alt", 30),
    Icon.getImageSource(Platform.OS==='android'?"md-menu":"ios-menu", 30)
  ]).then(sources => {
    Navigation.setRoot({
      root: {
        sideMenu: {      
          left: {
            component: {
              name: `navigation.playground.SideDrawer`,
              passProps: {
                text: "This is a left side menu screen"
              }
            }
          },
          center: {
            bottomTabs: {
              children: [
                {
                  stack: {
                    children: [
                      {
                        component: {
                          name: "navigation.playground.FindPlaceScreen",
                          options: {
                            bottomTab: {
                              text: "Find Place",
                              selectedIconColor: 'orange',
                              icon: sources[0]
                            },
                            topBar: {
                              visible: true,
                              title: {
                                text: "Find Place"
                              },
                              leftButtons: [
                                {
                                  id:"Menu",
                                  text: "Overview",
                                  icon: sources[2],
                                  color: 'orange',
                                }
                              ]
                            }
                          }
                        }
                      }
                    ]
                  }
                },
                {
                  stack: {
                    children: [
                      {
                        component: {
                          name: "navigation.playground.SharePlaceScreen",
                          options: {
                            bottomTab: {
                              selectedIconColor: 'orange',
                              text: "Share Place",
                              icon: sources[1]
                            },
                            topBar: {
                              visible: true,
                              title: {
                                text: "Share Place"
                              },
                              leftButtons: [
                                {
                                  id:"Menu",
                                  text: "Overview",
                                  icon: sources[2],
                                  color: 'orange',
                                }
                              ]
                            }
                          }
                        }
                      }
                    ]
                  }
                }
              ]
            }
          }
        }
      }
    });
  });
};

export default startTabs;
