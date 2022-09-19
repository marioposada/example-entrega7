import ColorScreen from "./src/screens/ColorScreen";
import CounterScreen from "./src/screens/CounterScreen";
import HomeScreen from "./src/screens/HomeScreen";
import ImageScreen from "./src/screens/ImageScreen";
import TextScreen from "./src/screens/TextScreen";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Text: TextScreen,
  
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
