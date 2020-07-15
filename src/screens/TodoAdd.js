/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {View, Text, TextInput, StyleSheet, ToastAndroid, Button} from 'react-native';
import {Actions} from 'react-native-router-flux';
import axios from 'axios';

const url = 'https://node-todo-dev.herokuapp.com/api/todos';

export default (props) => {
  function handleEdita() {
    const employee = {
	description: textDescricao,
	};
    axios
      .post(`${url}`, employee)
      .then((res) => {
        ToastAndroid.show('Todo cadastrado!', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
        Actions.todos();
      })
      .catch((error) => {
        console.log(error);
      });
  }
  const [textDescricao, setTextDescricao] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.information}>Descrição</Text>
      <TextInput
        style={styles.input}
        onChangeText={textDescricao => setTextDescricao(textDescricao)}
        defaultValue={textDescricao}
        />
      <Button color="#3498db" title="Cadastrar" onPress={handleEdita} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#CCC',
    height: '100%',
    padding: 10,
  },
  information: {
    fontSize: 16,
    color: '#000',
  },
  input: {
    height: 40,
    backgroundColor: '#FFF',
    marginBottom: 10,
    color: '#000',
    borderRadius: 7,
    padding: 10,
  },
  buttonContainer: {
    justifyContent: 'center',
  },
});
