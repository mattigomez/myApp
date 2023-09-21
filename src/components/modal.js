import React from 'react'
import { Button, Modal as NewModal, StyleSheet, Text, View } from 'react-native'


const Modal = ({ modalVisible, onHandleDelete,selectedItem, closeModal }) => {
  return (
    <NewModal visible={modalVisible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.modalMessage}>
            <Text>Estás seguro de eliminar "{selectedItem}"?</Text> 
          </View>
          <View style={styles.modalButtonContainer}>
           <View style={styles.modalButton}>
            <Button title="Eliminar" onPress={onHandleDelete} color="green" />
           </View>
           <View style={styles.modalButton}>
              <Button title="Cancelar" onPress={closeModal} color="red" />
           </View>
          </View>
        </View>
      </View>
    </NewModal>
  )
}

export default Modal

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
  },
  modalMessage: {
    marginBottom: 20,
    textAlign:"center"
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent:"space-around"
  },
  modalButton: {
    flex: 1,
    marginHorizontal: 5,
    width:100
  },
})