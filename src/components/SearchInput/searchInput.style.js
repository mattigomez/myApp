import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    padding: 10,
    margin: 10,
    fontSize: 15,
    borderRadius: 10,
    backgroundColor: colors.primary,
  },
});
