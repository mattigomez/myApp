import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store  from "./src/store";
import MainNavigator from "./src/navigation/mainNavigator";
import { init } from "./src/db";
import { useFonts } from 'expo-font'
import fonts from "./src/global/fonts";

init()
.then(() => console.log('DB initalized'))
.catch( err => console.log('DB failed', err.message))

export default function App() {
  const [fontsLoaded] = useFonts(fonts)

  if(!fontsLoaded){
    return null
  }
  
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </Provider> 
    )
}
