import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";

const AppNavigator = createStackNavigator({
    Home:{
        screen: HomeScreen,
    },
    SecondPage : {
        screen: SecondPage
    },
    ThirdPage : {
        screen: ThirdPage
    },
})

export default createAppContainer(AppNavigator);