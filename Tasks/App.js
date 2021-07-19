//Navigation inserindo tab navigator para navegação por tabs

/*
yarn add @react-navigation/bottom-tabs
yarn add @react-navigation/native
yarn add @react-navigation/stack --force
yarn add react-native-reanimated
yarn add react-native-gesture-handler
yarn add react-native-screens
yarn add react-native-safe-area-context @react-native-community/masked-view
*/

import React, {useState} from 'react';
import {
  Text,
  View,
  Button,
  FlatList,
  StatusBar,
  TouchableHighlight,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Modal,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreenPage from './components/HomeScreenPage/HomeScreenPage';

const Guias = createBottomTabNavigator();

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

function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={estilos.container}>
      <HomeScreenPage />
      {/* <StatusBar
        backgroundColor={'blue'}
        barStyle="default"
        hidden={false}
        animated={true}
        networkActivityIndicatorVisible={false}
        translucent={false}
      /> */}
      {/* <FlatList
        style={estilos.flatList}
        data={produtos}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={estilos.listItem}>
            <Text style={estilos.task}>
              {item.desc[0]} ------------- {item.desc[1]}
            </Text>

            <View style={estilos.buttons}>
              <Button title="Ed" />
              <Button title="Ex" />
            </View>
          </View>
        )}
      />

      <Modal
        animationType="slide"
        transparent={false}
        visible={false}
        style={{}}>
        <View style={estilos.modal}>
          <Text style={estilos.textoModal}>CFB Cursos</Text>
          <Text style={estilos.textoModal}>Curso de React Native</Text>
        </View>
      </Modal> */}
    </SafeAreaView>
  );
}

function SaveTaskScreen({navigation}) {
  return (
    <View style={estilos.container}>
      <TextInput
        style={estilos.txtTask}
        placeholder="Descreva sua tarefa"
        //value={nome}
        //onChangeText={text => setnome(text)}
        // autoCapitalize="characters"
        // multiline="true"
      />

      <TextInput
        style={estilos.txtTask}
        placeholder="Descreva a observação da tarefa"
        multiline={true}
        numberOfLines={4}
        //value={nome}
        //onChangeText={text => setnome(text)}
        // autoCapitalize="characters"
        //multiline="true"
      />

      <TouchableHighlight
        style={estilos.buttonSave}
        // onPress={contar}
        underlayColor="#008">
        <Text>Salvar</Text>
      </TouchableHighlight>

      <TouchableHighlight
        style={estilos.buttonSave}
        // onPress={contar}
        underlayColor="#008">
        <Text>Limpar</Text>
      </TouchableHighlight>
    </View>
  );
}

function AboutScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Cursos Screen</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Guias.Navigator initialRouteName="HomeScreen">
        <Guias.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Tarefas',
            headerStyle: {
              backgroundColor: '#008',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerRight: () => (
              <Button
                title="Cursos"
                color="#000"
                onPress={() => alert('Botão Cursos Clicado')}
              />
            ),
          }}
        />

        <Guias.Screen
          name="Cadastrar"
          component={SaveTaskScreen}
          options={{title: 'Cadastrar'}}
        />

        <Guias.Screen
          name="Sobre"
          component={AboutScreen}
          options={{title: 'Sobre'}}
        />
      </Guias.Navigator>
    </NavigationContainer>
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
