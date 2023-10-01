import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CartNavigator from "./cartNavigator";
import StackNavigator from "./stackNavigator";
import OrdersNavigator from "./ordersNavigator";
import { colors } from "../constants/colors";
import { StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Shop"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <BottomTab.Screen
        name="Shop"
        component={StackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <Entypo name="home" size={28} color={focused ? "black" : "white"} />
          ),
        }}
      />
      <BottomTab.Screen
        name="CartNav"
        component={CartNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <Entypo name="shopping-cart" size={24} color={focused ? "black" : "white"} />
          ),
        }}
      />
        <BottomTab.Screen
        name="OrdersNav"
        component={OrdersNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <Entypo name="list" size={24} color={focused ? "black" : "white"} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.primary,
  },
});
