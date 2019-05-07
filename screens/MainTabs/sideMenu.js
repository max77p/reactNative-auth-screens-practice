import { Navigation } from "react-native-navigation";
import Icon from "react-native-vector-icons/Ionicons";
const sideMenu = () => {
    Navigation.setRoot({
        root: {
          sideMenu: {
            left: {
              component: {
                name: `navigation.playground.SideDrawer`,
                id:"side",
                passProps: {
                  text: 'This is a left side menu screen'
                }
              }
            },
            center: {
              component: {
                name: 'navigation.playground.WelcomeScreen'
              },
            }
          }
        }
      });
};

export default sideMenu;
