import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  listContainer: {
    flex: 1,
    
    marginTop: 15,
    paddingHorizontal: 15,
  },
  weapperStyle: {
    justifyContent: 'space-between',
  },
  productContainer: {
    width: '47%',
    marginBottom: 20,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 15,
    gap: 10,
  },
  image: {
    height: 200,
    width: 120,
    resizeMode:"center",
  },
  title: {
    fontFamily:'AresenalBoldItalic'
  },
  price: {
    fontSize: 20,
    fontVariant: '',
    fontFamily:'AresenalBoldItalic'
  },
})