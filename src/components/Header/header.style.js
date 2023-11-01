import { StyleSheet } from "react-native";
import { colors } from '../../constants/colors';


export default styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        flexDirection:'row',
        height: 70,
        width: '100%',
        justifyContent:'space-around',
        alignItems: 'center',
        paddingTop:15
      },
      text: {
        fontSize: 30,
        fontWeight: '400',
      },
  })
