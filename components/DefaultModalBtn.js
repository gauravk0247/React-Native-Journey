import React, { useState } from 'react';
import {
  View,
  Button,
  StyleSheet,
  Modal,
  Text
} from 'react-native';

const DefaultModalBtn = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <View style={styles.main}>
      <Modal
        transparent={true}
        visible={showModal}
        animationType= "slide"
      >
        <View style={styles.centerView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello Code Step by step</Text>
            <Button title='Close Modal' onPress={()=>setShowModal(false)}></Button>
          </View>
        </View>
      </Modal>
      <View style={styles.buttonView}>
        <Button title='Open Modal' onPress={()=>setShowModal(true)}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1
  },
  buttonView: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalView: {
    backgroundColor: '#fff',
    padding: 40,
    borderRadius: 20,
    shadowColor: 'black',
    elevation: 5
  },
  modalText: {
    fontSize: 25,
    marginBottom: 20
  }
})

export default DefaultModalBtn;