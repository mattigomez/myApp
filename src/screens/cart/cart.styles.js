import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";


export default styles = StyleSheet.create({
    container: {
        //aca se maneja las cards, el precio total y btn confirmar
        flex:1,
        backgroundColor: colors.secondary
        
    },
      footer: {
        
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        padding:5,
        backgroundColor: colors.secondary,
      },
      btn:{
        backgroundColor:'green',
        padding:10,
        borderRadius:10
      }
}) 