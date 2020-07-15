import React, {useState, useEffect} from 'react';
import {Text, Button, StyleSheet, ScrollView} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Card from '../components/Card';
import axios from 'axios';

const url = 'https://node-todo-dev.herokuapp.com/api/todos';

export default () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios.get(url).then((res) => {
      setTodos(res.data);
    });
  }, []);

  function renderCards() {
    return todos.map((todo, index) => (
      <Card
        todo={todo}
        description={todo.description}
        date={todo.createdAt}
        key={index}
        id={todo._id}
        done={todo.done}
      />
    ));
  }

  function handleAdd() {
    Actions.todoAdd();
  }

  return (
    <ScrollView style={styles.container}>
      <Text>Todos</Text>
      <Button color="#3498db" title="Cadastrar" onPress={handleAdd} />
      {renderCards()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#CCC',
    height: '100%',
    padding: 10,
  },
});
