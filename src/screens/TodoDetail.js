import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {Actions} from 'react-native-router-flux';
import moment from 'moment';
import axios from 'axios';

const url = 'https://node-todo-dev.herokuapp.com/api/todos';

export default (props) => {
  function handleRemove() {
    axios
      .delete(`${url}/${props.todo._id}`)
      .then((res) => {
        Actions.todos();
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function handleEdita() {
    Actions.todoAtualiza({todo: props.todo});
  }

  return (
    <View style={styles.container}>
      <Text style={styles.information}>Descrição</Text>
      <Text style={styles.information}>{props.todo.description}</Text>
      <Text style={styles.information}>Data de criação</Text>
      <Text style={styles.information}>
        {moment(props.todo.createdAt).format('DD/MM/YYYY')}
      </Text>
      <Text style={styles.information}>Completo</Text>
      <Text style={styles.information}>{props.todo.done ? 'Sim' : 'Não'}</Text>
      <View style={styles.editar}>
        <Button color="#3498db" title="Editar" onPress={handleEdita} />
      </View>
      <View style={styles.editar}>
        <Button color="#ea2041" title="Remover" onPress={handleRemove} />
      </View>
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
  buttonContainer: {
    justifyContent: 'center',
  },
  editar: {
    marginTop: 10,
  },
});
