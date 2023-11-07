import { StyleSheet } from "react-native";
import { colors } from '../../../../constants/colors';

export default styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    marginHorizontal: 30,
    marginVertical:20,
    minWidth: 90,
    maxWidth: 400,
    minHeight: 30,
    height: 50,
    padding:10,
    width:'85%',
    borderRadius:25,
    alignItems:'center',
  },
  text: {
    fontSize: 25,
    fontFamily:'AresenalBoldItalic'
  },
  contentContainer: {
    paddingLeft: 20,
  },
});
