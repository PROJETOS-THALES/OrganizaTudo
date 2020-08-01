import { createStackNavigator } from "react-navigation";
import Login from "./pages/Login";

export default createStackNavigator(
    {
        Login
    },
    {
        navigationOptions: {
            headerStyle: { backgroundColor: "#DA552F" },
            headerTintColor: "#FFF"
        }
    },
);