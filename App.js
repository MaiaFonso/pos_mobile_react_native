import React from 'react';
import {Router, Scene, Stack, Actions} from 'react-native-router-flux';
import Login from './src/screens/Login';
import Todos from './src/screens/Todos';
import TodoDetail from './src/screens/TodoDetail';
import TodoAtualiza from './src/screens/TodoAtualiza';
import TodoAdd from './src/screens/TodoAdd';
import 'react-native-gesture-handler';

const App: () => React$Node = () => {
  return (
    <>
      <Router>
        <Stack key="root" headerLayoutPreset="center">
          <Scene
            key="home"
            initial={true}
            component={Login}
            hideNavBar={true}
          />
          <Scene key="todos" component={Todos} hideNavBar={false} />
          <Scene key="todoDetail" component={TodoDetail} hideNavBar={false} />
          <Scene
            key="todoAtualiza"
            component={TodoAtualiza}
            hideNavBar={false}
          />
          <Scene key="todoAdd" component={TodoAdd} hideNavBar={false} />
        </Stack>
      </Router>
    </>
  );
};

export default App;
