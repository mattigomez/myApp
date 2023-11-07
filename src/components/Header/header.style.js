import { StyleSheet } from "react-native";
import { colors } from '../../constants/colors';


export default styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        flexDirection:'row',  
        paddingTop:30,
        paddingBottom:10,
        alignItems:'center',
        paddingLeft:50
        
      },
      text: {
        flex:1,
        textAlign:'center',
        fontSize: 30,
        fontWeight: '400',
        fontFamily:'ArsenalItalic'
      },
      iconContainer:{
        paddingRight:30

      },
  })
