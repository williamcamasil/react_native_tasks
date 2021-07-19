import React, {useState} from 'react';
import {
  Text,
  View,
  Button,
  FlatList,
  StatusBar,
  TouchableHighlight,
  TouchableWithoutFeedback,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Modal,
} from 'react-native';

const produtos = [
  {
    id: '001',
    desc: ['Tarefa 0', '0'],
  },
  {
    id: '002',
    desc: ['Tarefa 1', '0'],
  },
  {
    id: '003',
    desc: ['Tarefa 2', '0'],
  },
  {
    id: '004',
    desc: ['Tarefa 3', '0'],
  },
  {
    id: '005',
    desc: ['Tarefa 4', '0'],
  },
  {
    id: '006',
    desc: ['Tarefa 5', '0'],
  },
  {
    id: '007',
    desc: ['Tarefa 6', '0'],
  },
];

export default function () {
  const [visivel, setVisivel] = useState(false);

  return (
    <SafeAreaView>
      <FlatList
        style={estilos.flatList}
        data={produtos}
        onPress={() => setVisivel(true)}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableWithoutFeedback onPress={() => setVisivel(true)}>
            <View style={estilos.listItem}>
              <Text style={estilos.task}>
                {item.desc[0]} ------------- {item.desc[1]}
              </Text>

              <View style={estilos.buttons}>
                <Button title="Ed" />
                <Button title="Ex" />
              </View>
            </View>
          </TouchableWithoutFeedback>
        )}
      />

      <Modal
        animationType="slide"
        transparent={false}
        visible={visivel}
        style={{}}>
        <View style={estilos.modal}>
          <Button title="Fechar" onPress={() => setVisivel(false)} />
          <Text>Tarefa 1</Text>
          <Text>Observações da tarefa 1</Text>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  menu: {
    alignItems: 'center',
    backgroundColor: 'green',
  },

  container: {
    width: '100%',
  },

  flatList: {
    margin: 20,
  },

  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },

  task: {
    width: '80%',
  },

  buttons: {
    width: '20%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  button: {
    marginRight: 5,
  },

  //----------

  txtTask: {
    borderWidth: 1,
    borderBottomColor: '#000',
    borderRadius: 10,
  },

  buttonSave: {
    alignItems: 'center',
    backgroundColor: '#ccc',
    padding: 10,
  },
});
