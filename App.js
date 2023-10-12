import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store  from "./src/store";
import MainNavigator from "./src/navigation/mainNavigator";


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </Provider> 
    )
}
