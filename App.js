import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View, TouchableOpacity, FlatList } from "react-native";
import Modal from "./components/modal";
import { AntDesign ,MaterialIcons } from '@expo/vector-icons';

  


export default function App() {

  const [textValue, setTextValue] = useState('')
  const [itemslist, setItemsList] = useState([])
  const [itemSelected, setItemSelected] = useState()
  const [modalVisible, setModalVisible] = useState(false)
  const [likedItems, setLikedItems] = useState([])
  

  const onHandleChangeItem = text => setTextValue(text)

  const handleLike = (index) => {
    // Verifica si el elemento ya está en la lista de "likedItems"
    if (likedItems.includes(index)) {
      // Si ya está en la lista, quítalo
      setLikedItems(prevState => prevState.filter(itemIndex => itemIndex !== index));
    } else {
      // Si no está en la lista, agrégalo
      setLikedItems(prevState => [...prevState, index]);
    }
  };
  const addItem = () => {
    if (textValue === '') { 
      return 
    }
    console.log('agregando elemento')
    setItemsList(prevState => [...prevState, {id: Math.random(),value: textValue}])
    setTextValue('')
  }

  const renderListItem = ({item,index}) => (
    	<View style={[styles.renderListItemContainer, likedItems.includes(index) && { backgroundColor: 'green' }]}> 
        <TouchableOpacity onPress={() => handleLike(index)}>
          <AntDesign  name="like2" size={24} color="black" />
        </TouchableOpacity>

        <Text style={[styles.textItem, { textAlign: 'left', flex: 1 }]}>{item?.value}</Text>
        
        <TouchableOpacity style={styles.textItem}  onPress={() => onHandleModal(index)}>
          <MaterialIcons name="delete" size={24} color="black" />
        </TouchableOpacity>
      </View>
  )

  const onHandleModal = index => {
    setModalVisible(true)
    setItemSelected(index)
  }

  const onHandleDelete = () => {
    console.log(itemSelected)
    let arr = itemslist
    arr.splice(itemSelected, 1)
    setItemsList(arr)
    setModalVisible(false)
  }

  const closeModal = () => {
    setModalVisible(false);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Almacen Rosario </Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Item de la lista"
          style={styles.input}
          value={textValue}
          onChangeText={onHandleChangeItem}
          underlineColorAndroid="transparent"
        ></TextInput>
        <Button title="ADD"  color={"#4b5757"} onPress={addItem}></Button>
      </View>
      <View style={styles.listContainer}>
        <FlatList data={itemslist} renderItem={renderListItem} keyExtractor={item => item.id}></FlatList>
      </View>
      <Modal modalVisible={modalVisible} onHandleDelete={onHandleDelete} selectedItem={itemslist[itemSelected]?.value} closeModal={closeModal}></Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    paddingTop: 80,
    backgroundColor: '#7c8a6e',
  },

  title: {
    fontSize: 40,
    fontWeight: '400',
    marginBottom: 30
  },

  inputContainer: {
    marginHorizontal:20,
    height:35,
    borderRadius: 15,
    flexDirection: "row",
    alignItems:'center',
    justifyContent: "space-between",
    backgroundColor: '#b0b087',
    alignContent: "center",
  },

  checkbox: {
    alignSelf: 'center',
  },

  renderListItemContainer:{
    flexDirection:"row",
    justifyContent:'space-between',
    backgroundColor: '#b0b087',
    paddingHorizontal:7,
    height: 35,
    marginTop:20,
    alignItems:'center',
    borderRadius:20
  },
  itemContainer: {
    height: 50,
    marginTop:20,
    justifyContent:"center",
    backgroundColor: '#b0b087',
    shadowColor: '#b0b087',
    shadowOffset: {width:0, height:2},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    borderRadius:10,
    elevation:5
  },

  input: {
    width: 200,
    height: 40,
    fontSize:25,
    fontWeight:'bold',
    paddingLeft: 10

  },

  listContainer: {
    marginTop:30
  },



  TextContainer: {
    margin: 20,
  },

  textItem: {
    fontSize: 25,
    paddingLeft: 25,
    color: 'black',
    fontWeight: '400',
    fontVariant: 'no-common-ligatures',
    
  },
});
