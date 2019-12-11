import {
  createAppContainer,
  createStackNavigator,
} from "react-navigation";

import Home from './src/views/Home'
import User from './src/views/User'


const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  Profile: {screen: User},
});

const App = createAppContainer(MainNavigator);

export default App;