import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import * as Font from 'expo-font';
import {
  DetailScreen,
  PostsScreen,
  UsersScreen
} from "./src/screens/IndexScreens";

(async function () {
  await Font.loadAsync({
    'josefin': require('./assets/fonts/Josefin_Sans/JosefinSans-VariableFont_wght.ttf'),
    'fira': require('./assets/fonts/Fira_Code/FiraCode-VariableFont_wght.ttf'),
  });
})();

const AppNavigator = createStackNavigator({
  Users:{
    screen: UsersScreen,
  },
  Posts:{
    screen: PostsScreen,
  },
  Detail:{
    screen: DetailScreen
  }
  },{
  initialRouteName: 'Users',
});

export default createAppContainer(AppNavigator);
