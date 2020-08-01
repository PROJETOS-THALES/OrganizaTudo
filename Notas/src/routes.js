import { createStackNavigator } from "react-navigation";
import Login from "./pages/Login";
import Main from "./pages/Main";

export default createStackNavigator(
    {
        Login,
        Main
    },
    {
        navigationOptions: {
            headerStyle: { backgroundColor: "#DA552F" },
            headerTintColor: "#FFF",
            
        }
    },
);